import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// SHOW ROUTE
function KrystalDetails() {
  const [krystal, setKrystal] = useState({});
  const { index } = useParams();

  const navigate = useNavigate();

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/krystals/${index}`)
      .then((res) => setKrystal(res.data))
      .catch((err) => console.error(err));
  }, [index, navigate, API]);

  const deleteKrystal = () => {
    axios
      .delete(`${API}/krystals/${index}`)
      .then(() => navigate(`/krystals`))
      .catch((error) => console.error("catch", error));
  };
  const handleDelete = () => {
    deleteKrystal();
  };

  return (
    <div className="krystal-details">
      <section className="krystal-visual">
        <h3>
          {krystal.is_favorite ? <span>💎</span> : null} {krystal.name}
        </h3> 
        <h2 className="krystal">{krystal.name} </h2>
        <h3>Healing Property : {krystal.healing}</h3>
        <img src={krystal.image} alt={krystal.name} />
        <h3>Numerology : {krystal.numerology}</h3>
        <h3>Chakra : {krystal.chakra}</h3>
        <h3>Good for: {krystal.category}</h3>
      </section>

      <br />
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
