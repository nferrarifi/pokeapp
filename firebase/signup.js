import app from "./client";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const client = app();

const auth = getAuth();

export const register = createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
