import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, logOut } from "../Services/Firebase";
import { Link } from "react-router-dom";
import "../Components/Login.css"
// import Home from "../Pages/Home";




export const Login = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/loggedIn");
    }
  }, [user, navigate]);

  return (
    <div className="Login">
    
        <div className="Login--splitLeft">
          
        <div className="Login--healingCenter">
        <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ggzQzvB7a4b1IeHx59YOpULxhqcouo9asRI72FR0bJQgPBxBFAHcyM_PpsYOvHefxOM&usqp=CAU"alt="lotus picture" />
        <h3>Kenyetta's Crystal Healing Center</h3>
        <div className="Login--healingInfo">
        <h1>Your health and healing is our top priority</h1>
        <Link to='/about'>
        <button>What We Do</button>
        </Link>
        <div>
        <button className="Login--signin" onClick={signInWithGoogle}>Sign in with Google</button>
          <br/>
          <button className="Login--signout" onClick={logOut}> Sign Out</button>
          </div>
        </div>
        </div>
        
        </div>

        <div className="Login--splitRight">
        <div className="Login--image">
        <img src="https://images.squarespace-cdn.com/content/v1/594aee74c534a5baa7eb3e5d/1518560109041-PI71OWF82S55VVP5ZVSZ/IMG_1584+two_63.jpg" alt="Male Crystal Massage"/>
        <h4>We make sure your specific healing needs are addressed</h4>
        </div>
        </div>
        <br/>
        {/* <Home /> */}
      
    </div>
  );
};
