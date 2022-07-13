import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// get Auth to get the auth Functionality,
// signInWithPopup to avail Popup sigin functionality
// GoogleAuthProvider to initaite google AUth provider

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// getFirestore
// doc
// getDoc
// setDoc

// const firebaseConfig to be copied from firebase console
const firebaseConfig = {
  apiKey: "AIzaSyB16bU1jGTkwlpBS7VTaQQdv_qO_5JtGhQ",
  authDomain: "shopsure-db.firebaseapp.com",
  projectId: "shopsure-db",
  storageBucket: "shopsure-db.appspot.com",
  messagingSenderId: "635135859719",
  appId: "1:635135859719:web:6645c5106c3895adb6dea2",
};

// Initialize Firebase- this will initialize the app with the above mentioned values
const firebaseApp = initializeApp(firebaseConfig);

// We initialize a instance of GoogleAuthProvider Class provided by firebase for every auth method we intend to use
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// in order to use the firestore(firebase data storage services) we need the following steps
// export default firebaseApp;
export const db = getFirestore();

// create the function
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) {
    return;
  }
  // create a link to the document so that we can check whether the path is present or not
  // here we call the it userDocRef and checks with the doc if we need to do it with file we will have to make a collection ref request
  const userDocRef = doc(db, "users", userAuth.uid);

  // we can check the data inside a document or collection using getDoc meathod of firestore
  // here we store the instant data in a const named userSnapshot
  // we will use this userSnapshot later to check whether the data is already present or not
  const userSnapshot = await getDoc(userDocRef);

  // if user Data doesn't Exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  // if the instance of userData Exists
  return userDocRef;
};

// signUp or create user with Email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signinAuthWithEP = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangeListner = async (callback) => {
  await onAuthStateChanged(auth, callback);
};
