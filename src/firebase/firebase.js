import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp33hQWHG76Hfd9nDBPr3qkbleCq1kBwI",
  authDomain: "cnc2023-fd62f.firebaseapp.com",
  projectId: "cnc2023-fd62f",
  storageBucket: "cnc2023-fd62f.appspot.com",
  messagingSenderId: "374290859804",
  appId: "1:374290859804:web:3e61d0629f31f09ce11cd9",
  measurementId: "G-JHHQWCT4XY"
};

export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const firebaseDB = getFirestore(firebaseApp);

