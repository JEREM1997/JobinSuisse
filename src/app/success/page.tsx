'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, ArrowRight, User } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { getProductByPriceId } from '@/stripe-config'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [loading, setLoading] = useState(true)
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    
    checkUser()
  }, [])

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!sessionId) {
        setLoading(false)
        return
      }

      try {
        // Fetch order details from our database
        const { data: orders } = await supabase
          .from('stripe_user_orders')
          .select('*')
          .eq('checkout_session_id', sessionId)
          .single()

        if (orders) {
          setOrderDetails(orders)
        }
      } catch (error) {
        console.error('Error fetching order details:', error)
      } finally {
        setLoading(false)
      }
    }

    if (user) {
      fetchOrderDetails()
    }
  }, [sessionId, user])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand"></div>
      </div>
    )
  }

  if (!sessionId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Session non trouvée</h1>
          <p className="text-gray-600 mb-6">Aucune session de paiement n'a été trouvée.</p>
          <Link
            href="/"
            className="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Paiement confirmé !
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Merci pour votre achat. Votre commande a été traitée avec succès.
        </p>

        {orderDetails && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Détails de votre commande</h2>
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Numéro de commande :</span>
                <span className="font-semibold text-gray-900">#{orderDetails.order_id}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Montant total :</span>
                <span className="font-semibold text-gray-900">
                  {(orderDetails.amount_total / 100).toFixed(2)} {orderDetails.currency.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Statut du paiement :</span>
                <span className="font-semibold text-green-600 capitalize">
                  {orderDetails.payment_status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Date :</span>
                <span className="font-semibold text-gray-900">
                  {new Date(orderDetails.order_date).toLocaleDateString('fr-FR')}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {user ? (
            <Link
              href="/dashboard"
              className="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors flex items-center justify-center gap-2"
            >
              <User className="h-5 w-5" />
              Accéder à mon compte
            </Link>
          ) : (
            <Link
              href="/auth/login"
              className="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors flex items-center justify-center gap-2"
            >
              <User className="h-5 w-5" />
              Se connecter
            </Link>
          )}
          <Link
            href="/"
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            Retour à l'accueil
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Une question ? Contactez-nous à <strong>contact@jobinsuisse.com</strong></p>
        </div>
      </div>
    </div>
  )
}