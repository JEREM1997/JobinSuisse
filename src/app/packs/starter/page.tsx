'use client'

import { CheckCircle, Download, FileText, RefreshCw, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import CheckoutButton from '@/components/CheckoutButton'
import { stripeProducts } from '@/stripe-config'

const starterPack = stripeProducts.find(p => p.name === 'Starter Pack')!

export default function StarterPackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-background to-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-brand hover:text-brand-dark transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Info */}
          <div>
            <div className="bg-gradient-to-r from-brand to-brand-dark text-white rounded-2xl p-1 inline-block mb-6">
              <div className="bg-white text-brand rounded-xl px-3 py-1 text-sm font-semibold">
                Le plus populaire
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Starter Pack
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tout ce dont vous avez besoin pour commencer vos démarches d'emploi en Suisse
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand/10 rounded-full p-2">
                  <FileText className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">eBook complet</h3>
                  <p className="text-gray-600">
                    Guide détaillé sur le marché du travail suisse, les démarches administratives, 
                    et tous nos conseils d'experts pour maximiser vos chances de succès.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand/10 rounded-full p-2">
                  <RefreshCw className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Révision professionnelle de CV</h3>
                  <p className="text-gray-600">
                    Envoyez-nous votre CV et notre équipe le retravaillera selon les standards 
                    suisses pour optimiser vos candidatures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand/10 rounded-full p-2">
                  <Download className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Livraison immédiate</h3>
                  <p className="text-gray-600">
                    Recevez votre eBook par email juste après le paiement. 
                    Pas d'attente, commencez immédiatement !
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
              <h3 className="font-semibold text-yellow-800 mb-2">Ce que vous obtenez :</h3>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600" />
                  eBook PDF de 50+ pages
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600" />
                  Révision personnalisée de votre CV
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600" />
                  Templates de lettres de motivation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600" />
                  Liste des sites d'emploi suisses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-600" />
                  Conseils pour les entretiens
                </li>
              </ul>
            </div>
          </div>

          {/* Purchase Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">79 CHF</div>
              <div className="text-gray-500">Paiement unique</div>
            </div>

            <CheckoutButton
              product={starterPack}
              className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              Acheter maintenant
            </CheckoutButton>

            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Paiement sécurisé par Stripe
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Livraison instantanée par email
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Support client inclus
              </div>
            </div>

            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Important :</strong> Produit numérique livré immédiatement. 
                Aucun remboursement possible après réception.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Quand vais-je recevoir mon eBook ?
              </h3>
              <p className="text-gray-600">
                Immédiatement après le paiement ! Vous recevrez un email avec le lien de téléchargement.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Comment envoyer mon CV pour révision ?
              </h3>
              <p className="text-gray-600">
                Envoyez votre CV à cv@jobinsuisse.com après votre achat. Nous le retravaillerons sous 48h.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Le contenu est-il à jour ?
              </h3>
              <p className="text-gray-600">
                Oui, notre eBook est régulièrement mis à jour avec les dernières informations du marché suisse.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Puis-je avoir un remboursement ?
              </h3>
              <p className="text-gray-600">
                Non, il s'agit d'un produit numérique livré instantanément. Aucun remboursement n'est possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}