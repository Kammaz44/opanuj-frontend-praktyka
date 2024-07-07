import { useState } from 'react';
import CountryList from '../components/CountriesList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useCountriesSearch } from '../hooks/use-countries-search';

function CountriesSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const countries = useCountriesSearch(name);
  const [sortOption, setSortOption] = useState('');

  // const sortedCharacters = sortCharacters(characters, sortOption);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle />
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CountryList countries={countries} />
      <div className="pt-16" />
    </>
  );
}

export default CountriesSearchContainer;
