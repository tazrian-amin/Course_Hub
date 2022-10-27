// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqpAJKLyBywtmQxRnyDMC9ugz5mfzdvbU",
    authDomain: "learning-platform-server.firebaseapp.com",
    projectId: "learning-platform-server",
    storageBucket: "learning-platform-server.appspot.com",
    messagingSenderId: "71130298872",
    appId: "1:71130298872:web:04f6060b84468015e03e0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;