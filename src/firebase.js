import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCHO5Hfc44A9T4tnd2aDzajM-60HOGukBg',
  authDomain: 'linkedin-clone-689de.firebaseapp.com',
  projectId: 'linkedin-clone-689de',
  storageBucket: 'linkedin-clone-689de.appspot.com',
  messagingSenderId: '1054798481862',
  appId: '1:1054798481862:web:3aec5f164a40a4112b0ac7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
