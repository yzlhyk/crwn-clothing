import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDUxq9foHlcilAbYjoBNya3mecKDLdPPws",
  authDomain: "crwn-db-5c247.firebaseapp.com",
  projectId: "crwn-db-5c247",
  storageBucket: "crwn-db-5c247.appspot.com",
  messagingSenderId: "729911020614",
  appId: "1:729911020614:web:bae5b023ebe6fe7de70e47",
  measurementId: "G-PLVK7GFRYT"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;