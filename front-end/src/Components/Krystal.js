import { Link } from "react-router-dom";


// INDEX ROUTE
function Krystal({ krystal }) {

  return (
    <div className="krystals">
      <Link to={`/krystals/${krystal.id}`}>
        <>
          <img src={krystal.image} alt={krystal.name} className="index-img"></img>
          <h2>{krystal.name}</h2>
        </>
      </Link>

      <h5>You can purchace Healing Krystals at:</h5>
      <a href=" https://www.namaslaygoddess.com/?fbclid=IwAR1y9lP1dcKF2dXvLRyBiWCLt_dtiuZDQFKwDMht_Y0vke2UQXs0OCgjacI" >NamaslayGoddess</a>
    </div>
  );
}

export default Krystal;
