import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {  getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7nq91dPvVqRH-SbslsMcsj9ueHaMWtP8",
  authDomain: "depende-f1922.firebaseapp.com",
  projectId: "depende-f1922",
  storageBucket: "depende-f1922.appspot.com",
  messagingSenderId: "717322377102",
  appId: "1:717322377102:web:e9d70d75c6a4ad80e9b6df",
  measurementId: "G-WXPFEQRXVF",
};
// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);




