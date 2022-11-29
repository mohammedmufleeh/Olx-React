import firebase from "firebase";
import 'firebase/firebase'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-AHQEWq2PCxDNsV6LHHfd67EfdFGKMqU",
    authDomain: "olx-clone-fdf50.firebaseapp.com",
    projectId: "olx-clone-fdf50",
    storageBucket: "olx-clone-fdf50.appspot.com",
    messagingSenderId: "847759467863",
    appId: "1:847759467863:web:ac9c8a26b478b8685d4a12",
    measurementId: "G-SM88H4BL12"
  };

  export default firebase.initializeApp(firebaseConfig)