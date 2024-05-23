import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const loginStatus = request.headers.get('cookie');
    console.log("loginStatus:",loginStatus)
    if(!Boolean(loginStatus)){
        return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/dashboard',
       // '/((?!login|public|api).*)',
      ],
}