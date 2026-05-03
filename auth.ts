import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		GitHub,
	],
	secret: process.env.NEXTAUTH_SECRET,
	// Add other providers like Google or Credentials here
});
