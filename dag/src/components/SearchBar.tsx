import { useRouter } from 'next/router';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa'
const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {

      router.push(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-5xl">
      <input
        type="text"
        className="bg-gray-400 text-white placeholder-white border border-white pl-11 rounded-full py-3 pr-4 w-full focus:border-white-500 opacity-70"
        placeholder="Search for datasets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
        
        <i className="text-gray-400 optacity-40 text-xl"><FaSearch/></i>
      </span>
    </form>
  );
};

export default SearchBar;
