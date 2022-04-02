import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXnOTJLf1qSj8Dh-aPfGpsbuV3QV4mPR4",
  authDomain: "slack-clone-6c928.firebaseapp.com",
  projectId: "slack-clone-6c928",
  storageBucket: "slack-clone-6c928.appspot.com",
  messagingSenderId: "1035760747190",
  appId: "1:1035760747190:web:97d8caaf2db4297b269c17",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
