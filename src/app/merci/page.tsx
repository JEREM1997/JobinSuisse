'use client'

import { useSearchParams } from 'next/navigation'
import { CheckCircle, Download, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'

const packNames = {
  starter: 'Starter Pack',
  emploi: 'Pack Emploi',
  emploi_logement: 'Pack Emploi + Logement'
}

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const packType = searchParams.get('pack') as keyof typeof packNames || 'starter'

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
          Merci pour votre achat du <strong>{packNames[packType]}</strong>
        </p>

        {packType === 'starter' ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center gap-3 justify-center mb-6">
              <Download className="h-6 w-6 text-brand" />
              <h2 className="text-2xl font-semibold text-gray-900">Votre eBook est prêt !</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Un email avec le lien de téléchargement de votre eBook "Travailler en Suisse" 
              vient d'être envoyé à votre adresse email.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-2">N'oubliez pas :</h3>
              <p className="text-yellow-700">
                Envoyez votre CV à <strong>cv@jobinsuisse.com</strong> pour bénéficier 
                de la révision professionnelle incluse dans votre pack.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center gap-3 justify-center mb-6">
              <Calendar className="h-6 w-6 text-brand" />
              <h2 className="text-2xl font-semibold text-gray-900">Prochaines étapes</h2>
            </div>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">1</div>
                <p className="text-gray-600">
                  <strong>Confirmation par email :</strong> Vous allez recevoir un email de confirmation 
                  dans les prochaines minutes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">2</div>
                <p className="text-gray-600">
                  <strong>Contact de notre équipe :</strong> Un conseiller vous contactera sous 24h 
                  pour échanger sur vos besoins.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">3</div>
                <p className="text-gray-600">
                  <strong>Upload des documents :</strong> Connectez-vous à votre espace client 
                  pour uploader vos documents requis.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors"
          >
            <Mail className="h-5 w-5 inline mr-2" />
            Accéder à mon compte
          </Link>
          <Link
            href="/"
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Une question ? Contactez-nous à <strong>contact@jobinsuisse.com</strong></p>
        </div>
      </div>
    </div>
  )
}