// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, signInWithPopup, getAuth, signOut} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbpnclYnYe9mjTdbM5fcKT0F3Oq0kJslk",
  authDomain: "k-krystal-app.firebaseapp.com",
  projectId: "k-krystal-app",
  storageBucket: "k-krystal-app.appspot.com",
  messagingSenderId: "644004710941",
  appId: "1:644004710941:web:00bf6f7f375488ef4d54f4",
  measurementId: "G-SV1VJHM0HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// create an instance of authentication and set default language
export const auth = getAuth();
auth.useDeviceLanguage();

// create a provider for any authentication method we may be using. (facebook, twitter, email/password etc.). For this lesson we will use Google Oauth.
const googleProvider = new GoogleAuthProvider()


// Export functions that use the signInWithPopUp() method we get from firebase, passing in whatever provider we created and our getAuth() istance, auth.
export const signInWithGoogle = () => {
    try {
  //the signInWithPopUp() method accepts ANY provider we create. This is all our authentication logic
  signInWithPopup(auth, googleProvider).then((res) => {
        const user = res.user
        console.log(user)
    });
     } catch (err) {
      console.log(err);
    }
  };

//   Don't forget a sign out method!
  export const logOut = async () =>{
    try {
      await signOut(auth)
      alert("you've signed out - congrats.")
    } catch(err) {
      console.log(err)
    }
  }