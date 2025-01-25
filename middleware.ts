import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token')

  // List of protected routes
  const protectedRoutes = ['/dashboard', '/playlist', '/appointments']

  if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route)) && !authToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/playlist/:path*', '/appointments/:path*'],
}

