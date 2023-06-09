// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAb9_fbfOQ_wv1FJG3oLLf2rztJLnt79eY",
//   authDomain: "resume-parser-a7584.firebaseapp.com",
//   projectId: "resume-parser-a7584",
//   storageBucket: "resume-parser-a7584.appspot.com",
//   messagingSenderId: "1094348788909",
//   appId: "1:1094348788909:web:b35c85d323bfd2b45c2224",
//   measurementId: "G-E9EXPSYX96"
// };

// // Initialize Firebase
// const storage =  getStorage(app);
// export default storage;

import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
