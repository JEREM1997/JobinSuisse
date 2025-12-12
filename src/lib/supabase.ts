import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Vérification et valeurs par défaut pour le développement
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '⚠️ Variables d\'environnement Supabase non configurées!\n' +
    'Utilisation de valeurs par défaut pour le développement.\n' +
    'Configurez vos vraies valeurs dans .env.local pour utiliser Supabase.'
  )
}

// Créer le client Supabase avec des valeurs par défaut si nécessaire
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
)