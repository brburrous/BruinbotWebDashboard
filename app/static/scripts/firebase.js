import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVSZZ6JWwBHEa6Ln1xTFscbw9mBHKQ27o",
    authDomain: "fair-myth-274206.firebaseapp.com",
    databaseURL: "https://fair-myth-274206.firebaseio.com",
    projectId: "fair-myth-274206",
    storageBucket: "fair-myth-274206.appspot.com",
    messagingSenderId: "279989064179",
    appId: "1:279989064179:web:e63b5367e635b5a6b0c286",
    measurementId: "G-X8Z33J05GZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}