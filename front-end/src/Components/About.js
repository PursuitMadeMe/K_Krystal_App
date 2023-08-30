import React from "react";
import '../Components/About.css'
import { Link } from "react-router-dom";



function About() {
  <div className="About">
    <h1>Chakra Alignment</h1>
    <div className="About--info">
    <span>
    <img src="https://i.etsystatic.com/22802984/r/il/d2e06b/5218392535/il_794xN.5218392535_70gh.jpg" alt="Chakra Meanings"/>
    <img src="https://mindbodygreen-res.cloudinary.com/image/upload/c_fill,w_2000,h_1200,g_auto,fl_lossy,f_jpg/org/twenty20_a84b2acd-253b-4a50-b014-1fb488ec2ffc.jpg" alt="Meditation"/>
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
 
}

export default About;
