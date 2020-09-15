import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config ={
    apiKey: "AIzaSyCsAgrUQBw7DU9V3h40WC3ymsd0jmZMDqI",
    authDomain: "shopmart-75949.firebaseapp.com",
    databaseURL: "https://shopmart-75949.firebaseio.com",
    projectId: "shopmart-75949",
    storageBucket: "shopmart-75949.appspot.com",
    messagingSenderId: "1041856120323",
    appId: "1:1041856120323:web:b8923c0d3cc5ca7a6a3036",
    measurementId: "G-NVVM412LB7"
  };

  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  