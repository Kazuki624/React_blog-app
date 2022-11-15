import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnI7y4a6zKy_-6MH8r2Q5Wh80k3Epjccc",
  authDomain: "react-blog-1801a.firebaseapp.com",
  projectId: "react-blog-1801a",
  storageBucket: "react-blog-1801a.appspot.com",
  messagingSenderId: "686095799237",
  appId: "1:686095799237:web:3ef3b178ea6f14cabbf1ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db}