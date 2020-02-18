import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB7SVV2qhjZXFyLwyG1bG-Iypyhk1HRnIM",
    authDomain: "crwn-db-39798.firebaseapp.com",
    databaseURL: "https://crwn-db-39798.firebaseio.com",
    projectId: "crwn-db-39798",
    storageBucket: "crwn-db-39798.appspot.com",
    messagingSenderId: "330183191611",
    appId: "1:330183191611:web:75ce6e64d6457b3b65001e"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;