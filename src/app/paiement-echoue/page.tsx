import Link from 'next/link'
import { XCircle, ArrowLeft, LifeBuoy } from 'lucide-react'

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
          <XCircle className="h-12 w-12 text-red-600" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Paiement échoué
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Une erreur s'est produite lors du traitement de votre paiement
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Que s'est-il passé ?</h2>
          <div className="text-left space-y-4 text-gray-600">
            <p>Plusieurs raisons peuvent expliquer l'échec du paiement :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fonds insuffisants sur votre carte</li>
              <li>Carte expirée ou bloquée</li>
              <li>Erreur de saisie des informations</li>
              <li>Problème temporaire avec votre banque</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            Retour à l'accueil
          </Link>
          <Link
            href="mailto:contact@jobinsuisse.com"
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <LifeBuoy className="h-5 w-5" />
            Contacter le support
          </Link>
        </div>

        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Besoin d'aide ?</h3>
          <p className="text-blue-700 mb-4">
            Notre équipe est là pour vous aider. N'hésitez pas à nous contacter :
          </p>
          <div className="space-y-1 text-sm text-blue-600">
            <p><strong>Email :</strong> contact@jobinsuisse.com</p>
            <p><strong>Téléphone :</strong> +41 79 906 16 23</p>
          </div>
        </div>
      </div>
    </div>
  )
}