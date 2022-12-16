import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    //Paste Your firebase config here
  apiKey: "AIzaSyBO2Jn-OAwvzdCFITrjI7VdCit1dJX6c7U",
  authDomain: "foodie3-55ad0.firebaseapp.com",
  projectId: "foodie3-55ad0",
  storageBucket: "foodie3-55ad0.appspot.com",
  messagingSenderId: "575306778887",
  appId: "1:575306778887:web:323826c1d14139229c1da2"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }