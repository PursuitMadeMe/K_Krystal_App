import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate} from "react-router-dom";
import { logOut } from "../Services/Firebase";

// Lets make sure that LoggedInPage.js is ready to manage our authenticated user by invoking useEffect() to make sure we have a user object. If not - let's reroute our user back to the Login.js.

export const LoggedInPage = () => {
  const imgStyle = {
      width:'30vh',
      height:'30vh'
  }
  const navigate = useNavigate();
  const user = useContext(UserContext);
  
  useEffect(() => { 
    if(!user) {
        alert("Come Back Soon - Ase")
        navigate("/");
      }
    }, [user, navigate]);

  
  const handleLogout = async () => {
    logOut()
    alert("You've Logged Out")
  };
  if ( user ){
    return (
      <div>
        <h1> YOU ARE LOGGED IN </h1>
        <h1>Welcome {user.displayName} to Kim's Krystal Healing App</h1>
        <div>
          {/* <img src = {user.photoURL}
          style={imgStyle}
            className="user-image"
            alt="its the users head"
            ></img> */}
        </div>
        Email: {user.email}
        <br/>
        <br/>

        <button onClick={handleLogout}> LOG OUT</button>

      </div>
    );
  } else 
  return (
    <div> NOT LOGGED IN </div>
  )
}