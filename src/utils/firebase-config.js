import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDhCWk3oxuyXNMoucwizr_U-zt5Ex91rH0",
  authDomain: "netflix-project-15a4e.firebaseapp.com",
  projectId: "netflix-project-15a4e",
  storageBucket: "netflix-project-15a4e.appspot.com",
  messagingSenderId: "1018876910781",
  appId: "1:1018876910781:web:4e292602eae98de68eebd4",
  measurementId: "G-X8L42FTWP5"
};

const app = initializeApp(firebaseConfig);


export const firebaseAuth=getAuth(app);