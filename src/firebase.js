import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBdSR30Ou5RXMcfQ39AZFAzszpzMLBymTs",
    authDomain: "clone-495ef.firebaseapp.com",
    projectId: "clone-495ef",
    storageBucket: "clone-495ef.appspot.com",
    messagingSenderId: "316320984001",
    appId: "1:316320984001:web:b9e222e0e52fd7cbefdd40",
    measurementId: "G-7GS5YKWLLW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };