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
  const recipeCount: number = 5;
  const [recipes, setRecipes] = useState<RecipeSummary[]>([{"id":1697541,"title":"Pasta With Feta Cheese And Asparagus","imageUrl":"https://img.spoonacular.com/recipes/1697541-312x231.jpg"},{"id":1697541,"title":"Pasta With Feta Cheese And Asparagus","imageUrl":"https://img.spoonacular.com/recipes/1697541-312x231.jpg"}, {"id":1697541,"title":"Pasta With Feta Cheese And Asparagus","imageUrl":"https://img.spoonacular.com/recipes/1697541-312x231.jpg"}, {"id":1697541,"title":"Pasta With Feta Cheese And Asparagus","imageUrl":"https://img.spoonacular.com/recipes/1697541-312x231.jpg"}, {"id":1697541,"title":"Pasta With Feta Cheese And Asparagus","imageUrl":"https://img.spoonacular.com/recipes/1697541-312x231.jpg"}]);
  // const [recipes, setRecipes] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetails[]>([{summary: ""}]);

  interface RecipeSummary {
    id: number;
    title: string;
    imageUrl: string;
  }

  interface RecipeDetails {
    summary: string;
  }

  async function getAndSaveRandomRecipes(apiKey: string) {
    try {
      const recipesResponse = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=' + apiKey + '&maxReadyTime=20&sort=random&number=' + recipeCount.toString() + '&type=main%20dish');
      const recipesData = await recipesResponse.json();
      // const recipesData:any = {results:[{"id":1697541,"title":"Pasta With Feta Cheese And Asparagus","image":"https://img.spoonacular.com/recipes/1697541-312x231.jpg","imageType":"jpg"}]};
      const recipeDetailsPromises = recipesData.results.map((recipeSummary: any) => {
        return fetch('https://api.spoonacular.com/recipes/' + recipeSummary.id + '/information?apiKey=' + apiKey);
        // return fetch('https://dummyjson.com/test');
      });

      const recipeDetails = await Promise.all(recipeDetailsPromises);
      const recipeDetailsData = await Promise.all(recipeDetails.map((recipeDetail) => {return recipeDetail.json()}));
      sessionStorage.setItem('LivefrontChallengeQuickRecipes_Recipes', JSON.stringify(recipesData.results));
      sessionStorage.setItem('LivefrontChallengeQuickRecipes_RecipeDetails', JSON.stringify(recipeDetailsData));
      setRecipes(recipesData.results.map((recipe: any) => {return {
        id: recipe.id,
        title: recipe.title,
        imageUrl: recipe.image
      }}));
    } catch (error) {
      console.log(error);
    }
  }

  const generateRecipes = (): void => {
    const apiKey = sessionStorage.getItem('LivefrontChallengeQuickRecipes_SpoonacularApiKey');
    if(apiKey !== null) {
      getAndSaveRandomRecipes(apiKey);
    } else {
      alert('ERROR: no api key found');
    }
  }

  const loadRecipes = (): void => {
    let storedRecipes = sessionStorage.getItem('LivefrontChallengeQuickRecipes_Recipes');
    let storedRecipeDetails = sessionStorage.getItem('LivefrontChallengeQuickRecipes_RecipeDetails');
    if(storedRecipes == null || storedRecipeDetails == null) {
      generateRecipes();
    }

    if(storedRecipes !== null) {
      setRecipes(JSON.parse(storedRecipes).map((recipe: any) => {return {
        id: recipe.id,
        title: recipe.title,
        imageUrl: recipe.image
      }}));
    }
    if(storedRecipeDetails !== null) {
      setRecipeDetails(JSON.parse(storedRecipeDetails).map((recipeDetails: any) =>{return {
        summary: recipeDetails.summary
      }}));
    }
  }

  useEffect(() => {
    loadRecipes();
  }, []); 

  return (
    <>
      <div>
        <button className="GenerateRecipesButton" onClick={generateRecipes}>Generate Recipes</button>
      </div>
      
      <div className="RecipeContainer">
        {recipes.map(recipe => (
          <RecipeCard title={recipe.title} imageUrl={recipe.imageUrl}></RecipeCard>
        ))}
      </div>
    </>
    
  );
};

export default Recipes;
