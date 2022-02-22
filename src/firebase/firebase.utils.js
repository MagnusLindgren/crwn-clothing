import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDRNEs9fW3mj18YOLyqVDA-kXA9WHzwKm8",
    authDomain: "crwn-db-30a46.firebaseapp.com",
    projectId: "crwn-db-30a46",
    storageBucket: "crwn-db-30a46.appspot.com",
    messagingSenderId: "498067534993",
    appId: "1:498067534993:web:4fc43f5f970a5931873b30",
    measurementId: "G-0SJD1ZL0NE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;