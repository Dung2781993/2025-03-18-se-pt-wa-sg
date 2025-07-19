import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/Loading'

export default function CountryDetail() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    )
      .then((res) => res.json())
      .then(data => setCountry(data[0]))
      .catch((err) => console.error(err))
  }, [code]);

  if (!country) {
    return <Loading />
  }

  return (
    <>
      <div className="p-6 max-w-2xl mx-auto">
        <Link to="/" className="text-blue-600 underline mb-4 inline-block">← Back</Link>
        <h1 className="text-3xl font-bold mb-2">{country?.name?.common}</h1>
        <img src={country?.flags?.svg} alt={country?.name?.common} className="w-full h-60 object-cover rounded mb-4" />
        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Subregion:</strong> {country.subregion}</p>
        <p><strong>Population:</strong> {country.population}</p>
      </div>
    </>
  )
}