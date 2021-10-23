import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  
  apiKey: "AIzaSyB1t82-ulD1Zv7CXrv57lp2c6xn9NlL27Q",
  authDomain: "chatty-5b51d.firebaseapp.com",
  databaseURL: "https://chatty-5b51d-default-rtdb.firebaseio.com",
  projectId: "chatty-5b51d",
  storageBucket: "chatty-5b51d.appspot.com",
  messagingSenderId: "632267677613",
  appId: "1:632267677613:web:abf4cb69b52c4337e98b24"
  
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();