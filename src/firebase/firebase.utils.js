import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "crwn-db-8c0c3.firebaseapp.com",
  databaseURL: "https://crwn-db-8c0c3.firebaseio.com",
  projectId: "crwn-db-8c0c3",
  storageBucket: "crwn-db-8c0c3.appspot.com",
  messagingSenderId: "652616152186",
  appId: "1:652616152186:web:49d5ac3992adbeaef877c3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createsAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createsAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error during crerating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

