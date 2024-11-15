// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvn9tFnbTrXXBl_pmdV8OCA-7vtEmGUO4",
  authDomain: "dragon-news-practice-dbbac.firebaseapp.com",
  projectId: "dragon-news-practice-dbbac",
  storageBucket: "dragon-news-practice-dbbac.firebasestorage.app",
  messagingSenderId: "465558937522",
  appId: "1:465558937522:web:2316afdb90b8071a9c4eab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;