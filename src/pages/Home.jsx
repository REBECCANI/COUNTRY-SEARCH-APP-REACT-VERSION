import { Link } from "react-router-dom";

function Home() {
  const countries = ["France", "Kenya", "Japan", "Brazil", "Canada"];

  return (
    <div className="container">
      <h2>Select a Country</h2>

      <ul className="country-list">
        {countries.map((country) => (
          <li key={country}>
            <Link to={`/country/${country}`}>
              {country}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
