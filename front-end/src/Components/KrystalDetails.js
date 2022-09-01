
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

//Created the function SnackDetails

function KrystalDetails() {
  //invoking useState and setting the variable snack to an object and setSnack which updates the component
  const [krystal, setKrystal] = useState({});
  //creates a variable, destructors index from the URL parameter by invoking useParams()
  const { index } = useParams();
  //created the variable navigate and setting it equal to the invoked UseNavigate()
  const navigate = useNavigate();
  //create the variable API setting it equal to process.env.REACT_APP_API_URL
  const API = process.env.REACT_APP_API_URL;

  //useEffect is invoked and within the it we have 2 parameters our axios that fetches our API and array of dependencies
  //then we are updating the variable using setSnack SETTING it equal to res.data
  //adding a catch to notify when an error occurs
  useEffect(() => {
    axios
      .get(`${API}/krystals/${index}`)
      .then((res) => setKrystal(res.data))
      .catch((err) => console.error(err));
  }, [index, navigate, API]);

  //created a variable deleteSnack that calls axios and CRUD functionality Delete specifying what specifically should be deleted via the string within the parameter
  //then setting the response to navigate to route to krystals
  //catches if there is an error
  const deleteKrystal = () => {
    axios
      .delete(`${API}/krystals/${index}`)
      .then(() => navigate(`/krystals`))
      .catch((error) => console.error("catch", error));
  };
  const handleDelete = () => {
    deleteKrystal()
  }

  
  return (
    <div className="krystal-details">

      <div className="krytal-detail">

      <section className ='krystal-visual'>

      <h2 className='krystal'>{krystal.name} </h2>
      <img src={krystal.image} alt={krystal.name} />
      </section>
      <section className="krystal-info">

      </section>
      </div>
<br/>
      <Link to={`/krystals`}>
        <button className="back-button">Back</button>
      </Link>
      <Link to={`/krystals/${index}/edit`}>
        <button className="edit-button">Edit</button>
      </Link>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
      
    </div>
  );
}

export default KrystalDetails;