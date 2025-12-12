'use client'

import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { CheckCircle, Users, Shield, Award, Phone, Mail, MapPin, Handshake } from 'lucide-react'
import ScrollAnimation from '@/components/ScrollAnimation'

const features = [
  {
    name: 'Expertise Suisse',
    description: 'Connaissance approfondie du marché du travail et des démarches administratives suisses.',
    icon: Award,
  },
  {
    name: 'Accompagnement personnalisé',
    description: 'Suivi individuel adapté à votre profil et vos objectifs professionnels.',
    icon: Users,
  },
  {
    name: 'Conformité légale',
    description: 'Respect de toutes les obligations légales suisses pour votre tranquillité d\'esprit.',
    icon: Shield,
  },
]

const packs = [
  {
    name: 'Starter Pack',
    price: '79',
    description: 'Parfait pour débuter vos démarches en Suisse',
    features: [
      'eBook complet sur l\'emploi en Suisse',
      'Révision professionnelle de votre CV',
      'Livraison immédiate par email',
      'Format PDF téléchargeable',
    ],
    href: '/packs/starter',
    cta: 'Commencer maintenant',
    popular: false,
  },
  {
    name: 'Pack Emploi',
    price: '299',
    description: 'Accompagnement complet pour trouver un emploi',
    features: [
      'Tout du Starter Pack inclus',
      'Accompagnement personnalisé',
      'Recherche d\'emploi ciblée',
      'Préparation aux entretiens',
      'Suivi jusqu\'à l\'embauche',
    ],
    href: '/packs/2',
    cta: 'Réserver (acompte)',
    popular: true,
  },
  {
    name: 'Pack Emploi + Logement',
    price: '499',
    description: 'Solution complète emploi et logement',
    features: [
      'Tout du Pack Emploi inclus',
      'Recherche de logement adaptée',
      'Aide aux démarches administratives',
      'Accompagnement installation',
      'Support logement personnalisé',
    ],
    href: '/packs/3',
    cta: 'Solution complète',
    popular: false,
  },
]

const testimonials = [
  {
    content: 'Grâce à JobinSuisse, j\'ai trouvé un emploi en 3 semaines à Genève. L\'accompagnement était parfait.',
    author: 'Marie D.',
    role: 'Comptable, Genève',
  },
  {
    content: 'Service exceptionnel ! Ils m\'ont aidé pour l\'emploi et le logement. Je recommande vivement.',
    author: 'Pierre L.',
    role: 'Ingénieur, Zurich',
  },
  {
    content: 'Équipe professionnelle qui connaît parfaitement le marché suisse. Très satisfait du résultat.',
    author: 'Sophie M.',
    role: 'Marketing, Lausanne',
  },
]

