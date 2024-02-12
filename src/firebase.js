import firebase from "firebase/compat/app";
//import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAnR8rGWwc1jLsma-6r4xq0Ewd0esP0Hjk",
    authDomain: "line-clone-a3e86.firebaseapp.com",
    projectId: "line-clone-a3e86",
    storageBucket: "line-clone-a3e86.appspot.com",
    messagingSenderId: "981309329595",
    appId: "1:981309329595:web:75673eafa2a3e4b84b199e"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };