import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { FirebaseAdapter } from "@next-auth/firebase-adapter";
// import { initializeApp, getApp, getApps } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   query,
//   getDocs,
//   where,
//   limit,
//   doc,
//   getDoc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   runTransaction,
// } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyC1vAtp9uDw552BZiwgKfEo1Yyq1s10NQA",
//   authDomain: "mzone-c39e4.firebaseapp.com",
//   projectId: "mzone-c39e4",
//   storageBucket: "mzone-c39e4.appspot.com",
//   messagingSenderId: "885936806491",
//   appId: "1:885936806491:web:53d1b9af8a8515f4e5bd7e",
//   measurementId: "G-G5E2G56YJK",
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore(app);

export default NextAuth({
  //   adapter: FirebaseAdapter({
  //     db,
  //     collection,
  //     query,
  //     getDocs,
  //     where,
  //     limit,
  //     doc,
  //     getDoc,
  //     addDoc,
  //     updateDoc,
  //     deleteDoc,
  //     runTransaction,
  //   }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {},
});