const partners = [
  {
    name: 'Weber Secure',
    description: 'Partenaire spécialisé en assurance et fiscalité, offrant des solutions complètes pour votre installation en Suisse.',
    logo: '/brand/weber-secure-logo.png.png',
  },
  {
    name: 'les eXperts',
    description: 'Agence de placement spécialisée dans les métiers du maquillage, cosmétique et esthétiques.',
    logo: '/brand/experts-logo.png',
  },
  {
    name: 'Randstad Suisse',
    description: 'Partenaire de confiance pour le recrutement et les services RH dans toute la Suisse.',
    logo: '/brand/partners/randstad-logo.png',
  },
  {
    name: 'Kelly Services',
    description: 'Solutions de recrutement spécialisées dans les secteurs IT, finance et ingénierie.',
    logo: '/brand/partners/kelly-logo.png',
  },
  {
    name: 'Michael Page',
    description: 'Cabinet de recrutement spécialisé dans les postes de cadres et experts.',
    logo: '/brand/partners/michael-page-logo.png',
  },
  {
    name: 'Robert Half',
    description: 'Spécialiste du recrutement dans les domaines de la finance, IT et administration.',
    logo: '/brand/partners/robert-half-logo.png',
  },
]

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      // Démarrer la vidéo à 0.01 seconde
      video.currentTime = 0.01
    }

    const handleTimeUpdate = () => {
      // Si la vidéo atteint 1 minute et 1 seconde (61 secondes), revenir à 0.01 seconde
      if (video.currentTime >= 61) {
        video.currentTime = 0.01
      }
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  return (
    <>
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8"> {/* Removed bg-black */}
        {/* Video background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover -z-20" // Lowest z-index
          autoPlay
          muted
          playsInline
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div> {/* Above video */}

        {/* Existing blur effects, now above video/overlay */}
        <div className="absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand to-brand-light opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        {/* Main content, ensure it's on top */}
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 relative z-10"> {/* Added relative z-10 */}
            <div className="text-center">
                <div className="mb-8">
                  <img
                    src="/brand/LOGO VALIDE-Photoroom.png"
                    alt="JobinSuisse Logo"
                    className="mx-auto h-56 w-auto sm:h-72 lg:h-80 xl:h-96 2xl:h-[28rem] animate-float hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl hover:neon-glow transition-all duration-500">
                  Votre nouvelle vie
                  <span className="text-brand block">en Suisse commence ici</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
                  Spécialistes de l'accompagnement professionnel en Suisse. Nous vous aidons à décrocher 
                  l'emploi de vos rêves et à trouver le logement idéal pour votre installation.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/packs/starter"
                    className="rounded-md bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-all transform hover:scale-105 hover-glow animate-pulse-glow"
                  >
                    Commencer dès 79 CHF
                  </Link>
                  <a
                    href="#packs"
                    className="text-base font-semibold leading-6 text-white hover:text-brand transition-colors"
                  >
                    Voir nos packs <span aria-hidden="true">→</span>
                  </a>
                </div>
            </div>
          </div>
        {/* Second blur effect */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-brand-light to-brand opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Features section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <ScrollAnimation animation="fadeInUp">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand">Pourquoi nous choisir</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Votre succès en Suisse, notre priorité
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Avec des années d'expérience sur le marché suisse, nous mettons notre expertise 
              à votre service pour maximiser vos chances de réussite.
            </p>
          </div>
        </ScrollAnimation>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.name} animation="bounceIn" delay={index * 200}>
                <div className="flex flex-col hover-lift hover-glow p-6 rounded-2xl transition-all duration-300">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon className="h-5 w-5 flex-none text-brand animate-float" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              </ScrollAnimation>
            ))}
          </dl>
        </div>
      </div>

      {/* Pricing section */}
      <div id="packs" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base font-semibold leading-7 text-brand">Nos solutions</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Choisissez le pack qui vous correspond
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Des solutions adaptées à chaque étape de votre projet professionnel en Suisse.
              </p>
            </div>
          </ScrollAnimation>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-none lg:grid-cols-3">
            {packs.map((pack, packIdx) => (
              <ScrollAnimation key={pack.name} animation="slideBlur" delay={packIdx * 200}>
                <div
                  className={`${
                    pack.popular
                      ? 'relative bg-white shadow-2xl ring-1 ring-gray-900/10 lg:scale-110 lg:z-10 animate-pulse-glow'
                      : 'bg-white/60 ring-1 ring-gray-900/10 lg:bg-white lg:shadow-md glass'
                  } rounded-3xl p-8 lg:py-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-4 hover-glow magnetic group`}
                >
                  {pack.popular && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-brand to-brand-dark px-3 py-2 text-xs font-semibold text-white text-center">
                      Plus populaire
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">
                      {pack.name}
                    </h3>
                  </div>
                  <p className="mt-6 text-base leading-7 text-gray-600">{pack.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{pack.price}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">CHF</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {pack.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckCircle className="h-6 w-5 flex-none text-brand" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pack.href}
                    className={`${
                      pack.popular
                        ? 'bg-brand text-white shadow-sm hover:bg-brand-dark focus-visible:outline-brand animate-pulse-glow'
                        : 'text-brand ring-1 ring-inset ring-brand hover:ring-brand-dark'
                    } mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform hover:scale-105 hover-glow`}
                  >
                    {pack.cta}
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-brand">Témoignages</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ils nous font confiance
              </p>
            </div>
          </ScrollAnimation>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-1 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial, index) => (
                <ScrollAnimation key={testimonial.author} animation="slideBlur" delay={index * 200}>
                  <div className="pt-8 sm:inline-block sm:w-full sm:px-4 hover-lift hover-glow">
                    <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 glass">
                      <blockquote className="text-gray-900">
                        <p>"{testimonial.content}"</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div className="h-10 w-10 rounded-full bg-brand flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.author}</div>
                          <div className="text-gray-600">{testimonial.role}</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Handshake className="h-8 w-8 text-brand animate-bounce" />
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Nos partenaires de confiance
                </h2>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nous collaborons avec les meilleurs acteurs du marché suisse pour vous offrir 
                les meilleures opportunités.
              </p>
            </div>
          </ScrollAnimation>
          <div className="relative mt-16 overflow-hidden py-16">
            <div className="flex animate-scroll-infinite space-x-20">
              {/* First set of partners */}
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group relative flex-shrink-0"
                >
                  <div className="h-32 w-32 rounded-full bg-white p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-xl max-w-xs">
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2">
                        <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-gray-900"></div>
                      </div>
                      <h4 className="font-semibold text-sm mb-2">{partner.name}</h4>
                      <p className="text-xs leading-tight text-gray-300">{partner.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Second set for infinite scroll effect */}
              {partners.map((partner) => (
                <div
                  key={`${partner.name}-2`}
                  className="group relative flex-shrink-0"
                >
                  <div className="h-32 w-32 rounded-full bg-white p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-xl max-w-xs">
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2">
                        <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-gray-900"></div>
                      </div>
                      <h4 className="font-semibold text-sm mb-2">{partner.name}</h4>
                      <p className="text-xs leading-tight text-gray-300">{partner.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contactez-nous
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Une question ? Besoin d'informations personnalisées ? Notre équipe est là pour vous accompagner.
              </p>
            </div>
          </ScrollAnimation>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
            <ScrollAnimation animation="bounceIn" delay={0}>
              <div className="flex flex-col items-center p-6 hover-lift hover-glow rounded-2xl transition-all duration-300">
                <Phone className="h-8 w-8 text-brand mb-4 animate-float" />
                <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                <p className="mt-2 text-gray-600 text-center">
                  <a href="tel:+41123456789" className="hover:text-brand transition-colors">
                    +41 12 345 67 89
                  </a>
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="bounceIn" delay={200}>
              <div className="flex flex-col items-center p-6 hover-lift hover-glow rounded-2xl transition-all duration-300">
                <Mail className="h-8 w-8 text-brand mb-4 animate-float" />
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="mt-2 text-gray-600 text-center">
                  <a href="mailto:contact@jobinsuisse.ch" className="hover:text-brand transition-colors">
                    contact@jobinsuisse.ch
                  </a>
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="bounceIn" delay={400}>
              <div className="flex flex-col items-center p-6 hover-lift hover-glow rounded-2xl transition-all duration-300">
                <MapPin className="h-8 w-8 text-brand mb-4 animate-float" />
                <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                <p className="mt-2 text-gray-600 text-center">
                  Rue de la Paix 15<br />
                  1200 Genève, Suisse
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-brand">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Prêt à commencer votre nouvelle vie en Suisse ?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-light">
                Rejoignez les centaines de personnes qui nous font confiance pour leur installation en Suisse.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/packs/starter"
                  className="rounded-md bg-white px-6 py-3 text-base font-semibold text-brand shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all transform hover:scale-105 hover-glow"
                >
                  <Handshake className="inline h-5 w-5 mr-2" />
                  Commencer maintenant
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </>
  )
}