import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCwq_JrWUitxKCIjwFs2Q2oH4KGWVHKXs8",
  authDomain: "react-firebase-chat-app-43f56.firebaseapp.com",
  projectId: "react-firebase-chat-app-43f56",
  storageBucket: "react-firebase-chat-app-43f56.appspot.com",
  messagingSenderId: "1049054706594",
  appId: "1:1049054706594:web:549171e2ef7887366710fb",
  measurementId: "G-9WBDG20KXP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
