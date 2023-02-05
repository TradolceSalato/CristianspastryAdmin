import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwhsufYxJBzSmozBNrlfiF-Brf6vLKIDg",
  authDomain: "cristianspastry-admin.firebaseapp.com",
  projectId: "cristianspastry-admin",
  storageBucket: "cristianspastry-admin.appspot.com",
  messagingSenderId: "746682162194",
  appId: "1:746682162194:web:491a7cb00c986accfe8ccb",
  measurementId: "G-KV8CZR7TE1",
  databaseURL: "https://cristianspastry-admin-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const Auth = getAuth(app);
const Db = getFirestore(app);
export {
  Auth,
  Db,
}