
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA11tDAT5zUNeeh__mvQTC0xN_4sa1G61c",
  authDomain: "proyecto-final-e0573.firebaseapp.com",
  projectId: "proyecto-final-e0573",
  storageBucket: "proyecto-final-e0573.firebasestorage.app",
  messagingSenderId: "805306143990",
  appId: "1:805306143990:web:df255e0301c63bdd5b88d7"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);