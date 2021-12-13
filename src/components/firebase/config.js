import 'firebase/firestore';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBd-kFg461bQhACKSuAW31Fe8tdMKifMmY',
  authDomain: 'mybank-d714b.firebaseapp.com',
  projectId: 'mybank-d714b',
  storageBucket: 'mybank-d714b.appspot.com',
  messagingSenderId: '260522596686',
  appId: '1:260522596686:web:c0d7c4174c5f5b728fa61f',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectAuth, projectFirestore };