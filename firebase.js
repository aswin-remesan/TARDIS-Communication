import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDAON0vSnaYL6SE6SOcx6hW_2--mg4hjeg",
  authDomain: "whatsapp-2-242ee.firebaseapp.com",
  projectId: "whatsapp-2-242ee",
  storageBucket: "whatsapp-2-242ee.appspot.com",
  messagingSenderId: "524807876312",
  appId: "1:524807876312:web:990bdebb7e51fbcd78b1ad"
};

  const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();


    const db = app.firestore();
    const auth = app.auth();
    const provider = new firebase.auth.GoogleAuthProvider();



    export { db, auth, provider };