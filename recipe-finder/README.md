Recipe Finder App
Project Overview
The Recipe Finder App is a web application designed to help users search for recipes based on dish names and explore detailed information about each recipe, including ingredients, preparation instructions, and related videos. It leverages TheMealDB API to fetch recipe data and showcases a responsive design built using React, Vite, Zustand (for state management), and Tailwind CSS (for minimalist styling).

Features
Search Recipes: Users can search for recipes by dish name.
Recipe List: Displays a list of recipes with a thumbnail, title, category, and cuisine.
Detailed View: Provides full ingredient lists, preparation instructions, embedded YouTube videos (if available), and links to the full recipe.
Responsive Design: Tailored to work seamlessly on desktops, tablets, and mobile devices.
Error Handling: Displays user-friendly messages when no results are found or if there's a network issue.
Tech Stack
Frontend Framework: React with Vite
Styling: Tailwind CSS
State Management: Zustand
HTTP Client: Axios
API: TheMealDB (https://www.themealdb.com/api.php)
Installation and Setup
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/recipe-finder.git
Navigate to the project directory:
bash
Copy code
cd recipe-finder
Install dependencies:
bash
Copy code
npm install
Run the development server:
bash
Copy code
npm run dev
Project Structure
css
Copy code
src/
├── components/
│   ├── SearchBar.jsx
│   ├── RecipeList.jsx
│   ├── RecipeCard.jsx
│   └── RecipeDetails.jsx
├── App.jsx
└── index.jsx
API Integration
Recipes are fetched from TheMealDB using the following endpoint:

Search by dish name: https://www.themealdb.com/api/json/v1/1/search.php?s=
How to Use
Enter a dish name in the search bar and click Search.
Browse the list of recipes matching your search query.
Click on a recipe card to view detailed information, including ingredients and preparation steps.
Watch the embedded YouTube video for preparation guidance (if available).
