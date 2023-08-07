// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq_GLKSrja1SuB5F5AW6SGAk-V6zICW4c",
  authDomain: "newecommerce-6dbc8.firebaseapp.com",
  projectId: "newecommerce-6dbc8",
  storageBucket: "newecommerce-6dbc8.appspot.com",
  messagingSenderId: "245701803662",
  appId: "1:245701803662:web:476827f1ca05eb0061d3df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);