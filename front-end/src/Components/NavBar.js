import { Link } from "react-router-dom";
import '../Components/Navbar.css'
function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
        <img src="https://t3.ftcdn.net/jpg/04/70/11/84/360_F_470118449_4wxwyI2EdWrPq8w6atC1QpjG2KY0nglu.jpg" alt="Krystal" className="logo" />
      </Link>

      <Link to="/krystals" className="link">
        <h1>Kenyetta's Crystal Healing Center</h1>
      </Link>

      <div>
        <Link to="/">
          <button className="home-button">HOME</button>
        </Link>

        <Link to="/about">
          <button className="about-button">ABOUT</button>
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;