import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, logOut } from "../Services/Firebase";
import Home from "../Pages/Home";
import "../Components/Login.css"


// Lets save the state of our UserContext and create a useEffect() to listen for changes and connect our functions to our buttons.

export const Login = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/loggedIn");
    }
  }, [user, navigate]);

  return (
    <div>
      <section>
        <div>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
          <br/>

          <button onClick={logOut}> Sign Out</button>
        </div>
        <br/>
        <Home />
      </section>
    </div>
  );
};
