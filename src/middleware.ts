// Disable middleware for now to fix deployment issues
export { }

// Original middleware code (commented out to prevent errors)
/*
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // Commented out to prevent Invalid URL errors
  // const supabase = createServerClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   {
  //     cookies: {
  //       get(name: string) {
  //         return request.cookies.get(name)?.value
  //       },
  //       set(name: string, value: string, options: any) {
  //         response.cookies.set({
  //           name,
  //           value,
  //           ...options,
  //         })
  //       },
  //       remove(name: string, options: any) {
  //         response.cookies.set({
  //           name,
  //           value: '',
  //           ...options,
  //         })
  //       },
  //     },
  //   }
  // )

  // const { data: { session } } = await supabase.auth.getSession()

  // Protected routes that require authentication
  // const protectedRoutes = ['/', '/dashboard', '/profile', '/settings']
  
  // Check if the current path is a protected route and user is not authenticated
  // if (protectedRoutes.includes(request.nextUrl.pathname) && !session) {
  //   // Redirect to signin page
  //   return NextResponse.redirect(new URL('/auth/signin', request.url))
  // }

  return response
}

// Only run middleware on matching routes
export const config = {
  matcher: [],
}
*/
