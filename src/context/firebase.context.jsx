// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5QsB7ObFAjYuQE86wr4pKF5A0qiJKPV0",
  authDomain: "rechatsync.firebaseapp.com",
  projectId: "rechatsync",
  storageBucket: "rechatsync.appspot.com",
  messagingSenderId: "344855373063",
  appId: "1:344855373063:web:588f72920f0df1361291a2",
  measurementId: "G-0LL7X5S0LS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
