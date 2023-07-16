import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({ session }: any) {
      const { name, email, image } = session.user;
      // get user
      const origin = process.env.ORIGIN || "";
      const user = await fetch(`${origin}/api/users?email=${email}`, {
        method: "GET",
      });
      const { data } = await user.json();
      if (data.length === 0) {
        const savedUser = await fetch(`${origin}/api/users`, {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            image,
          }),
        });
        const { data } = await savedUser.json();
        console.log(data);
      }
      return session;
    },
  },
});
