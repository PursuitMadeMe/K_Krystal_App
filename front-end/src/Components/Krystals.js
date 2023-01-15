import { useState, useEffect } from "react";
import Krystal from "../Components/Krystal";
import '../Components/Krystals.css'


//importing axios
import axios from "axios";

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



  let filteredHealing = krystals

  if(searchTerm) {
    filteredHealing = krystals.filter(krystal => {
      const healingProperty = `${krystal.healing}`
      const healingPropertyToLowerCase = healingProperty.toLowerCase()
      const searchTermToLowerCase = searchTerm.toLowerCase()

      return healingPropertyToLowerCase.includes(searchTermToLowerCase)
    })
  }

  return (
    <div>
      <section className="krystals-index">
        {krystals.map((krystal, index) => {
          return <Krystal krystal={krystal} index={index} />;
        })}
      </section>
    </div>
  );
}

export default Krystals;
