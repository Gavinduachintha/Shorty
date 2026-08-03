import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/server";

// REMOVED: the `createServerClient` import that was here before.
// The old code created a second Supabase client in the /dashboard guard and
// called getUser() on the original request cookies — which still held the
// *stale* token if updateSession had just rotated it. That second call was
// both redundant and potentially wrong. updateSession now returns the user
// directly so we only call getUser() once per request.

export async function middleware(request: NextRequest) {
  // updateSession refreshes the Supabase session, writes the new cookies into
  // the response, and now also returns the authenticated userId.
  const { response, userId } = await updateSession(request);

  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/dashboard")) {
    if (!userId) {
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static  (static files)
     * - _next/image   (image optimisation)
     * - favicon.ico
     * - public assets (svg, png, jpg, ico, webp)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|ico)$).*)",
  ],
};
