import { useState, useEffect } from "react";
import Krystal from "../Components/Krystal";
import SearchBar from "../Components/SearchBar";
import "../Components/Krystals.css";

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Krystals() {
  const [krystals, setKrystals] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/krystals`)
      .then((res) => setKrystals(res.data))
      .catch((err) => console.error(err));
  }, []);

  let filteredKrystals = krystals;

  if (searchTerm) {
    filteredKrystals = krystals.filter((krystal) => {
      const healingProperty = `${krystal.chakra}`;

      const healingPropertyToLowerCase = healingProperty.toLowerCase();
      const searchTermToLowerCase = searchTerm.toLowerCase();

      return healingPropertyToLowerCase.includes(searchTermToLowerCase);
    });
  }

  return (
    
    <div className="Krystals">
    <div className="Krystals--header">
        <h1>Healing Crystals</h1>
        </div>
    <div className="Krystals--searchbar">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="Krystals--index">
      {filteredKrystals.map((krystal, index) => {
        return (
            <Krystal krystal={krystal} index={index} />
        );
      })}
      </div>
      {filteredKrystals.length === 0 && (
        <div className="Krystals--noResults">No Results Found</div>
      )}
    </div>
  );
}

export default Krystals;
