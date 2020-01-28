import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAhunYLC4gDlzWiNTmTasr1wczkUSSaa_k",
  authDomain: "crwn-db-8c0c3.firebaseapp.com",
  databaseURL: "https://crwn-db-8c0c3.firebaseio.com",
  projectId: "crwn-db-8c0c3",
  storageBucket: "crwn-db-8c0c3.appspot.com",
  messagingSenderId: "652616152186",
  appId: "1:652616152186:web:49d5ac3992adbeaef877c3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
