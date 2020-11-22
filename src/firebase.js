import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAC4IKYXqeWVBZjGEPzRLtwWy66dPLeD-U",
  authDomain: "clone-6bd0d.firebaseapp.com",
  databaseURL: "https://clone-6bd0d.firebaseio.com",
  projectId: "clone-6bd0d",
  storageBucket: "clone-6bd0d.appspot.com",
  messagingSenderId: "406726787714",
  appId: "1:406726787714:web:38e84beeb1d2dc3fff2a9b",
  measurementId: "G-1FDMZ30708",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
