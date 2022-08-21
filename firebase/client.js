import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBREmOtm_WreN0qgEELAByGINOOMOmKZno",
  authDomain: "pokeapp-b9d46.firebaseapp.com",
  projectId: "pokeapp-b9d46",
  storageBucket: "pokeapp-b9d46.appspot.com",
  messagingSenderId: "580098584997",
  appId: "1:580098584997:web:82d7aad02ab80a5e76784c",
  measurementId: "G-H3BC761XGW",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
