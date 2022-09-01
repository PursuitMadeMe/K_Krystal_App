//we are detructoring useState and useEffect, importing from react
import { useState, useEffect } from "react";
//importing snacks.js and calling it Snack
import Krystal from "../Components/Krystal";

//importing axios
import axios from "axios";

//creating the variable API and setting it equal to process.env.REACT_APP_API_URL
const API = process.env.REACT_APP_API_URL;

//creating the function Snacks
function Krystals() {
  //invoking useState and setting the variable snack to an object and setSnack which updates the component
  const [krystals, setKrystals] = useState([]);

  const healingProperties = [
    {
      label: 'Anxiety',
      value: 'anxiety',
  
    },
    {
      label: 'Motivation',
      value: 'motivation',
  
    },
    {
      label: 'Study',
      value: 'study',
  
    },
    {
      label: 'Love',
      value: 'love',
  
    },
    {
      label: 'Stress',
      value: 'stress',
  
    },
    {
      label: 'Happiness',
      value: 'happiness',
  
    },
    {
      label: 'Prosperity',
      value: 'prosperity',
  
    },
    {
      label: 'Manifestation',
      value: 'manifestation',
  
    }
  ]

  const [healing, setHealing] = useState("Select a Healing Property");

  const handleChange = (e) => {
    e.preventDefault();
    setHealing(e.target.value)
  };


  //useEffect is invoked and within the it we have 2 parameters our axios that fetches our API and array of dependencies
  //then we are updating the variable using setSnack SETTING it equal to res.data
  //adding a catch to notify when an error occurs

  useEffect(() => {
    axios
      .get(`${API}/krystals`)
      .then((res) => setKrystals(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(krystals);



  return (
    <div>
      <section className='krystals-index'>
      <br/>
      <select onChange={handleChange}>
      <br/>
      <br/>

        <option value="Select A Healing Property"> -- Select A Healing Property </option>
        {healingProperties.map((prop) => <option value={prop.value}>{prop.label}</option>)}
        </select>
        

        {krystals.map((krystal, index) => {
          return <Krystal krystal={krystal} index={index} />;
        })}
      </section>
    </div>
  );
}

export default Krystals;
