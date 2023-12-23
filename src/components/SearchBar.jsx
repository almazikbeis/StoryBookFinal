
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Логика поиска
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
