
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBBNPnYZcBYANnV0fNq8Fn7LDzPsgeWaYM",
  authDomain: "eshop-111e3.firebaseapp.com",
  projectId: "eshop-111e3",
  storageBucket: "eshop-111e3.appspot.com",
  messagingSenderId: "879165484220",
  appId: "1:879165484220:web:6f5987027bfa2cec3c34b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;