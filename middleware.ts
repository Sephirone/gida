import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Redirect all about routes to hakkimizda
  if (pathname.includes('/about')) {
    const newPath = pathname.replace('/about', '/hakkimizda')
    return NextResponse.redirect(new URL(newPath, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/:lang/about',
    '/:lang/about/:path*',
  ],
}
