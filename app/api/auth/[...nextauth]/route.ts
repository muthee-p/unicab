import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      
      name: "Credentials",

      credentials: {
        name: { label: "name", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credentials?.name,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };




// import { compare } from 'bcrypt'
// import NextAuth, { type NextAuthOptions } from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'

// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET as string,
//   session: {
//     strategy: 'jwt'
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'Sign in',
//       credentials: {
//         email: {
//           label: 'Email',
//           type: 'email',
//           placeholder: 'hello@example.com'
//         },
//         password: { label: 'Password', type: 'password' }
//       },
//       async authorize(credentials) {
//                 if (!credentials?.email || !credentials.password) {
//           return null
//         }

//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials.email
//           }
//         })

//         if (!user) {
//           return null
//         }

//         const isPasswordValid = await compare(
//           credentials.password,
//           user.password
//         )

//         if (!isPasswordValid) {
//           return null
//         }

//         return {
//           id: user.id + '',
//           email: user.email,
//           name: user.name
//         }
//       }
//     })

//         ]
// }

// const handler = NextAuth(authOptions)
// export { handler as GET, handler as POST }