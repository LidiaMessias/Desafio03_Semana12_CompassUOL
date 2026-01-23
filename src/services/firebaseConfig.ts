import { initializeApp } from "firebase/app";
import { getAuth, Auth, FacebookAuthProvider, GoogleAuthProvider, UserCredential, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "desafio03-compassuol.firebaseapp.com",
    projectId: "desafio03-compassuol",
    storageBucket: "desafio03-compassuol.appspot.com",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

  const app = initializeApp(firebaseConfig);
  export const auth: Auth = getAuth(app);
  const fcbAuthProvider = new FacebookAuthProvider();
  const googleAuthProvider = new GoogleAuthProvider();

  export const FaceAuth = async (): Promise<UserCredential> => {
    const fcbAuth = await signInWithPopup(auth, fcbAuthProvider);
    return fcbAuth;
  };

  export const GoogleAuth = async (): Promise<UserCredential> => {
    const ggAuth = await signInWithPopup(auth, googleAuthProvider);
    return ggAuth;
  };