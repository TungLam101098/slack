import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC_seotyRDytASw96ccSVaWgYdB9ek3DXk",
  authDomain: "slack-b5a56.firebaseapp.com",
  projectId: "slack-b5a56",
  storageBucket: "slack-b5a56.appspot.com",
  messagingSenderId: "975709573066",
  appId: "1:975709573066:web:d70e5aa94bfdfe84bd4933"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); 
}

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };