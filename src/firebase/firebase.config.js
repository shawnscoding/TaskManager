import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyDo3l-YJZuAegOeuIUNlydsKQsqS3sp_o8",
  authDomain: "my-motivator-db.firebaseapp.com",
  databaseURL: "https://my-motivator-db.firebaseio.com",
  projectId: "my-motivator-db",
  storageBucket: "my-motivator-db.appspot.com",
  messagingSenderId: "1098726258426",
  appId: "1:1098726258426:web:0ecd440b2abd62b96e3b43",
  measurementId: "G-JD5HNFL0DP"
};
// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
