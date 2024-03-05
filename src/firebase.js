import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlQ0-kWbTmK1PqOwdlJRXY-rrH2h9iSoY",
  authDomain: "zeecode-academy.firebaseapp.com",
  projectId: "zeecode-academy",
  storageBucket: "zeecode-academy.appspot.com",
  messagingSenderId: "25966813345",
  appId: "1:25966813345:web:15303bdbf22099cd55d0e0",
  measurementId: "G-YS1FFXGJM2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
