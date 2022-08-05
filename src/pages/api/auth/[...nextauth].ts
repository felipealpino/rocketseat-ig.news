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
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('🚀 ~ user', user);

      try {
        await fauna.query(
          query.If(
            query.Not(
              query.Exists(
                query.Match(
                  query.Index('user_by_email'), // index cadastrado para email no fauna,
                  query.Casefold(user.email)
                )
              )
            ),
            query.Create('users', { data: { email: user.email } }),
            query.Get(query.Match(query.Index('user_by_email'), query.Casefold(user.email)))
          )
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
