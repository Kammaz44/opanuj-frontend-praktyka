import { Country } from '../types/Country';
import { CountryCard } from './CountryCard';

function CountryList({ countries }: { countries: Country[] }) {
  if (countries.length === 0) {
    return <></>
  }

  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country, index) => (
        <li key={index} className="flex flex-col items-center">
          <CountryCard country={country} />
        </li>
      ))}
    </ol>
  );
}

export default CountryList;
