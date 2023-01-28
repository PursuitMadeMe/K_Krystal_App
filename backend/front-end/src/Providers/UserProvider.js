//  this PROVIDER will be responsible for reutrning the - to connect to to our Create-React-App
//  functionality of our  FIREBASE SERVICE. 


// bring in our imports
import React, { useEffect, useState, createContext } from "react"
//notice here we are refrenceing the service we set up earlier
import { auth } from "../Services/Firebase";


// Next, we need to create a context that our components can consume. Let's initialize it with null
export const UserContext = createContext(null);


// Create UserProvider component that will handle UserContext state.

// Render our UserContext.Provider inside of our UserProvider

// Import our auth instance from services/firebase.js, listen for changes, and update state accordingly

// Render our new UserContext.Provider component
export const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { email, displayName, photoURL, uid } = user;
        setUser({ email, displayName, photoURL, uid });
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={user}>
      <div>{props.children}</div>
    </UserContext.Provider>
  );
};