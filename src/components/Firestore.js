import firebase from "firebase/app";    // Firebase App (the core Firebase SDK) is always required and must be listed first
import "firebase/analytics";            // If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/firestore";            // Add the Firebase products that you want to use

// Personal firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAZRVJBPEs4BPxJF5GMjI2YWm_-k-85Hl4",
    authDomain: "portfolio-5cff5.firebaseapp.com",
    projectId: "portfolio-5cff5",
    storageBucket: "portfolio-5cff5.appspot.com",
    messagingSenderId: "1090484156076",
    appId: "1:1090484156076:web:8e31e11acc32733bf9d109",
    measurementId: "G-ZKYXNP6ZT3"
};

// Initialize Firebase and firestore
firebase.initializeApp(firebaseConfig);

export default firebase;           // Export firestore