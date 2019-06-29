import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCz_mF_wnajF44yiqr27fEJNCTZsGtTLGU",
  authDomain: "speedycars-cf405.firebaseapp.com",
  databaseURL: "https://speedycars-cf405.firebaseio.com",
  projectId: "speedycars-cf405",
  storageBucket: "speedycars-cf405.appspot.com",
  messagingSenderId: "41027832451",
  appId: "1:41027832451:web:eee826a55479d3dc"
});

export default app;