import Link from 'next/link'
import SiteLogo from './SiteLogo'

const navigation = {
  services: [
    { name: 'Starter Pack', href: '/packs/starter' },
    { name: 'Pack Emploi', href: '/packs/2' },
    { name: 'Pack Emploi + Logement', href: '/packs/3' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'CGV', href: '/cgv' },
    { name: 'Confidentialité', href: '/confidentialite' },
  ],
  contact: [
    { name: 'contact@jobinsuisse.com', href: 'mailto:contact@jobinsuisse.com' },
    { name: '+41 79 412 46 35', href: 'tel:+41794124635' },
    { name: 'Rue du Vieux-Chêne 8, 1224 Genève', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Légal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">JobinSuisse</h3>
            <p className="mt-6 text-sm leading-6 text-gray-300">
              Spécialistes de l'accompagnement professionnel en Suisse. Nous vous aidons à trouver un emploi et un logement adaptés à vos besoins.
            </p>
            <div className="mt-6">
              <SiteLogo className="text-white" showText={false} />
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            <p className="text-xs leading-5 text-gray-400">
              © 2024 G-Services, tous droits réservés. Raison Individuelle, M. Ghourriz
            </p>
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            Hébergé par Infomaniak Network SA, Genève
          </p>
        </div>
      </div>
    </footer>
  )
}