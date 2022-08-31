import React, { useState } from "react";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function KrystalNewForm() {

  const [krystal, setKrystal] = useState({
    
    name: "",
    healing: "",
    chakra: "",
    numerology: 0,
    category: "",
    is_favorite: false,
    url: "",
  });

  const navigate = useNavigate();

  const addKrystal = () => {
    axios
      .post(`${API}/krystals`, krystal)
      .then((res) => {
        navigate(`/krystals`);
      })
      .catch((error) => console.error(error));
  };

  const handleTextChange = (e) => {
    setKrystal({ ...krystal, [e.target.id]: e.target.value });
  };

  const handleNumberChange = (e) => {
    setKrystal({ ...krystal, [e.target.id]: Number(e.target.value) });
  };

  const handleUrlChange = (e) => {
    setKrystal({ ...krystal, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addKrystal();
  };

  return (
    <div className="new">
          <h2>New Krystal</h2>

      <br />
      <br />
      <br />
      <br />
      <section>
      </section>
      <br />
      <br />
      <fieldset>
        <form onSubmit={handleSubmit}>
          <br></br>
          <label>Krystal</label>
          <input
            id="name"
            value={krystal.name}
            type="text"
            placeholder="Name"
            onChange={handleTextChange}
          />

          <label>Healing</label>
          <input
            id="healing"
            value={krystal.healing}
            type="text"
            placeholder="Healing"
            onChange={handleTextChange}
          />

          <label>Chakra</label>
          <input
            id="chakra"
            value={krystal.chakra}
            type="text"
            placeholder="Chakra"
            onChange={handleTextChange}
          />

          <label>Numerology</label>
          <input
            id="numerology"
            value={krystal.numerology}
            type="number"
            placeholder="Numerology"
            onChange={handleNumberChange}
          />

          <label>Category</label>
          <input
            id="category"
            value={krystal.category}
            type="text"
            placeholder="Category"
            onChange={handleTextChange}
          />

          <label for="image">Enter an https:// URL:</label>
          <input
            type="url"
            name="url"
            id="image"
            src="url"
            placeholder="https://example.com"
            pattern="https://.*"
            size="30"
            onChange={handleUrlChange}
          />
          <br />
          <br />
          <br />

          <input value={"Sumbit"} type="submit" />
          <br />
          <br />
          <Link to={`/krystals`}>
            <button>BACK</button>
            <br></br>
          </Link>
          <br />
        </form>
      </fieldset>

      <br />
    </div>
  );
}

export default KrystalNewForm;
