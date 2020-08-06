import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDUBFfwILyLcJ8q2AnKQqa65vklsdYrvhA",
  authDomain: "firegram-73ef3.firebaseapp.com",
  databaseURL: "https://firegram-73ef3.firebaseio.com",
  projectId: "firegram-73ef3",
  storageBucket: "firegram-73ef3.appspot.com",
  messagingSenderId: "245405088243",
  appId: "1:245405088243:web:32d2d3a8ac5aa76629ba86",
  measurementId: "G-7N78EG4QST",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
