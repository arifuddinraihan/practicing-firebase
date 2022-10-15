// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABPiwXqvrdGpAoej4ShzBySeDk2aJt6tU",
    authDomain: "practicing-firebase-5709b.firebaseapp.com",
    projectId: "practicing-firebase-5709b",
    storageBucket: "practicing-firebase-5709b.appspot.com",
    messagingSenderId: "734512249633",
    appId: "1:734512249633:web:0427c134f7a470370bdc60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app