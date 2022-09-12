import firebase from 'firebase';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIgpWFLxG6YxMZxqvg4qOGjtPNMAf2SKo",
    authDomain: "todo-list-section-b-a55e7.firebaseapp.com",
    projectId: "todo-list-section-b-a55e7",
    storageBucket: "todo-list-section-b-a55e7.appspot.com",
    messagingSenderId: "8071395624",
    appId: "1:8071395624:web:bf43bc4bd85d890c4cf81d",
    measurementId: "G-MK7FX4R8TC"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;