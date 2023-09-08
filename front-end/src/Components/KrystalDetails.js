import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import '../Components/KrystalDetails.css'

import axios from "axios";

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

  return (
    <div className="KrystalDetils">
    <div className="KrystalDetails--splitLeft">
    <div className="KrystalDetails--instructions">

      <h1>Nuturing you back to health through natural, holistic ways</h1>
      <img src="https://cdn.shopify.com/s/files/1/1547/3947/files/pyrite-meditation-cover_10_1024x1024.jpg?v=1610053988" alt="crystal meditation"/>
      <h3>Meditate with listed healing crystal, in a quite place for 30 minutes a day</h3>
</div>
    </div>

      <div className="KrystalDetails--splitRight">
      <div className="KrystalDetails--information">
        <h3>
          {krystal.is_favorite ? <span>💎</span> : null} {krystal.name}
        </h3> 
        <h2 className="krystal">{krystal.name} </h2>
        <h3>Chakra : {krystal.chakra}</h3>
        <h3>Good for: {krystal.category}</h3>

        <img src={krystal.image} alt={krystal.name} />
        <br/>

        <h3>Healing Property : {krystal.healing}</h3>
      <Link to={`/krystals`}>
        <button className="KrystalDetails--backButton">Back</button>
      </Link>
      </div>
      </div>
     
    </div>
  );
}

export default KrystalDetails;
