import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe-server'

export async function POST(request: NextRequest) {
  try {
    const { isEuCitizen } = await request.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_PACK2_DEPOSIT,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/merci?pack=emploi`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/paiement-echoue`,
      metadata: {
        pack_type: 'emploi',
        is_eu_citizen: isEuCitizen.toString(),
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    )
  }
}