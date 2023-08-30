import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate} from "react-router-dom";
import { logOut } from "../Services/Firebase";


export const LoggedInPage = () => {
  const imgStyle = {
      width:'30vh',
      height:'30vh'
  }
  const user = useContext(UserContext);
  const navigate = useNavigate();
  
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
      <div className="LoggedInPage">
        <div className="LoggedInPage--user">
        <h1> YOU ARE LOGGED IN </h1>
        <h2> {user.displayName}</h2>
        </div>
        
        <div className="LoggedInPage--healing center">
        <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ggzQzvB7a4b1IeHx59YOpULxhqcouo9asRI72FR0bJQgPBxBFAHcyM_PpsYOvHefxOM&usqp=CAU"alt="lotus picture" />
        <h3>Kenyetta's Crystal Healing Center</h3>
        <br/>
        <h1>Your health and healing is our top priority</h1>
        <img src="https://images.squarespace-cdn.com/content/v1/594aee74c534a5baa7eb3e5d/1518560109041-PI71OWF82S55VVP5ZVSZ/IMG_1584+two_63.jpg" alt="Male Crystal Massage"/>
        </div>
        
        <div className="LoggedInPage--controls"> 
        <br/>
        Email: {user.email}
        <br/>
        <Link to="/">
          <button>Home</button>
        </Link>
        <br/>
        <br/>
        <button onClick={handleLogout}> LOG OUT</button>
        </div>
      </div>
    );
  } else 
  return (
    <div> NOT LOGGED IN </div>
  )
}