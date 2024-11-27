// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqQmCvIrTdvBhKLq1pKjv0kxQNiK5j9SI",
  authDomain: "simple-firebase-e88f1.firebaseapp.com",
  projectId: "simple-firebase-e88f1",
  storageBucket: "simple-firebase-e88f1.firebasestorage.app",
  messagingSenderId: "811436702485",
  appId: "1:811436702485:web:230cd4685788aa752e071c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);