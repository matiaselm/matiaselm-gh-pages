import firebase from "firebase/app";    // Firebase App (the core Firebase SDK) is always required and must be listed first
import "firebase/analytics";            // If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/firestore";            // Add the Firebase products that you want to use

// Personal firebase config
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_APIKEY,
    authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECTID,
    storageBucket: process.env.REACT_APP_FB_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FB_APPID,
    measurementId: process.env.REACT_APP_FB_MEASUREMENTID
};

// Initialize Firebase and firestore
firebase.initializeApp(firebaseConfig);

export default firebase;           // Export firebase