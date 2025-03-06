import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Map English "about" to Turkish "hakkimizda"
  if (pathname.startsWith('/en/about')) {
    return NextResponse.redirect(new URL('/en/hakkimizda', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/en/about',
  ],
}
