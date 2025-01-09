import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ setRecipes }) {
  const [query, setQuery] = useState('');

  const searchRecipes = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setRecipes(response.data.meals || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setRecipes([]);
    }
  };

  return (
    <div className="flex justify-center mb-4 w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a recipe..."
        className="border p-2 w-full rounded-l-md focus:outline-none"
      />
      <button
        onClick={searchRecipes}
        className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-yellow-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;