import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function CountryDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(`https://restcountries.com/v3.1/name/${name}`)
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
  }, [name]);

  if (isLoading) return <p>Loading country details...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container">
      <button onClick={()=> navigate(-1)}>⬅ Back</button>  
      <h2>{country.name.common}</h2>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <img src={country.flags.png} alt="flag" width="150" />
    </div>
  );
}

export default CountryDetails;
