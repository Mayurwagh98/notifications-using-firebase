// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyADIygsPv1lynTybPZsE4kkIEdL39xTbok",
  authDomain: "fir-notifications-da65c.firebaseapp.com",
  projectId: "fir-notifications-da65c",
  storageBucket: "fir-notifications-da65c.appspot.com",
  messagingSenderId: "1038764281209",
  appId: "1:1038764281209:web:08e340b84675fe74a9b3a8",
  measurementId: "G-7Q81F9ZLRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)