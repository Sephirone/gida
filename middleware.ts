import { NextRequest, NextResponse } from 'next/server';
import { SupportedLanguages } from './types/common';

const locales: SupportedLanguages[] = ['tr', 'en', 'de', 'ru', 'ar'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Statik dosyaları ve API rotalarını atla
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') ||
    pathname.includes('/static/') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.json')
  ) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/tr${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico).*)']
};
