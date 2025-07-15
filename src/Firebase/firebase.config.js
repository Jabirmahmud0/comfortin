import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQJWO8AlLq_qYNvFVQAoHVRX6t_LFjr-s",
  authDomain: "comfort-inn-auth-react.firebaseapp.com",
  projectId: "comfort-inn-auth-react",
  storageBucket: "comfort-inn-auth-react.appspot.com",
  messagingSenderId: "232726840024",
  appId: "1:232726840024:web:a246c6dbf78beab315cdad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;