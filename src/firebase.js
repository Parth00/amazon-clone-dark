import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBDMiUaFfPB4y8q9DF4XYZYXsh3dfg6c-E",
    authDomain: "clone-c18a0.firebaseapp.com",
    databaseURL: "https://clone-c18a0.firebaseio.com",
    projectId: "clone-c18a0",
    storageBucket: "clone-c18a0.appspot.com",
    messagingSenderId: "1054108466827",
    appId: "1:1054108466827:web:4cd47700ccbe192eee1e8e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
