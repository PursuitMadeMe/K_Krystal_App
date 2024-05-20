import React from "react";
import "../Pages/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
        <h1>NAMASTE TO A BRAND NEW YOU.</h1>
        <h2>Learn the benefits of Chakra Healing and Meditation </h2>
        <img
          src="https://i.pinimg.com/736x/5b/54/11/5b5411c51629bb2480cfda08aa877bda.jpg"
          alt="Chakra Woman"
        />
        <h2>ARE YOU FEELING ?</h2>
          <ul> 
            <li>DEPRESSED</li>
            <li>ANXIOUS</li>
            <li>LONELY</li>
          </ul>
          <h2>YOUR CHAKRAS MAY BE OUT OF BALANCE...</h2>
          <Link to="/About"><button>About Chakras</button></Link>
          <h2>Take the Chakra Test and see what is Out of Balance</h2>
        <a href='https://www.eclecticenergies.com/chakras/chakratest'>CHAKRA TEST</a>
        <p>Take note of what chakras are blocked, then click Start Now to begin your Healing Journey</p>
        
        <Link to="/krystals">
        👉🏿<button>Start Now</button>
        </Link>

    </div>
  );
}

export default Home;
      {/* <img src="../Image3.webp" alt="Chakra-stones" width={500} height={500} /> */}
