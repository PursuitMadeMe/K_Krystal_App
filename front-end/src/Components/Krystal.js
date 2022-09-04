import { Link } from "react-router-dom";

function Krystal({ krystal }) {
  // console.log(`Line 3: ${snack.image}`);
  return (
    <div className="krystals">
      <Link to={`/krystals/${krystal.id}`}>Show details...
        <>
          <img src={krystal.image} alt={krystal.name}></img>
          <p>{krystal.name}</p>
        </>
      </Link>
    </div>
  );
}

export default Krystal;
