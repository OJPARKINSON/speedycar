import firebase from "firebase";

var config = {
    apiKey: "AIzaSyCz_mF_wnajF44yiqr27fEJNCTZsGtTLGU",
    authDomain: "speedycars-cf405.firebaseapp.com",
    databaseURL: "https://speedycars-cf405.firebaseio.com",
    projectId: "speedycars-cf405",
    storageBucket: "",
    messagingSenderId: "41027832451",
    appId: "1:41027832451:web:eee826a55479d3dc"
};
// Initialize Firebase
const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;