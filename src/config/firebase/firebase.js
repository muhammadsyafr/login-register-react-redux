import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAQm7onXjRfVh019nKpJu__lz2tqRXYrKc",
    authDomain: "study-sprl.firebaseapp.com",
    databaseURL: "https://study-sprl.firebaseio.com",
    projectId: "study-sprl",
    storageBucket: "study-sprl.appspot.com",
    messagingSenderId: "580742823122",
    appId: "1:580742823122:web:5a91f142c787044376c10b",
    measurementId: "G-3N75XLVFFZ"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export {
  storage, firebase as default
}