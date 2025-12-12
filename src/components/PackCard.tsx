import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

interface PackCardProps {
  name: string
  price: string
  description: string
  features: string[]
  href: string
  cta: string
  popular?: boolean
}

export default function PackCard({
  name,
  price,
  description,
  features,
  href,
  cta,
  popular = false
}: PackCardProps) {
  return (
    <div
      className={`${
        popular
          ? 'relative bg-white shadow-2xl ring-1 ring-gray-900/10 lg:scale-110 lg:z-10'
          : 'bg-white/60 ring-1 ring-gray-900/10 lg:bg-white lg:shadow-md'
      } rounded-3xl p-8 lg:py-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
    >
      {popular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-brand to-brand-dark px-3 py-2 text-xs font-semibold text-white text-center">
          Plus populaire
        </div>
      )}
      <div className="flex items-center justify-between gap-x-4">
        <h3 className="text-lg font-semibold leading-8 text-gray-900">
          {name}
        </h3>
      </div>
      <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-4xl font-bold tracking-tight text-gray-900">{price}</span>
        <span className="text-sm font-semibold leading-6 text-gray-600">CHF</span>
      </p>
      <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-x-3">
            <CheckCircle className="h-6 w-5 flex-none text-brand" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={`${
          popular
            ? 'bg-brand shadow-sm hover:bg-brand-dark focus-visible:outline-brand text-white'
            : 'bg-brand/10 text-brand hover:bg-brand/20 focus-visible:outline-brand'
        } mt-8 block w-full rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all transform hover:scale-105`}
      >
        {cta}
      </Link>
    </div>
  )
}