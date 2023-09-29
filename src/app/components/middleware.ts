import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
    publicRoutes:['/',"/Products/Female","/Products/Male","/Products/Female","/api:path*","/cart","/Products/AllProducts","/Products/Kids"],
    // ignoredRoutes:["/((?!api|trpc))(_next.*|.+\.[\w]+$)"],

});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};
