import {getFirestore} from 'firebase/firestore'
 import { initializeApp } from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyC1HFwjM7_P1_8Ra3a8iLcRResiDr7e7eE",
    authDomain: "crud-79950.firebaseapp.com",
    projectId: "crud-79950",
    storageBucket: "crud-79950.appspot.com",
    messagingSenderId: "803806084568",
    appId: "1:803806084568:web:39e4a5801483a43b6986ad"
  };


const app = initializeApp(firebaseConfig)

const db= getFirestore(app)
export {db}



