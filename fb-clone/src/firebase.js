import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC-PnNM2gmR_sa61eCapvnRcnTtLlSHR-I",
  authDomain: "fb-clone-24f7f.firebaseapp.com",
  projectId: "fb-clone-24f7f",
  storageBucket: "fb-clone-24f7f.appspot.com",
  messagingSenderId: "196098826499",
  appId: "1:196098826499:web:b904edebd45c36b0934936",
  measurementId: "G-9WYYY8B0XT"
};
  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;