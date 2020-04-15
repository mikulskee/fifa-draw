import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

var firebaseConfig = {
  apiKey: "AIzaSyAAIq1kFdEeciJ3QZTGs9_h4Cw9ckkEej4",
  authDomain: "fifa-draw-c1f82.firebaseapp.com",
  databaseURL: "https://fifa-draw-c1f82.firebaseio.com",
  projectId: "fifa-draw-c1f82",
  storageBucket: "",
  messagingSenderId: "674370981925",
  appId: "1:674370981925:web:a718e851ad4ed2bcd2afcc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
