// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXY184KjEiUvWuiyi4f5maeRLk_H3Y4d0",
  authDomain: "restaurant-app-a0501.firebaseapp.com",
  projectId: "restaurant-app-a0501",
  storageBucket: "restaurant-app-a0501.appspot.com",
  messagingSenderId: "687677290962",
  appId: "1:687677290962:web:a55609e844a00b2f5cf00b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

