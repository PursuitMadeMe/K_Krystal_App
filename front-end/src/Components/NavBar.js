import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/krystals" className="link">
        <h1 className='orange'>KRYSTALS</h1>
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