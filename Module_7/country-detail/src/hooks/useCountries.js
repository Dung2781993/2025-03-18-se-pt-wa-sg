import { useEffect, useState } from "react";

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,region,population,cca3"
    )
      .then((res) => res.json())
      .then(setCountries)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return {countries, loading}
}
