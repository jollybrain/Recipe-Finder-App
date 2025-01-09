import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, onSelectRecipe }) {
  if (recipes.length === 0) {
    return <p className="text-center text-gray-500">No recipes found. Try searching for something else!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} onSelectRecipe={onSelectRecipe} />
      ))}
    </div>
  );
}

export default RecipeList;