import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // For Realtime Database
import { getFirestore } from 'firebase/firestore'; // For Firestore

const firebaseConfig = {
    apiKey: "AIzaSyDu5qgWWynrbnflH9XSTM9iXH3MIZ23aWY",
    authDomain: "shared-timer-f145c.firebaseapp.com",
    projectId: "shared-timer-f145c",
    storageBucket: "shared-timer-f145c.appspot.com",
    messagingSenderId: "826992838259",
    appId: "1:826992838259:web:93b7846009ed587702cc06"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); 
export const firestore = getFirestore(app); 