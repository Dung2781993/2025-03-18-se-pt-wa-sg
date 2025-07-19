
import { Link } from 'react-router-dom';

export default function CountryCard({ country }) {
  
  return (
    <Link to={`/country/${country.cca3}`}>
      <div className="border rounded shadow hover:shadow-lg transition p-4">
        <img src={country.flags.svg} alt={country.name.common} className="w-full h-40 object-cover mb-2" />
        <h2 className="font-bold text-lg">{country.name.common}</h2>
        <p>Region: {country.region}</p>
        <p>Population: {country.population.toLocaleString()}</p>
      </div>
    </Link>
  );
}