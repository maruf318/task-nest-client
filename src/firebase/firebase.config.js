// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrlGiqnFvlN6Z88t8uZVhxtojFwVNz5zQ",
  authDomain: "task-nest-8e589.firebaseapp.com",
  projectId: "task-nest-8e589",
  storageBucket: "task-nest-8e589.appspot.com",
  messagingSenderId: "1030124268548",
  appId: "1:1030124268548:web:9f7eb904bf167c6332d951",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
