
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyDJ2ei16vfJSS7pKJsPjKHesO3Rz-Y7gQY",

  authDomain: "cap-stone-fb956.firebaseapp.com",

  projectId: "cap-stone-fb956",

  storageBucket: "cap-stone-fb956.appspot.com",

  messagingSenderId: "901117288155",

  appId: "1:901117288155:web:c1ed5cd7558de9c26af6fe"

};


// Initialize Firebase

  const app = initializeApp(firebaseConfig);
 
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();


  provider.setCustomParameters({
    prompt: 'select_account'
  });


  export const auth = getAuth();
  export const googleSignIn = () => signInWithPopup(auth, provider);
  
  
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {
     const userDocrefrence = doc(db, 'users', userAuth.uid);
     const userSnapshot = await getDoc(userDocrefrence)

     if(!userSnapshot.exists()){
         const {displayName, email } = userAuth
         const createdAt = new Date();

         try {
           await setDoc(userDocrefrence, {
            displayName,
            email,
            createdAt
           })
         } catch (error) {
             console.log('error while creating user', error.message)
         }

         return userDocrefrence
     }
  }


    
  