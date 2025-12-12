'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { StripeProduct } from '@/stripe-config'
import toast from 'react-hot-toast'

interface CheckoutButtonProps {
  product: StripeProduct
  className?: string
  children: React.ReactNode
  disabled?: boolean
}

export default function CheckoutButton({ 
  product, 
  className = '', 
  children, 
  disabled = false 
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)

    try {
      // Check if user is authenticated
      const { data: { user }, error: authError } = await supabase.auth.getUser()
      
      if (authError || !user) {
        toast.error('Veuillez vous connecter pour continuer')
        window.location.href = '/auth/login'
        return
      }

      // Get the user's session token
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session?.access_token) {
        toast.error('Session expirée, veuillez vous reconnecter')
        window.location.href = '/auth/login'
        return
      }

      // Call our edge function to create checkout session
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          price_id: product.priceId,
          mode: product.mode,
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/paiement-echoue`,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la création de la session')
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('URL de redirection manquante')
      }
    } catch (error: any) {
      console.error('Checkout error:', error)
      toast.error(error.message || 'Erreur lors du paiement')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={disabled || loading}
      className={`${className} ${
        loading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {loading ? 'Redirection en cours...' : children}
    </button>
  )
}