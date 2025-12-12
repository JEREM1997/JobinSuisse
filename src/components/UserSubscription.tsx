'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { getProductByPriceId } from '@/stripe-config'
import { Crown, Calendar, CreditCard } from 'lucide-react'

interface Subscription {
  subscription_status: string
  price_id: string | null
  current_period_end: number | null
  cancel_at_period_end: boolean
  payment_method_brand: string | null
  payment_method_last4: string | null
}

export default function UserSubscription() {
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const { data, error } = await supabase
          .from('stripe_user_subscriptions')
          .select('*')
          .maybeSingle()

        if (error) {
          console.error('Error fetching subscription:', error)
        } else {
          setSubscription(data)
        }
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSubscription()
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  if (!subscription || subscription.subscription_status === 'not_started') {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <Crown className="h-5 w-5 text-gray-400" />
          <h2 className="text-lg font-semibold text-gray-900">Abonnement</h2>
        </div>
        <p className="text-gray-600">Aucun abonnement actif</p>
      </div>
    )
  }

  const product = subscription.price_id ? getProductByPriceId(subscription.price_id) : null
  const isActive = ['active', 'trialing'].includes(subscription.subscription_status)
  const endDate = subscription.current_period_end 
    ? new Date(subscription.current_period_end * 1000).toLocaleDateString('fr-FR')
    : null

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100'
      case 'trialing':
        return 'text-blue-600 bg-blue-100'
      case 'past_due':
        return 'text-orange-600 bg-orange-100'
      case 'canceled':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Actif'
      case 'trialing':
        return 'Période d\'essai'
      case 'past_due':
        return 'Paiement en retard'
      case 'canceled':
        return 'Annulé'
      case 'incomplete':
        return 'Incomplet'
      default:
        return status
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <Crown className={`h-5 w-5 ${isActive ? 'text-brand' : 'text-gray-400'}`} />
        <h2 className="text-lg font-semibold text-gray-900">Abonnement</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Plan actuel :</span>
          <span className="font-semibold text-gray-900">
            {product?.name || 'Plan inconnu'}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">Statut :</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(subscription.subscription_status)}`}>
            {getStatusLabel(subscription.subscription_status)}
          </span>
        </div>

        {endDate && (
          <div className="flex items-center justify-between">
            <span className="text-gray-600">
              {subscription.cancel_at_period_end ? 'Se termine le :' : 'Renouvellement le :'}
            </span>
            <div className="flex items-center gap-1 text-gray-900">
              <Calendar className="h-4 w-4" />
              <span className="font-semibold">{endDate}</span>
            </div>
          </div>
        )}

        {subscription.payment_method_brand && subscription.payment_method_last4 && (
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Méthode de paiement :</span>
            <div className="flex items-center gap-1 text-gray-900">
              <CreditCard className="h-4 w-4" />
              <span className="font-semibold capitalize">
                {subscription.payment_method_brand} •••• {subscription.payment_method_last4}
              </span>
            </div>
          </div>
        )}

        {subscription.cancel_at_period_end && (
          <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-sm text-orange-800">
              Votre abonnement sera annulé à la fin de la période de facturation actuelle.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}