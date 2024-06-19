import { initializeApp } from "firebase/app";
import { getAuth, Auth, FacebookAuthProvider, GoogleAuthProvider, UserCredential, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBn0xGFW52npp_cWEn995thyv1C6DShMto",
    authDomain: "desafio03-compassuol.firebaseapp.com",
    projectId: "desafio03-compassuol",
    storageBucket: "desafio03-compassuol.appspot.com",
    messagingSenderId: "806461516063",
    appId: "1:806461516063:web:11141010b26a17151ce82a"
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