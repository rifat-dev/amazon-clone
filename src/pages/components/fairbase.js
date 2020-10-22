import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2pDp4lG9QF-_LXN69rdcwfb7VHcxzwF4",
    authDomain: "clone-ca9ea.firebaseapp.com",
    databaseURL: "https://clone-ca9ea.firebaseio.com",
    projectId: "clone-ca9ea",
    storageBucket: "clone-ca9ea.appspot.com",
    messagingSenderId: "341136009289",
    appId: "1:341136009289:web:a6c833d930f159c3bff798",
    measurementId: "G-V02WM2NKHB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const database = firebase.database();

export { db, auth,database };