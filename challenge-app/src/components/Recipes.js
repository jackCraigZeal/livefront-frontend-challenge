// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import './Recipes.css';

function Recipes(){

//  CODE BLOCK
//  For api calls, commented out so that we don't overuse the api calls allowed. 
// ```

//  const [recipes, setRecipes] = useState([]);
//  const [loading, setLoading] = useState(true);
//  const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY&maxReadyTime=20&sort=random&number=5&type=main%20dish');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setRecipes(data.results);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecipes();
//   }, []);



//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
// ```

  const [recipes, setRecipes] = useState([{"id":1697541,"title":"Pasta With Feta Cheese And Asparagus","image":"https://img.spoonacular.com/recipes/1697541-312x231.jpg","imageType":"jpg"},{"id":1095886,"title":"Simple Parmesan Chili Pasta","image":"https://img.spoonacular.com/recipes/1095886-312x231.jpg","imageType":"jpg"},{"id":1165787,"title":"Instant Pot Chili Mac","image":"https://img.spoonacular.com/recipes/1165787-312x231.jpg","imageType":"jpg"},{"id":1050444,"title":"How to Make the Perfect Instant Pot Chicken","image":"https://img.spoonacular.com/recipes/1050444-312x231.jpg","imageType":"jpg"},{"id":1063645,"title":"The Secret to Easy Skillet Filet Mignon Steak Tacos","image":"https://img.spoonacular.com/recipes/1063645-312x231.jpg","imageType":"jpg"}]);
  
  return (
    <div className="RecipeContainer">
      {recipes.map(recipe => (
        <div className="RecipeCard">
            <span>{recipe.title}</span>
            <button></button>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
