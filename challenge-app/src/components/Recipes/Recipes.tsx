// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './Recipes.css';

const Recipes: React.FC = () => {

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

  const recipeCount: number = 1;
  const [recipes, setRecipes] = useState([{"id":1697541,"title":"Pasta With Feta Cheese And Asparagus","image":"https://img.spoonacular.com/recipes/1697541-312x231.jpg","imageType":"jpg"},{"id":1095886,"title":"Simple Parmesan Chili Pasta","image":"https://img.spoonacular.com/recipes/1095886-312x231.jpg","imageType":"jpg"},{"id":1165787,"title":"Instant Pot Chili Mac","image":"https://img.spoonacular.com/recipes/1165787-312x231.jpg","imageType":"jpg"},{"id":1050444,"title":"How to Make the Perfect Instant Pot Chicken","image":"https://img.spoonacular.com/recipes/1050444-312x231.jpg","imageType":"jpg"},{"id":1063645,"title":"The Secret to Easy Skillet Filet Mignon Steak Tacos","image":"https://img.spoonacular.com/recipes/1063645-312x231.jpg","imageType":"jpg"}]);
  
  

  async function getRandomRecipes(apiKey: string) {
    try {
      // const recipesResponse = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=' + apiKey + '&maxReadyTime=20&sort=random&number=' + recipeCount.toString() + '&type=main%20dish');
      // const recipesData = await recipesResponse.json();
      const recipesData:any = {results:[{"id":1697541,"title":"Pasta With Feta Cheese And Asparagus","image":"https://img.spoonacular.com/recipes/1697541-312x231.jpg","imageType":"jpg"}]};
      const recipeDetailsPromises = recipesData.results.map((recipeSummary: any) => {
        // return fetch('https://api.spoonacular.com/recipes/' + recipeSummary.id + '/information?apiKey=' + apiKey);
        return fetch('https://dummyjson.com/test');
      });

      const recipeDetails = await Promise.all(recipeDetailsPromises);
      const recipeDetailsData = await Promise.all(recipeDetails.map((recipeDetail) => {return recipeDetail.json()}));
      console.log(recipeDetailsData);

    } catch (error) {
      console.log(error);
    }
  }

  const generateRecipes = (): void => {
    const apiKey = sessionStorage.getItem("LivefrontChallengeQuickRecipes_SpoonacularApiKey");
    if(apiKey !== null) {
      getRandomRecipes(apiKey);
    } else {
      console.log('ERROR: no api key found');
    }
  }

  return (
    <>
      <div>
        <button className="GenerateRecipesButton" onClick={generateRecipes}>Generate Recipes</button>
      </div>
      
      <div className="RecipeContainer">
        {recipes.map(recipe => (
          <RecipeCard title={recipe.title} imageUrl={recipe.image}></RecipeCard>
        ))}
      </div>
    </>
    
  );
};

export default Recipes;
