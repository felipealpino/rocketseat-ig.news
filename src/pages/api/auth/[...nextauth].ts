import { query } from 'faunadb';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { fauna } from '../../../services/fauna';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user',
        },
      },
    }),
    // ... add more providers here
  ],
  jwt: { secret: process.env.JWT_SECRET },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('🚀 ~ user', user);
      try {
        await fauna.query(
          query.Create(query.Collection('users'), {
            data: { email: user.email },
          })
        );
        return true;
      } catch (error) {
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  //Adatabase is optional,but required to persist accounts inadatabase
  // database: process.env.DATABASE_URL,
});
