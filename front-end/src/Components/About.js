import React from "react";
import "../Components/About.css"
import { Link } from "react-router-dom";



function About() {
  return (
    <div className="About">
    <h1>7 Chakras</h1>
    <p>Refers to the energy points in your body, that affect our emotional and physical well being. Blocked or unbalanced chakras can lead to a wide range of symptoms including physical pain, emotional distress and spiritual disconnection. Blockage occurs due to stress, negative emotions and unhealthy lifestyle. Each Chakra affect different parts of our body physically and emotionally</p>
    <div className="About--splitLeft">
    <div className="About--info">
    <h4>Root Chakra</h4>
    <p>Location: The base of spine</p>
    <p>Color: Red</p>
    <p>Affecting: Physical identity, stability and gounding</p>
    <h4>Sacral Chakra</h4>
    <p>Location: Below the bellybutton, above the pelvic bone</p>
    <p>Color: Orange</p>
    <p>Affecting: Sexuality, pleasure and creativity </p>
    <h4>Solar Plexus Chakra</h4>
    <p>Location: Upper abdomen, in the stomach area</p>
    <p>Color: Yellow</p>
    <p>Affecting: Self-esteem and confidence </p>
    <h4>Throat Chakra</h4>
    <p>Location: Throat</p>
    <p>Color: Blue</p>
    <p>Affecting: Communication </p>
    <h4>Third Eye Chakra</h4>
    <p>Location: Between the eyes, on the forehead</p>
    <p>Color: Indigo</p>
    <p>Affecting: Intuition and imagination </p>
    <h4>Crown Chakra</h4>
    <p>Location: Top of head</p>
    <p>Color: Violet or White</p>
    <p>Affecting: Awareness and intellegence </p>
    <div>
    <span>
      <img src="https://navuturesorts.com/wp-content/uploads/2019/05/Chakra-2.jpg" alt="Chakra"/>
    </span>
    </div>
    


    </div>
    </div>
    <div className="About--splitRight">
    <div className="About--benefits">
    <h2>Using this Crystal Healing app with your assigned crystal and regular meditation over time will balance your chakra's, improve your mood and raise vibrations</h2>
    {/* <img src="https://media.gettyimages.com/id/1364024356/photo/44-year-old-plus-size-black-woman-meditating.jpg?s=1024x1024&w=gi&k=20&c=TJS_NKbN20qFaAfvL0iyANXQv040ajQu1_mfzsYK8Kw=" alt="Meditation"/> */}
    <h3>Learn the healing properties of Natural Crystals to;</h3>
    <ul>
      <li>Harness their energy</li>
      <li>Unblock and balance chakras</li>
      <li>Promoting health and vitatity</li>
    </ul>
    </div>
    <div className="About--button">
    <Link to='/'>
    <button>BACK</button>
    </Link>
    </div>
    </div>
    

  </div>
  )

  
 
}

export default About;
