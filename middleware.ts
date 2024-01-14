import {
  authMiddleware,
  redirectToSignIn,
  redirectToSignUp,
} from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  afterAuth(auth, req, evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      if (req.url === "/dashboard") {
        return redirectToSignIn({ returnBackUrl: "/dashboard" });
      }
    }
  },
  publicRoutes: ["/publicly-available-page"],
});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
