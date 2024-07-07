interface SearchTitleProps {
  name?: string;
}

const SearchTitle = ({ name = 'państw' }: SearchTitleProps) => {
  return <h1 className="text-2xl">Wyszukiwarka {name}</h1>;
};

export default SearchTitle;
