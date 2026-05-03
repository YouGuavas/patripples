import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [GitHub], // Add other providers like Google or Credentials here
});
