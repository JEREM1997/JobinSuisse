'use client'

import { useState } from 'react'
import { CheckCircle, Users, Target, MessageSquare, ArrowLeft, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import CheckoutButton from '@/components/CheckoutButton'
import { stripeProducts } from '@/stripe-config'
import toast from 'react-hot-toast'

const packEmploi = stripeProducts.find(p => p.name === 'Pack Emploi')!

export default function Pack2Page() {
  const [isEuCitizen, setIsEuCitizen] = useState<boolean | null>(null)
  const [showForm, setShowForm] = useState(false)

  const handleStartProcess = () => {
    if (isEuCitizen === null) {
      toast.error('Veuillez indiquer si vous êtes citoyen UE/AELE')
      return
    }
    setShowForm(true)
  }

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
                Accompagnement personnalisé
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Pack Emploi
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Accompagnement complet pour décrocher votre emploi en Suisse
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand/10 rounded-full p-2">
                  <Users className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Accompagnement personnalisé</h3>
                  <p className="text-gray-600">
                    Un conseiller dédié vous accompagne tout au long de votre recherche d'emploi, 
                    adapté à votre profil et vos objectifs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand/10 rounded-full p-2">
                  <Target className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Recherche d'emploi ciblée</h3>
                  <p className="text-gray-600">
                    Identification des opportunités qui correspondent exactement à votre profil 
                    et candidatures stratégiques.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand/10 rounded-full p-2">
                  <MessageSquare className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Préparation aux entretiens</h3>
                  <p className="text-gray-600">
                    Simulations d'entretiens, coaching personnalisé et préparation spécifique 
                    aux entreprises suisses.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="font-semibold text-blue-800 mb-2">Inclut tout du Starter Pack :</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  eBook complet "Travailler en Suisse"
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  Révision professionnelle de votre CV
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  Templates et ressources exclusives
                </li>
              </ul>
            </div>
          </div>

          {/* Purchase Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
            {!showForm ? (
              <>
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-gray-900 mb-2">299 CHF</div>
                  <div className="text-gray-500">Acompte</div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Êtes-vous citoyen UE/AELE ou Suisse ?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="citizenship"
                        value="true"
                        checked={isEuCitizen === true}
                        onChange={() => setIsEuCitizen(true)}
                        className="mr-2"
                      />
                      <span className="text-gray-700">Oui, je suis citoyen UE/AELE ou Suisse</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="citizenship"
                        value="false"
                        checked={isEuCitizen === false}
                        onChange={() => setIsEuCitizen(false)}
                        className="mr-2"
                      />
                      <span className="text-gray-700">Non, je suis ressortissant d'un pays tiers</span>
                    </label>
                  </div>
                </div>

                <button
                  onClick={handleStartProcess}
                  className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Continuer
                </button>
              </>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-gray-900 mb-2">299 CHF</div>
                  <div className="text-gray-500">Acompte</div>
                </div>

                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Statut :</strong> {isEuCitizen ? 'Citoyen UE/AELE/Suisse' : 'Ressortissant pays tiers'}
                  </p>
                </div>

                <CheckoutButton
                  product={packEmploi}
                  className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  Payer l'acompte (299 CHF)
                </CheckoutButton>

                <button
                  onClick={() => setShowForm(false)}
                  className="w-full mt-3 text-gray-600 hover:text-gray-800 text-sm"
                >
                  ← Modifier mes informations
                </button>
              </>
            )}

            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Paiement sécurisé par Stripe
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Accès immédiat après paiement
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Support client inclus
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Prochaines étapes :</strong> Après le paiement de l'acompte, notre équipe vous contactera 
                sous 24h pour établir un devis personnalisé et commencer l'accompagnement.
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
                Que comprend l'accompagnement personnalisé ?
              </h3>
              <p className="text-gray-600">
                Un conseiller dédié, analyse de votre profil, recherche ciblée d'emplois, 
                préparation aux entretiens et suivi jusqu'à l'embauche.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Combien de temps dure l'accompagnement ?
              </h3>
              <p className="text-gray-600">
                L'accompagnement continue jusqu'à ce que vous trouviez un emploi. 
                En moyenne, nos clients trouvent un poste en 2-3 mois.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Quel est le taux de réussite ?
              </h3>
              <p className="text-gray-600">
                Plus de 85% de nos clients trouvent un emploi grâce à notre accompagnement personnalisé 
                et notre connaissance du marché suisse.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Comment se déroule le suivi ?
              </h3>
              <p className="text-gray-600">
                Appels réguliers, emails de suivi, préparation spécifique pour chaque entretien 
                et ajustements de stratégie selon les retours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}