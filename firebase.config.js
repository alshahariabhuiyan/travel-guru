// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoFMDkL1iQGBvFXhqrrNQ8tuNEffWGO2Q",
  authDomain: "travel-guru-cb674.firebaseapp.com",
  projectId: "travel-guru-cb674",
  storageBucket: "travel-guru-cb674.appspot.com",
  messagingSenderId: "577098651743",
  appId: "1:577098651743:web:b42181e2c840d5013363ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app