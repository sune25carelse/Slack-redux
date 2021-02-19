import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtl3vguJA3FO1--rJ3qnP9NwXQSgEvY84",
  authDomain: "slack-redux-180d3.firebaseapp.com",
  projectId: "slack-redux-180d3",
  storageBucket: "slack-redux-180d3.appspot.com",
  messagingSenderId: "327546266421",
  appId: "1:327546266421:web:a3b7e67c2579150cee627c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
