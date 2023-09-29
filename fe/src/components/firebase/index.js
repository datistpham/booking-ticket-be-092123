// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7rChq0KnDRq_iOZzXo5g_Dj50NxIdLjc",
  authDomain: "ticket-7e8e8.firebaseapp.com",
  projectId: "ticket-7e8e8",
  storageBucket: "ticket-7e8e8.appspot.com",
  messagingSenderId: "419861830640",
  appId: "1:419861830640:web:688f65f31a949412ecdb35",
  measurementId: "G-FZ9SMFGB7Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app
export const analytics = getAnalytics(app);