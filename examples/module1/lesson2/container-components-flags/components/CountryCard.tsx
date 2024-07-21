import { Country } from '../types/Country';

interface CountryCardProps {
  country: Country;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <>
      <h3>{country.name?.common}</h3>
      <p className='mb-4'>({country.name?.official})</p>
      <img src={country.flags.png} alt={country.name?.common} />
    </>
  );
};
