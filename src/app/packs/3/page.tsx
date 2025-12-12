'use client'

import { useState } from 'react'
import { CheckCircle, Users, Target, MessageSquare, Home, ArrowLeft, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import CheckoutButton from '@/components/CheckoutButton'
import { stripeProducts } from '@/stripe-config'
import toast from 'react-hot-toast'

const packEmploiLogement = stripeProducts.find(p => p.name === 'Pack Emploi + Logement')!

export default function Pack3Page() {
  const [isEuCitizen, setIsEuCitizen] = useState<boolean | null>(null)
  const [city, setCity] = useState('')
  const [budget, setBudget] = useState('')
  const [furnished, setFurnished] = useState<boolean | null>(null)
  const [duration, setDuration] = useState('')
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

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Info */}
          <div>
            <div className="bg-gradient-to-r from-brand to-brand-dark text-white rounded-2xl p-1 inline-block mb-6">
              <div className="bg-white text-brand rounded-xl px-3 py-1 text-sm font-semibold">
                Solution complète
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Pack Emploi + Logement
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              L'accompagnement le plus complet pour votre installation en Suisse
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand/10 rounded-full p-2">
                  <Users className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Accompagnement emploi complet</h3>
                  <p className="text-gray-600">
                    Tout le Pack Emploi inclus : accompagnement personnalisé, recherche ciblée, 
                    préparation aux entretiens jusqu'à l'embauche.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand/10 rounded-full p-2">
                  <Home className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Recherche de logement</h3>
                  <p className="text-gray-600">
                    Recherche personnalisée selon vos critères (ville, budget, type), 
                    visite virtuelle et aide à la constitution du dossier.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand/10 rounded-full p-2">
                  <Target className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Démarches administratives</h3>
                  <p className="text-gray-600">
                    Aide pour l'ouverture de compte bancaire, assurance, inscription commune, 
                    et toutes les démarches d'installation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
              <h3 className="font-semibold text-green-800 mb-2">Tout inclus :</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    eBook + révision CV
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Accompagnement emploi
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Préparation entretiens
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Recherche de logement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Démarches administratives
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Support installation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Purchase Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
            {!showForm ? (
              <>
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-gray-900 mb-2">499 CHF</div>
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
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">499 CHF</div>
                  <div className="text-gray-500">Acompte</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ville souhaitée *
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Genève, Zurich, Lausanne..."
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Budget mensuel (CHF) *
                    </label>
                    <input
                      type="number"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="Ex: 1500"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de logement *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="furnished"
                          checked={furnished === true}
                          onChange={() => setFurnished(true)}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Meublé</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="furnished"
                          checked={furnished === false}
                          onChange={() => setFurnished(false)}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Non meublé</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Durée souhaitée (mois) *
                    </label>
                    <input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      placeholder="Ex: 12"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-blue-800">
                      <strong>Statut :</strong> {isEuCitizen ? 'Citoyen UE/AELE/Suisse' : 'Ressortissant pays tiers'}
                    </p>
                  </div>
                </div>

                <CheckoutButton
                  product={packEmploiLogement}
                  className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  Payer l'acompte (499 CHF)
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
                sous 24h pour établir un devis personnalisé et commencer l'accompagnement emploi + logement.
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
                Comment se déroule la recherche de logement ?
              </h3>
              <p className="text-gray-600">
                Recherche personnalisée selon vos critères, présélection des biens, 
                organisation des visites et aide à la constitution du dossier.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Quelles démarches administratives sont incluses ?
              </h3>
              <p className="text-gray-600">
                Ouverture de compte bancaire, souscription d'assurances, inscription en commune, 
                et toutes les formalités d'installation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Combien de temps pour trouver un logement ?
              </h3>
              <p className="text-gray-600">
                En moyenne 4-6 semaines selon la ville et le budget. Nous commençons 
                les recherches dès la signature du contrat.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                Le service fonctionne-t-il dans toute la Suisse ?
              </h3>
              <p className="text-gray-600">
                Oui, nous couvrons toute la Suisse avec une expertise particulière 
                sur Genève, Lausanne, Zurich et Berne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}