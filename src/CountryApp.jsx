import { useState, useEffect } from "react";

function CountrySearch() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    setError(null);
    setCountry(null);

    fetch(`https://restcountries.com/v3.1/name/${query}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Country not found");
        }
        return res.json();
      })
      .then((data) => {
        setCountry(data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div>
      <h2>Country Search</h2>

      <input
        type="text"
        placeholder="Enter country name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {country && (
        <div>
          <h3>{country.name.common}</h3>
          <p>Capital: {country.capital?.[0]}</p>
          <p>Region: {country.region}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <img src={country.flags.png} alt="flag" width="120" />
        </div>
      )}
    </div>
  );
}

export default CountrySearch;
