import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const res = await fetch("https://unicab.vercel.app/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user) {
         
          return user;
        } else {
          
          return null;

          
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
    pages: {
    signIn: "/login",
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