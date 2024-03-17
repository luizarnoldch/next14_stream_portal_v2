import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "@/lib/amplifyServer";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return session.tokens !== undefined;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  });

  const cookieStore = cookies();
  const allCookies = cookieStore.getAll();
  let tokenCookie = "";
  for (const { name, value } of allCookies) {
    if (name.endsWith('.idToken')) {
      tokenCookie = value;
      break;
    }
  }

  if (
    authenticated &&
    (pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up"))
  ) {
    return NextResponse.redirect(new URL("/portal/admin", request.url));
  }

  if (!authenticated && pathname.startsWith("/portal")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (tokenCookie) {
    const response = NextResponse.next();
    response.headers.set("Authorization", `${tokenCookie}`);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal/:path*", "/sign-in", "/sign-up"],
};
