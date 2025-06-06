import createMiddleware from 'next-intl/middleware';
import {routing} from '@lms/features/i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};