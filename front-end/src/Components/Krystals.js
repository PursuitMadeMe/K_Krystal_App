import { useState, useEffect } from "react";
import Krystal from "../Components/Krystal";
import SearchBar from "../Components/SearchBar";
import '../Components/Krystals.css'


//importing axios
import axios from "axios";
// import SearchBar from "./searchBar";

//creating the variable API and setting it equal to process.env.REACT_APP_API_URL
const API = process.env.REACT_APP_API_URL;

function Krystals() {
  const [krystals, setKrystals] = useState([]);

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get(`${API}/krystals`)
      .then((res) => setKrystals(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(krystals);



  let filteredKrystals = krystals

  if(searchTerm) {
    filteredKrystals = krystals.filter(krystal => {
      const healingProperty = `${krystal.healing}`
      console.log(healingProperty)
      const healingPropertyToLowerCase = healingProperty.toLowerCase()
      const searchTermToLowerCase = searchTerm.toLowerCase()

      return healingPropertyToLowerCase.includes(searchTermToLowerCase)
    })
  }

  return (
      <div className="krystals-index">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        {filteredKrystals.map((krystal, index) => {
          return (
            <div>
            <Krystal krystal={krystal} index={index} />;
            </div>
          )
        })}
        {filteredKrystals.length === 0 && <div className="krystals__noResults">No Results Found</div>}
    </div>
  );
}

export default Krystals;
