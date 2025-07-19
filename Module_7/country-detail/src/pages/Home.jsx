import useCountries from "../hooks/useCountries";
import CountryCard from "../components/CountryCard";
import Loading from '../components/Loading'

export default function Home() {
  const { countries, loading } = useCountries();

  if (loading) {
    return <Loading />
  } 

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {countries.map(country => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  )
}