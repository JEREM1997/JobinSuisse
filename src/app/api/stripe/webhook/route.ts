import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe-server'
import { supabaseAdmin } from '@/lib/supabase'
import { sendEbookEmail, sendPackConfirmationEmail, sendInternalAlertEmail } from '@/lib/emails'
import Stripe from 'stripe'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    console.error(`Webhook signature verification failed:`, err)
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const { pack_type } = session.metadata!
    const customerEmail = session.customer_details?.email!

    try {
      if (pack_type === 'starter') {
        // Generate signed URL for eBook download (7 days validity)
        const { data: urlData } = await supabaseAdmin.storage
          .from(process.env.EBOOK_BUCKET!)
          .createSignedUrl('travailler-en-suisse.pdf', 60 * 60 * 24 * 7) // 7 days

        if (urlData?.signedUrl) {
          await sendEbookEmail(customerEmail, urlData.signedUrl)
        }

        // Send internal alert for CV review
        await sendInternalAlertEmail('starter', customerEmail, session.id)
      } else {
        // For Pack 2 and 3, create pack request in database
        const packData: any = {
          pack_type,
          stripe_payment_intent_id: session.payment_intent,
          amount_paid: (session.amount_total || 0) / 100,
          is_deposit: true,
          is_eu_citizen: session.metadata?.is_eu_citizen === 'true',
          status: 'quote_preparation',
        }

        if (pack_type === 'emploi_logement') {
          packData.city = session.metadata?.city
          packData.budget = parseInt(session.metadata?.budget || '0')
          packData.furnished = session.metadata?.furnished === 'true'
          packData.duration_months = parseInt(session.metadata?.duration || '0')
        }

        // Find or create user
        let { data: user } = await supabaseAdmin
          .from('users')
          .select('*')
          .eq('email', customerEmail)
          .single()

        if (!user) {
          const { data: newUser } = await supabaseAdmin
            .from('users')
            .insert({
              email: customerEmail,
              role: 'client',
            })
            .select()
            .single()
          user = newUser
        }

        if (user) {
          packData.user_id = user.id

          await supabaseAdmin
            .from('pack_requests')
            .insert(packData)

          // Send confirmation email to client
          await sendPackConfirmationEmail(customerEmail, pack_type, packData.amount_paid)

          // Send internal alert
          await sendInternalAlertEmail(pack_type, customerEmail, session.id)
        }
      }

      return NextResponse.json({ received: true })
    } catch (error) {
      console.error('Error processing webhook:', error)
      return NextResponse.json({ error: 'Error processing webhook' }, { status: 500 })
    }
  }

  return NextResponse.json({ received: true })
}