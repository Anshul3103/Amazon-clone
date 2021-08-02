import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEBlni_e1u8kC0UDScB0lIJj9Fa-bri_M",
  authDomain: "clone-8c88e.firebaseapp.com",
  projectId: "clone-8c88e",
  storageBucket: "clone-8c88e.appspot.com",
  messagingSenderId: "712528327324",
  appId: "1:712528327324:web:ce09eed4e5378c5ae83359",
  measurementId: "G-3PNT55QM1K"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};