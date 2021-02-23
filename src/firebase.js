import firebase from "firebase/app"
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAT8PApUhERuPaODzcQwVSZF4eA44Va1_o",
  authDomain: "test-chat-82b9d.firebaseapp.com",
  databaseURL: "https://test-chat-82b9d-default-rtdb.firebaseio.com",
  projectId: "test-chat-82b9d",
  storageBucket: "test-chat-82b9d.appspot.com",
  messagingSenderId: "164733900555",
  appId: "1:164733900555:web:a7306dc109252109d3340e",
  measurementId: "G-9PLLKMX0FQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;