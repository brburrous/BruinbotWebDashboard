import { initializeApp } from 'firebase/app';
// import { getFirestore, getDocs } from 'firebase/firestore/lite';
import { addMessage, Terminal } from './script';
import { collection, query, where, onSnapshot, getFirestore, getDocs } from "firebase/firestore";

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
    const citiesCol = collection(db, 'logs');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

async function printCities(db, Terminal) {
    const cityList = await getCities(db)
    let message = cityList[0].message
    console.log(message)
    addMessage(Terminal, message)
}

printCities(db, Terminal)

const q = query(collection(db, "logs"), where("useful", "==", true));
const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            console.log("New city: ", change.doc.data().message);
            addMessage(Terminal, change.doc.data().message)
        }
        if (change.type === "modified") {
            console.log("Modified city: ", change.doc.data());
        }
        if (change.type === "removed") {
            console.log("Removed city: ", change.doc.data());
        }
    });
});


document.addEventListener('keydown', moveDir)
document.addEventListener('keyup', stopDir)

function moveDir(e) {
    if (e.code in dirList) {
        sendMove(dirList[e.code], "TRUE")
        console.log(dirList[e.code])
    }
}
function stopDir(e) {
    if (e.code in dirList) {
        sendMove(dirList[e.code], "FALSE")
        console.log(dirList[e.code])
    }
}


function sendMove(direction, move) {
    let postBody = {
        "direction": direction,
        "move": move
    }
    console.log(postBody)
    // $.post("http://127.0.0.1:4000/move", { direction: "right", move: "TRUE" }, function (data) {
    //     console.log(data)
    // })
    $.ajax({
        url: "http://127.0.0.1:4000/move",
        type: "POST",
        data: JSON.stringify(postBody),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        async: false,
        success: function (msg) {
            console.log(msg);
        }
    })
}

const dirList = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right"
}