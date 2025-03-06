import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['tr', 'en', 'de', 'ru', 'ar']
const defaultLocale = 'tr'

// Define page mappings for each language
const pageMappings: { [key: string]: { [key: string]: string } } = {
  tr: {
    'hakkimizda': 'hakkimizda',
    'urunler': 'urunler',
    'hizmetler': 'hizmetler',
    'iletisim': 'iletisim'
  },
  en: {
    'about': 'hakkimizda',
    'products': 'urunler',
    'services': 'hizmetler',
    'contact': 'iletisim'
  },
  de: {
    'uber-uns': 'hakkimizda',
    'produkte': 'urunler',
    'dienstleistungen': 'hizmetler',
    'kontakt': 'iletisim'
  },
  ru: {
    'o-nas': 'hakkimizda',
    'produkty': 'urunler',
    'uslugi': 'hizmetler',
    'kontakty': 'iletisim'
  },
  ar: {
    'about': 'hakkimizda',
    'products': 'urunler',
    'services': 'hizmetler',
    'contact': 'iletisim'
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if pathname starts with a locale
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    // Redirect to default locale
    return NextResponse.redirect(new URL(`/tr${pathname}`, request.url))
  }

  // Get current locale from URL
  const currentLocale = pathname.split('/')[1]

  // Handle page mappings
  const restOfPath = pathname.split('/').slice(2).join('/')
  if (currentLocale && pageMappings[currentLocale]) {
    // Map URLs based on language
    for (const [key, value] of Object.entries(pageMappings[currentLocale])) {
      if (restOfPath === key) {
        const newPath = `/${currentLocale}/${value}`
        if (pathname !== newPath) {
          return NextResponse.rewrite(new URL(newPath, request.url))
        }
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
  ],
}
