// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqE1IwVx-LOUbzOEFos2vUTAZaH7Gfeb4",
  authDomain: "kontolll-e875c.firebaseapp.com",
  projectId: "kontolll-e875c",
  storageBucket: "kontolll-e875c.firebasestorage.app",
  messagingSenderId: "402666310247",
  appId: "1:402666310247:web:616e93ef65f2721ad062c2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
