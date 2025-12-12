export const metadata = {
  title: "Conditions Générales de Vente — JobinSuisse powered by G-Services",
  description: "Conditions Générales de Vente (CGV) applicables aux services JobinSuisse (RI – Genève, Suisse).",
};

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-brand to-brand-dark text-white p-8 rounded-lg mb-8">
          <div className="text-sm uppercase tracking-widest text-brand-background/80 mb-2">
            JobinSuisse — powered by G-Services
          </div>
          <h1 className="text-3xl font-bold">Conditions Générales de Vente (CGV)</h1>
          <p className="mt-2 text-brand-background">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-CH")}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Objet</h2>
            <p className="text-gray-800">
              Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre{' '}
              <strong>G-Services (JobinSuisse)</strong>, Raison Individuelle sise Rue du Vieux-Chêne 8, 1224 Genève, 
              Suisse (ci-après « le Prestataire »), et toute personne physique ou morale (ci-après « le Client ») 
              souscrivant à un service proposé sur le site jobinsuisse.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Prestations proposées</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Starter Pack (79 CHF)</h3>
                <p className="text-gray-800 mt-2">
                  Fourniture immédiate d'un eBook numérique et possibilité de dépôt de CV pour retravail.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Pack 2 – Emploi (acompte 299 CHF)</h3>
                <p className="text-gray-800 mt-2">
                  Ouverture de dossier emploi, collecte des documents obligatoires, puis établissement d'un devis 
                  personnalisé en fonction du poste, du taux d'occupation et des besoins du Client.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Pack 3 – Logement + Emploi (acompte 499 CHF)</h3>
                <p className="text-gray-800 mt-2">
                  Mêmes conditions que le Pack 2, avec ajout d'un accompagnement dans la recherche d'un logement.
                </p>
              </div>
            </div>
            <p className="text-gray-800 mt-4">
              Le prix final dépend de la complexité de la demande et fait l'objet d'un{' '}
              <strong>devis accepté par le Client</strong> avant exécution de la prestation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Commande et validation</h2>
            <p className="text-gray-800 mb-4">La commande est réputée ferme et définitive après :</p>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Paiement de l'acompte ou du prix (selon le pack choisi) via Stripe,</li>
              <li>Acceptation des présentes CGV par case à cocher,</li>
              <li>Transmission des documents obligatoires (pièce d'identité/passeport, casier judiciaire B3, permis de séjour le cas échéant, CV recommandé).</li>
            </ul>
            <p className="text-gray-800 mt-4">
              La confirmation par e-mail et via le tableau de bord client vaut preuve de la conclusion du contrat.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Documents requis</h2>
            <p className="text-gray-800">
              Le Client s'engage à fournir des documents authentiques, valides et lisibles. En cas de falsification 
              ou de non-transmission des documents dans les délais, le Prestataire se réserve le droit de suspendre 
              ou de refuser la prestation, sans remboursement de l'acompte.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prix et paiement</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Starter Pack : paiement unique 79 CHF.</li>
              <li>Pack 2 et 3 : acompte (299 CHF ou 499 CHF) puis règlement du solde après acceptation du devis.</li>
            </ul>
            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <p className="text-orange-800">
                <strong>⚠️ TVA :</strong> G-Services n'est <strong>pas assujetti à la TVA</strong> au sens de la 
                législation suisse (CA &lt; 100'000 CHF). Les prix indiqués s\'entendent donc{' '}
                <strong>hors TVA non applicable</strong>.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Livraison des prestations</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>
                <strong>Starter Pack :</strong> l'eBook est transmis automatiquement après paiement, et le CV 
                retravaillé est livré par e-mail.
              </li>
              <li>
                <strong>Pack 2 et 3 :</strong> un collaborateur contacte le Client pour un entretien de cadrage. 
                Un devis est ensuite transmis, et les prestations démarrent après son acceptation et paiement du solde.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Remboursement et annulation</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>
                <strong>Starter Pack :</strong> aucun remboursement possible dès lors que l'eBook a été livré 
                immédiatement après paiement.
              </li>
              <li>
                <strong>Pack 2 et 3 :</strong> l'acompte reste acquis au Prestataire dès ouverture du dossier.
              </li>
              <li>
                Seul un refus explicite de prise en charge par le Prestataire entraîne le remboursement intégral 
                de l'acompte.
              </li>
            </ul>
            <p className="text-gray-800 mt-4">
              En cas d'abandon du Client après acceptation du devis, les montants versés restent dus.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Obligations du Client</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Fournir des informations exactes, complètes et à jour.</li>
              <li>Ne pas usurper l'identité d'un tiers.</li>
              <li>Collaborer activement (fournir rapidement les pièces et réponses nécessaires).</li>
              <li>Respecter les délais de communication fixés par le Prestataire.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Responsabilité du Prestataire</h2>
            <p className="text-gray-800 mb-4">
              Le Prestataire s'engage à mettre en œuvre tous les moyens raisonnables pour accompagner le Client 
              dans ses démarches. Toutefois, l'obtention d'un emploi ou d'un logement dépend de tiers (employeurs, 
              bailleurs, autorités) et ne peut être garantie.
            </p>
            <p className="text-gray-800">
              En cas de manquement prouvé du Prestataire, sa responsabilité est limitée au remboursement des montants 
              effectivement payés par le Client pour la prestation concernée. Toute responsabilité pour dommages 
              indirects, pertes de revenus, opportunités ou attentes non réalisées est exclue.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Réseau de partenaires</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800 mb-4">
                Les services d'accompagnement Emploi (Pack 2) et Emploi + Logement (Pack 3) reposent exclusivement 
                sur un <strong>réseau de partenaires sélectionnés</strong> (employeurs, agences de placement, 
                bailleurs, agences immobilières).
              </p>
              <p className="text-blue-800 mb-4">
                Le Client comprend et accepte que l'accompagnement soit limité à ce réseau. Toute démarche effectuée 
                en dehors de ce réseau relève de la seule initiative du Client, et n'engage pas la responsabilité 
                de G-Services.
              </p>
              <p className="text-blue-800">
                Si le Client souhaite que G-Services intervienne sur des démarches externes, un{' '}
                <strong>devis spécifique</strong> sera établi.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Refus d'offres d'emploi</h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-yellow-800 mb-4">
                Le Client comprend que le marché de l'emploi dépend des opportunités disponibles et que les offres 
                proposées peuvent différer de la branche ou du poste initialement souhaités.
              </p>
              <p className="text-yellow-800">
                En cas de <strong>refus d'une offre jugée raisonnable</strong> par G-Services (au regard du marché, 
                du taux d'occupation, des conditions de travail), l'accompagnement sera considéré comme{' '}
                <strong>clos</strong>. Aucun remboursement ou poursuite d'accompagnement ne sera dû.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Durée de l'accompagnement et remboursement</h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-green-800 mb-4">
                Pour le Pack Emploi (Pack 2), l'accompagnement est fourni pour une durée maximale de{' '}
                <strong>six (6) mois</strong>. Pour le Pack Emploi + Logement (Pack 3), la durée est de{' '}
                <strong>neuf (9) mois</strong> pour le logement et <strong>six (6) mois</strong> pour l'emploi.
              </p>
              <p className="text-green-800">
                Si, au terme de ces délais, aucune opportunité n'a pu être proposée malgré les démarches effectuées, 
                le Client pourra demander le <strong>remboursement intégral</strong> des sommes versées. Passé ce 
                délai, le Prestataire n'a plus d\'obligation et l\'accompagnement est clos.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Début de l'emploi et solde dû</h2>
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-red-800 mb-4">
                Dès que le Client débute un emploi obtenu grâce à G-Services, le{' '}
                <strong>paiement intégral des honoraires convenus</strong> devient immédiatement exigible.
              </p>
              <p className="text-red-800">
                En cas de licenciement ultérieur, notamment pour faute ou comportement inadapté,{' '}
                <strong>aucun remboursement</strong> ne pourra être réclamé, l'obligation de moyens ayant été remplie.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Force majeure</h2>
            <p className="text-gray-800">
              Le Prestataire ne saurait être tenu responsable d'un retard ou d'une impossibilité d'exécution en cas 
              de force majeure (panne technique, grève, pandémie, catastrophe naturelle, etc.).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Données personnelles</h2>
            <p className="text-gray-800">
              Les données collectées sont utilisées uniquement pour le traitement des commandes et la gestion des 
              dossiers. Elles ne sont jamais revendues. Le Client dispose d'un droit d'accès, de rectification et 
              de suppression de ses données via contact@jobinsuisse.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Preuve et communications</h2>
            <p className="text-gray-800">
              Les échanges électroniques (e-mails, tableau de bord) font foi entre les parties. Le Client accepte 
              que la preuve de ses engagements contractuels puisse résulter des enregistrements informatiques du 
              Prestataire.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Langue du contrat</h2>
            <p className="text-gray-800">
              Les présentes CGV sont rédigées en français, langue de référence en cas de traduction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Droit applicable et for juridique</h2>
            <p className="text-gray-800">
              Les présentes CGV sont soumises au droit suisse. Tout litige relève de la compétence des tribunaux 
              du canton de Genève.
            </p>
          </section>

          <div className="mt-12 p-6 bg-brand-background border border-brand rounded-lg">
            <h3 className="font-semibold text-brand mb-2">Contact</h3>
            <p className="text-gray-800">
              Pour toute question concernant ces conditions générales de vente :<br />
              <strong>Email :</strong> contact@jobinsuisse.com<br />
              <strong>Téléphone :</strong> +41 79 412 46 35<br />
              <strong>Adresse :</strong> Rue du Vieux-Chêne 8, 1224 Genève, Suisse
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}