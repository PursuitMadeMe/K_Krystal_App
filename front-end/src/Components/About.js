import React from "react";
import "./About.css"
import { Link } from "react-router-dom";



function About() {
  return (
    <div className="About">
    <h1>Chakra Alignment</h1>
    <div className="About--info">
    <span>
    <img src="https://i.etsystatic.com/22802984/r/il/d2e06b/5218392535/il_794xN.5218392535_70gh.jpg" alt="Chakra Meanings"/>
    <img src="https://media.gettyimages.com/id/1364024356/photo/44-year-old-plus-size-black-woman-meditating.jpg?s=1024x1024&w=gi&k=20&c=TJS_NKbN20qFaAfvL0iyANXQv040ajQu1_mfzsYK8Kw=" alt="Meditation"/>
    <h3>Learn the healing properties of Natural Crystals to;</h3>
    <ul>
      <li>Harness their energy</li>
      <li>Unblock and balance chakras</li>
      <li>Raise your vibrations</li>
      <li>Increase positive energy</li>
    </ul>
    </span>
    <Link to='/'></Link>
    <button>BACK</button>
    </div>

  </div>
  )

  
 
}

export default About;
