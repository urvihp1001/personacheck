import firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNHbKO8HLtkhUXHln15oYl--7Z0AJkSo8",
  authDomain: "awpproj-299a1.firebaseapp.com",
  projectId: "awpproj-299a1",
  storageBucket: "awpproj-299a1.appspot.com",
  messagingSenderId: "131141508196",
  appId: "1:131141508196:web:088a2eb2dbca82f6751371"
};

// Initialize Firebase
let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}
export default Firebase;