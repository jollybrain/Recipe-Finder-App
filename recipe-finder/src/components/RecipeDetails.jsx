import React from 'react';

function RecipeDetails({ recipe, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded-md mb-4 w-full" />
        <p className="mb-2 font-semibold">Ingredients:</p>
        <ul className="list-disc list-inside mb-4">
          {Array.from({ length: 20 }, (_, i) =>
            recipe[`strIngredient${i + 1}`] ? (
              <li key={i}>{recipe[`strIngredient${i + 1}`]} - {recipe[`strMeasure${i + 1}`]}</li>
            ) : null
          )}
        </ul>
        <p className="mb-2 font-semibold">Instructions:</p>
        <p className="mb-4">{recipe.strInstructions}</p>
        {recipe.strYoutube && (
          <iframe
            width="100%"
            height="315"
            src={recipe.strYoutube.replace('watch?v=', 'embed/')}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default RecipeDetails;