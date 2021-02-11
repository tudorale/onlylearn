
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-faOC0sV4MTys9LIqifkuUVN8uhzIl3s",
  authDomain: "only-learn-3ff6b.firebaseapp.com",
  projectId: "only-learn-3ff6b",
  storageBucket: "only-learn-3ff6b.appspot.com",
  messagingSenderId: "529855962443",
  appId: "1:529855962443:web:3518683de5ff184d9d1cce"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default fire;
