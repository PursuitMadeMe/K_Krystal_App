import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";
import '../Components/KrystalEditForm.css'


const API = process.env.REACT_APP_API_URL;

// EDIT ROUTE
function KrystalEditForm() {
  const navigate = useNavigate();
  let { index } = useParams();
  console.log(index, "PPPPPPPPP");

  const [krystal, setKrystal] = useState({
    name: "",
    healing: "",
    url: "",
    numerology: 0,
    chakra: "",
    category: "",
    is_favorite: false,
  });

  useEffect(() => {
    axios
      .get(`${API}/krystals/${index}`)
      .then((res) => setKrystal(res.data))
      .catch((error) => console.error(error));
  }, [index, navigate]);

  const updateKrystal = () => {
    axios
      .put(`${API}/krystals/${index}`, krystal)
      .then((res) => {
        console.log("EDIT");
        setKrystal(res.data);
        console.log("Edit page: ", krystal);
        console.log("Edit page res data: ", res.data);
        navigate(`/krystals/${index}`);
      })
      .catch((error) => console.error(error));
  };

  const handleTextChange = (event) => {
    setKrystal({ ...krystal, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setKrystal({
      ...krystal,
      [event.target.id]: Number(event.target.value),
    });
  };

  const handleUrlChange = (e) => {
    setKrystal({ ...krystal, [e.target.id]: e.target.value });
  };

  const handleCheckBox = () => {
    setKrystal({ ...krystal, is_favorite: !krystal.is_favorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateKrystal();
  };

  return (
    <div className="edit">
        <form onSubmit={handleSubmit}>
      <h2>Edit Krystal</h2>
      <fieldset>
      <label htmlFor="name">Krystal Name</label>
          <input
            id="name"
            value={krystal.name}
            type="text"
            placeholder="Name"
            onChange={handleTextChange}
          />
          <label htmlFor="healing">Healing Property</label>
          <input
            id="healing"
            value={krystal.healing}
            type="text"
            placeholder="Healing"
            onChange={handleTextChange}
          />
          <label htmlFor="chakra">Chakra</label>
          <input
            id="chakra"
            value={krystal.chakra}
            type="text"
            placeholder="Chakra"
            onChange={handleTextChange}
          />
          <label htmlFor="numerology">Numerology</label>
          <input
            id="numerology"
            value={krystal.numerology}
            type="number"
            placeholder="Numerology"
            onChange={handleNumberChange}
          />
          <label htmlFor="category">Category</label>
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
          <label for="is_favorite">Favorite:</label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckBox}
            checked={krystal.is_favorite}
          />
          <br />
          <br />
          <br />

          <input value={"Sumbit"} type="submit" />
          <br></br>
          <br></br>
          <br></br>

          <Link to={`/krystals/${index}`}>
            <button>BACK</button>
            <br></br>
          </Link>
          <br></br>
      </fieldset>
        </form>
    </div>
  );
}

export default KrystalEditForm;
