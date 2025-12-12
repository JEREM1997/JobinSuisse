export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-brand to-brand-dark text-white p-8 rounded-lg mb-8">
          <div className="text-sm uppercase tracking-widest text-brand-background/80 mb-2">
            JobinSuisse — powered by G-Services
          </div>
          <h1 className="text-3xl font-bold">Mentions Légales</h1>
          <p className="mt-2 text-brand-background">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-CH")}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du site</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-800">
                <strong>G-Services (JobinSuisse)</strong>, Raison Individuelle<br />
                <strong>Titulaire :</strong> M. Ghourriz<br />
                <strong>Adresse :</strong> Rue du Vieux-Chêne 8, 1224 Genève, Suisse
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Contact</h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-800">
                <strong>Téléphone :</strong>{" "}
                <a href="tel:+41794124635" className="text-brand hover:text-brand-dark underline">
                  +41 79 412 46 35
                </a><br />
                <strong>Email :</strong>{" "}
                <a href="mailto:contact@jobinsuisse.com" className="text-brand hover:text-brand-dark underline">
                  contact@jobinsuisse.com
                </a><br />
                <strong>Site web :</strong>{" "}
                <a
                  href="https://www.jobinsuisse.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand hover:text-brand-dark underline"
                >
                  www.jobinsuisse.com
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hébergement</h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-gray-800">
                <strong>Le site est hébergé par :</strong><br />
                <strong>Infomaniak Network SA</strong><br />
                Rue Eugène-Marziano 25, 1227 Genève, Suisse<br />
                <a
                  href="https://www.infomaniak.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand hover:text-brand-dark underline"
                >
                  www.infomaniak.com
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
            <p className="text-gray-800 mb-4">
              Le logo, les textes, visuels, images et codes sources présents sur le site{" "}
              <strong>www.jobinsuisse.com</strong> sont protégés par le droit d'auteur et la propriété intellectuelle.
            </p>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-800">
                <strong>⚠️ Important :</strong> Toute reproduction, modification ou diffusion sans autorisation 
                écrite de G-Services est interdite.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Données personnelles</h2>
            <p className="text-gray-800 mb-4">
              Les données collectées via le site sont traitées conformément à la{" "}
              <strong>Loi fédérale sur la protection des données (LPD)</strong> et au <strong>RGPD</strong>.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                Pour plus d'informations, consultez notre{" "}
                <a href="/confidentialite" className="text-brand hover:text-brand-dark underline font-semibold">
                  Politique de confidentialité
                </a>.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Responsabilité</h2>
            <p className="text-gray-800 mb-4">
              Les informations diffusées sur le site sont fournies à titre indicatif. Malgré des mises à jour 
              régulières, G-Services ne peut être tenu responsable d'erreurs, d'omissions ou d'indisponibilités du site.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-orange-800">
                <strong>Clause de responsabilité :</strong> L'utilisation du site se fait sous l'entière 
                responsabilité de l'utilisateur.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Droit applicable</h2>
            <p className="text-gray-800">
              Les présentes mentions légales sont régies par le <strong>droit suisse</strong>. 
              En cas de litige, seuls les tribunaux du canton de Genève sont compétents.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Directeur de publication</h2>
            <p className="text-gray-800">
              <strong>Nom :</strong> M. Ghourriz<br />
              <strong>Qualité :</strong> Propriétaire de la raison individuelle G-Services<br />
              <strong>Responsabilité :</strong> Contenu éditorial et services proposés
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Activité de l'entreprise</h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-3">
                <strong>Secteur d'activité :</strong> Services d'accompagnement professionnel et d'installation en Suisse
              </p>
              <p className="text-gray-800"><strong>Services proposés :</strong></p>
              <ul className="list-disc list-inside text-gray-800 mt-2 space-y-1">
                <li>Conseil en recherche d'emploi en Suisse</li>
                <li>Accompagnement pour l'installation en Suisse</li>
                <li>Aide à la recherche de logement</li>
                <li>Formation et coaching professionnel</li>
                <li>Révision de CV selon les standards suisses</li>
                <li>Préparation aux entretiens d'embauche</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation de responsabilité</h2>
            <p className="text-gray-800 mb-4">
              Les informations contenues sur ce site sont aussi précises que possible et le site est 
              remis à jour à différentes périodes de l'année, mais peut toutefois contenir des 
              inexactitudes ou des omissions.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-yellow-800">
                <strong>Signalement d'erreurs :</strong> Si vous constatez une lacune, erreur ou ce qui paraît 
                être un dysfonctionnement, merci de bien vouloir le signaler par email à{" "}
                <a href="mailto:contact@jobinsuisse.com" className="text-brand hover:text-brand-dark underline">
                  contact@jobinsuisse.com
                </a>.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Liens hypertextes</h2>
            <p className="text-gray-800">
              Des liens hypertextes peuvent être présents sur le site. L'utilisateur est averti que 
              lors de la navigation sur ces liens, il sort du site JobinSuisse. Ce dernier n'a pas 
              de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, 
              en aucun cas, être responsable de leur contenu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Cookies et technologies similaires</h2>
            <p className="text-gray-800">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
              En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies conformément 
              à notre politique de confidentialité.
            </p>
          </section>

          <div className="mt-12 p-6 bg-brand-background border border-brand rounded-lg">
            <h3 className="font-semibold text-brand mb-2">Dernière mise à jour</h3>
            <p className="text-gray-800">
              Ces mentions légales ont été mises à jour le : <strong>{new Date().toLocaleDateString("fr-CH")}</strong><br />
              Version : 2.0
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}