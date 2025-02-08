import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBgqewb42aYRPq96IAGl0KVb8XaZJY3KuU",
    authDomain: "blog-app-c0b5d.firebaseapp.com",
    projectId: "blog-app-c0b5d",
    storageBucket: "blog-app-c0b5d.firebasestorage.app",
    messagingSenderId: "182388479135",
    appId: "1:182388479135:web:d30adf6874243fda64feaa",
    measurementId: "G-9TC3K5T402"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
