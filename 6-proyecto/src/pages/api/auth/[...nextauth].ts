import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from '../../../lib/users';
import bcryptjs from 'bcryptjs';
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (!credentials) {
          throw new Error('No credentials provided');
        }

        try {

          const response = await axios.get<User[]>('https://66297c6b67df268010a0df12.mockapi.io/services/users');
          const users = response.data;
          
          console.log('users', users)
          console.log('credentials;', credentials)

          const user = users.find((user) => user.username === credentials.username);

          if (user) {
            console.log(`User found: ${user.username}`);
          }
          else{
            console.log(`User not found`)
          }

          if (user && await bcryptjs.compare(credentials.password, user.password)) {
            return { id: user.id, name: user.username };
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    newUser: '/auth/register'
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  }
});
