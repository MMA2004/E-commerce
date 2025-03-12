import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpf1ssAL3RjavF5Y7kPrOyLzRdTGGEnDk",
    authDomain: "e-commerce-gibra.firebaseapp.com",
    projectId: "e-commerce-gibra",
    storageBucket: "e-commerce-gibra.firebasestorage.app",
    messagingSenderId: "496036142255",
    appId: "1:496036142255:web:cc83b02f52a33b290ec85a",
    measurementId: "G-1JYDM9C5WT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
