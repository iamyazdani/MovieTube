import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn18lTzN5qKZGL21_XvxtB6V_nk3klC9Y",
  authDomain: "clone-e5ab4.firebaseapp.com",
  projectId: "clone-e5ab4",
  storageBucket: "clone-e5ab4.appspot.com",
  messagingSenderId: "845386204107",
  appId: "1:845386204107:web:6a197af199eeb82a506c4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;