export const metadata = {
  title: "Politique de Confidentialité — JobinSuisse powered by G-Services",
  description: "Politique de confidentialité et cookies de JobinSuisse (RI – Genève, Suisse). Conformité LPD et RGPD.",
};

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-brand to-brand-dark text-white p-8 rounded-lg mb-8">
          <div className="text-sm uppercase tracking-widest text-brand-background/80 mb-2">
            JobinSuisse — powered by G-Services
          </div>
          <h1 className="text-3xl font-bold">Politique de Confidentialité & Cookies</h1>
          <p className="mt-2 text-brand-background">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-CH")}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Objet</h2>
            <p className="text-gray-800">
              Cette politique explique comment <strong>G-Services (JobinSuisse)</strong> collecte, utilise et protège 
              vos données personnelles, conformément à la <strong>loi fédérale sur la protection des données (LPD)</strong> 
              et au <strong>RGPD</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Responsable du traitement</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-800">
                <strong>Responsable :</strong> G-Services (M. Ghourriz)<br />
                <strong>Adresse :</strong> Rue du Vieux-Chêne 8, 1224 Genève, Suisse<br />
                <strong>Email :</strong> <a href="mailto:contact@jobinsuisse.com" className="text-brand hover:text-brand-dark underline">contact@jobinsuisse.com</a><br />
                <strong>Téléphone :</strong> <a href="tel:+41794124635" className="text-brand hover:text-brand-dark underline">+41 79 412 46 35</a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Données collectées</h2>
            <p className="text-gray-800 mb-4">
              Nous collectons les données personnelles suivantes :
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">📋 Données d'identification :</h3>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone (si fourni)</li>
                  <li>Adresse postale (pour certains services)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">📄 Documents officiels :</h3>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  <li>Pièce d'identité ou passeport</li>
                  <li>Casier judiciaire B3</li>
                  <li>Permis de séjour (le cas échéant)</li>
                  <li>CV et documents professionnels</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">🌐 Données de navigation :</h3>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Cookies et données de navigation</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">💳 Données de paiement :</h3>
                <p className="text-gray-800">
                  Gérées de manière sécurisée par <strong>Stripe</strong>. Aucune donnée bancaire n'est stockée par G-Services.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Finalités de l'utilisation</h2>
            <p className="text-gray-800 mb-4">
              Vos données sont utilisées pour les finalités suivantes :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">🎯 Services principaux :</h3>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>Gestion des commandes et devis</li>
                  <li>Suivi client personnalisé</li>
                  <li>Vérification de l'authenticité des documents</li>
                  <li>Exécution des prestations commandées</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">📈 Amélioration :</h3>
                <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Amélioration des services</li>
                  <li>Optimisation du site web</li>
                  <li>Respect des obligations légales</li>
                  <li>Support client de qualité</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">🍪 Cookies essentiels</h3>
                <p className="text-yellow-800">Nécessaires au fonctionnement du site (connexion, sécurité, panier)</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">📊 Cookies analytiques</h3>
                <p className="text-blue-800">Pour mesurer l'audience et améliorer l'expérience utilisateur</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">⚙️ Gestion des cookies</h3>
                <p className="text-purple-800">Vous pouvez gérer vos préférences dans les paramètres de votre navigateur</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Partage des données</h2>
            <div className="bg-red-50 p-6 rounded-lg mb-4">
              <p className="text-red-800 font-semibold mb-2">
                🔒 Nous ne vendons JAMAIS vos données personnelles à des tiers.
              </p>
            </div>
            
            <p className="text-gray-800 mb-4">Vos données peuvent être transmises uniquement :</p>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">🔐 Prestataires techniques sécurisés</h3>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  <li><strong>Infomaniak</strong> : Hébergement sécurisé</li>
                  <li><strong>Stripe</strong> : Paiements sécurisés</li>
                  <li><strong>Supabase</strong> : Base de données chiffrée</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">👥 Collaborateurs internes</h3>
                <p className="text-gray-800">Pour le traitement de votre demande (sous contrat de confidentialité)</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">🏛️ Autorités suisses</h3>
                <p className="text-gray-800">Uniquement si requis par la loi</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Durée de conservation</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">📁 Données de compte</h3>
                <p className="text-blue-800">Conservées pendant la durée d'activité + 3 ans après la dernière utilisation</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">🧾 Documents comptables</h3>
                <p className="text-green-800">10 ans (obligation légale suisse)</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">🍪 Données de navigation</h3>
                <p className="text-yellow-800">13 mois maximum (cookies)</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">📄 Documents personnels</h3>
                <p className="text-purple-800">Supprimés après traitement, sauf demande contraire</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Vos droits</h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-green-800 mb-4 font-semibold">
                Conformément à la LPD et au RGPD, vous disposez des droits suivants :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">👁️</span>
                    <div>
                      <strong className="text-green-900">Droit d'accès</strong>
                      <p className="text-green-800 text-sm">Connaître les données que nous détenons sur vous</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">✏️</span>
                    <div>
                      <strong className="text-green-900">Droit de rectification</strong>
                      <p className="text-green-800 text-sm">Corriger vos données inexactes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">🗑️</span>
                    <div>
                      <strong className="text-green-900">Droit à l'effacement</strong>
                      <p className="text-green-800 text-sm">Supprimer vos données (sous conditions)</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">📦</span>
                    <div>
                      <strong className="text-green-900">Droit à la portabilité</strong>
                      <p className="text-green-800 text-sm">Récupérer vos données</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">🚫</span>
                    <div>
                      <strong className="text-green-900">Droit d'opposition</strong>
                      <p className="text-green-800 text-sm">Vous opposer au traitement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">⏸️</span>
                    <div>
                      <strong className="text-green-900">Droit de limitation</strong>
                      <p className="text-green-800 text-sm">Limiter le traitement</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-green-800 mt-4">
                Pour exercer vos droits, contactez{' '}
                <a href="mailto:contact@jobinsuisse.com" className="text-brand hover:text-brand-dark underline font-semibold">
                  contact@jobinsuisse.com
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Sécurité</h2>
            <p className="text-gray-800 mb-4">
              G-Services met en place des mesures techniques et organisationnelles appropriées pour protéger vos données :
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">🔐 Mesures techniques :</h3>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>Chiffrement SSL/TLS</li>
                  <li>Bases de données sécurisées</li>
                  <li>Authentification forte</li>
                  <li>Sauvegardes régulières</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">👥 Mesures organisationnelles :</h3>
                <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Accès limité aux données</li>
                  <li>Formation du personnel</li>
                  <li>Contrats de confidentialité</li>
                  <li>Audits de sécurité</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modifications</h2>
            <p className="text-gray-800">
              La présente politique peut être modifiée à tout moment pour refléter les changements dans nos 
              pratiques ou pour des raisons légales. Toute modification substantielle sera communiquée 
              par email ou via une notification sur le site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Droit applicable</h2>
            <p className="text-gray-800">
              Cette politique est soumise au <strong>droit suisse</strong>. Tout litige relève de la 
              compétence des tribunaux du canton de Genève.
            </p>
          </section>

          <div className="mt-12 p-6 bg-brand-background border border-brand rounded-lg">
            <h3 className="font-semibold text-brand mb-2">Contact pour vos droits</h3>
            <p className="text-gray-800">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :<br />
              <strong>Email :</strong> <a href="mailto:contact@jobinsuisse.com" className="text-brand hover:text-brand-dark underline">contact@jobinsuisse.com</a><br />
              <strong>Téléphone :</strong> <a href="tel:+41794124635" className="text-brand hover:text-brand-dark underline">+41 79 412 46 35</a><br />
              <strong>Délai de réponse :</strong> Maximum 30 jours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}