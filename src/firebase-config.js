import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2ieQcLgFZqHLOp4XA11L7xSZW79M0k4A",
  authDomain: "comprasapp-ebfee.firebaseapp.com",
  projectId: "comprasapp-ebfee",
  storageBucket: "comprasapp-ebfee.appspot.com",
  messagingSenderId: "135900698838",
  appId: "1:135900698838:web:d7c32935056796ed319177"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
