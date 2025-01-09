import React from 'react';

function RecipeCard({ recipe, onSelectRecipe }) {
  return (
    <div
      className="bg-white shadow-md rounded-md p-4 cursor-pointer hover:shadow-lg"
      onClick={() => onSelectRecipe(recipe)}
    >
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded-md mb-2 w-full h-40 object-cover" />
      <h2 className="text-lg font-semibold text-gray-800">{recipe.strMeal}</h2>
      <p className="text-sm text-gray-600">{recipe.strCategory} - {recipe.strArea}</p>
    </div>
  );
}

export default RecipeCard;