import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyBn0xGFW52npp_cWEn995thyv1C6DShMto",
    authDomain: "desafio03-compassuol.firebaseapp.com",
    projectId: "desafio03-compassuol",
    storageBucket: "desafio03-compassuol.appspot.com",
    messagingSenderId: "806461516063",
    appId: "1:806461516063:web:11141010b26a17151ce82a"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };