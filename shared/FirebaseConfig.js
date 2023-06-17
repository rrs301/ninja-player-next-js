// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASe_API,
  authDomain: "tubeguruji-app.firebaseapp.com",
  projectId: "tubeguruji-app",
  storageBucket: "tubeguruji-app.appspot.com",
  messagingSenderId: "887202519021",
  appId: "1:887202519021:web:ff749f4e57cc4d71f979e4",
  measurementId: "G-VWXME24XJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);