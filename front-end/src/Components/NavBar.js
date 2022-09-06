import { Link } from "react-router-dom";
import '../Components/NavBar.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="../Image2.jpeg" alt="Krystal" className="logo" />
      </Link>

      <Link to="/krystals" className="link">
        <h1 className="orange">HEALING KRYSTALS</h1>
      </Link>

      <div>
        <Link to="/">
          <button className="home-button">HOME</button>
        </Link>

        <Link to="/krystals/new">
          <button className="new-button">NEW KRYSTAL</button>
        </Link>
      </div>
    </nav>
  );
}
