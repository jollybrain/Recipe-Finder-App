import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-primary text-center mb-6">Recipe Finder</h1>
      <SearchBar setRecipes={setRecipes} />
      <RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipe} />
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
    </div>
  );
}

export default App;
