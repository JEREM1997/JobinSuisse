import Link from 'next/link'
import { Briefcase } from 'lucide-react'

interface SiteLogoProps {
  className?: string
  showText?: boolean
}

export default function SiteLogo({ className = '', showText = true }: SiteLogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <div className="flex-shrink-0">
        <img
          src="/brand/LOGO VALIDE-Photoroom.png"
          alt="JobinSuisse Logo"
          width="180"
          height="180"
          className="rounded-lg"
        />
      </div>
    </Link>
  )
}