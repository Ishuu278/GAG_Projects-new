import { NextResponse } from 'next/server';

/**
 * Next.js Middleware
 *
 * Runs before every matched request.  Its job here is to tag embed-mode
 * requests with a custom request header so that downstream server
 * components (e.g. games/layout.js) can detect the flag without needing
 * access to searchParams (which layouts don't receive).
 */
export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // If the request is for a game page with ?embed=1, tag it so the
  // games layout can skip the NextAuth session check.
  if (pathname.startsWith('/games/') && searchParams.get('embed') === '1') {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-embed-mode', '1');
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/games/:path*',
};
