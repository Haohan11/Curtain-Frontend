import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "XiangYu-Frontend",
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "XiangYu-Frontend",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        account: {
          label: "Account",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const payload = {
          account: credentials.account,
          password: credentials.password,
        };

        const res = await fetch(process.env.NEXT_PUBLIC_BACKENDURL + "/login-front", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const user = await res.json();
        if (res.status === 200 && user.status) {
          console.log("user login resp data: ", user.data);
          return user.data;
        }

        if (user.message === "NoPermission") {
          return { error: "NoPermission" };
        }

        return null;
      },
    }),
    // ...add more providers here
  ],
  secret: "oEf/gvMZC2AgFYr992YdeHP0OwnfMoywqv/xNv+59m0=",
  pages: {
    signIn: "/",
    signOut: "/",
  },
  callbacks: {
    async signIn({ user }) {
      if (user?.error === "NoPermission") {
        throw new Error("NoPermission");
      }
      return true;
    },
    
    async jwt({ token, trigger, session, user }) {
      if (user) {
        return {
          ...token,
          userId: user.id,
          userName: user.name,
          accessToken: user.token,
          _exp: user._exp,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user.userId = token.userId;
      session.user.userName = token.userName;
      session.user.accessToken = token.accessToken;
      session._exp = token._exp;

      return session;
    },
  },
  session: {
    jwt: true,
  },
  // Enable debug messages in the console if you are having problems
  debug: true,
};

export default NextAuth(authOptions);
