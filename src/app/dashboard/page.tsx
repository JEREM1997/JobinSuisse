'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { FileText, User, ShoppingBag, LogOut } from 'lucide-react'
import UserSubscription from '@/components/UserSubscription'
import toast from 'react-hot-toast'

interface Order {
  order_id: number
  checkout_session_id: string
  amount_total: number
  currency: string
  payment_status: string
  order_status: string
  order_date: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState<Order[]>([])
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error || !user) {
      router.push('/auth/login')
      return
    }
    
    setUser(user)
    await loadOrders()
    setLoading(false)
  }

  const loadOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('stripe_user_orders')
        .select('*')
        .order('order_date', { ascending: false })

      if (error) {
        console.error('Error loading orders:', error)
      } else {
        setOrders(data || [])
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
      router.push('/')
    } catch (error) {
      toast.error('Erreur lors de la déconnexion')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100'
      case 'pending':
        return 'text-yellow-600 bg-yellow-100'
      case 'canceled':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Terminé'
      case 'pending':
        return 'En attente'
      case 'canceled':
        return 'Annulé'
      default:
        return status
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Connexion requise</h1>
          <p className="text-gray-600 mb-6">Veuillez vous connecter pour accéder à votre espace client</p>
          <button
            onClick={() => router.push('/auth/login')}
            className="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
          >
            Se connecter
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Mon Espace Client</h1>
              <p className="text-gray-600 mt-1">Bienvenue, {user.email}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-gray-600 hover:text-brand transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Se déconnecter
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Orders Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag className="h-5 w-5 text-brand" />
                <h2 className="text-lg font-semibold text-gray-900">Mes Commandes</h2>
              </div>

              {orders.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucune commande</h3>
                  <p className="text-gray-600 mb-6">
                    Vous n'avez pas encore passé de commande. Découvrez nos packs pour commencer.
                  </p>
                  <a
                    href="/#packs"
                    className="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors inline-block"
                  >
                    Voir nos packs
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.order_id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            Commande #{order.order_id}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {new Date(order.order_date).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.order_status)}`}>
                            {getStatusLabel(order.order_status)}
                          </div>
                          <p className="text-lg font-semibold text-gray-900 mt-1">
                            {(order.amount_total / 100).toFixed(2)} {order.currency.toUpperCase()}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>Session: {order.checkout_session_id}</p>
                        <p>Statut du paiement: <span className="capitalize">{order.payment_status}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <UserSubscription />
            
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h2>
              <div className="space-y-3">
                <a
                  href="/#packs"
                  className="block w-full text-center bg-brand text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
                >
                  Voir nos packs
                </a>
                <a
                  href="mailto:contact@jobinsuisse.com"
                  className="block w-full text-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}