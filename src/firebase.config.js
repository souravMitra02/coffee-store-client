// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrw5_1a1HFy4mhDYrk6-mC0HgHU7JYsbc",
  authDomain: "coffee-store-app-c4132.firebaseapp.com",
  projectId: "coffee-store-app-c4132",
  storageBucket: "coffee-store-app-c4132.firebasestorage.app",
  messagingSenderId: "615018541323",
  appId: "1:615018541323:web:2a1ff786ef02e2370cb20e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);