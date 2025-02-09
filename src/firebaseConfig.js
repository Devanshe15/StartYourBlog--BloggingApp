import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAyscJOi7eoGJFam1BavUjzzZ78Jcz0l-U",
    authDomain: "startyourblog-e1acc.firebaseapp.com",
    projectId: "startyourblog-e1acc",
    storageBucket: "startyourblog-e1acc.firebasestorage.app",
    messagingSenderId: "746322522178",
    appId: "1:746322522178:web:25187a552bba942ae2bddb",
    measurementId: "G-D4F0NPMBC4"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
