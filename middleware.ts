import createMiddleware from "next-intl/middleware";
import { routing } from "./app/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(hk|tw)/:path*", '/((?!api|_next|_vercel|.*\\..*).*)'],
};
