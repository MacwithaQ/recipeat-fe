import { useParams } from "react-router-dom";
import recipesStore from "../stores/recipesStore";
import { observer } from "mobx-react";
import ingredientsStore from "../stores/ingredientsStore";

const RecipeDetail = () => {
  const { recipeId } = useParams();

  const recipe = recipesStore.recipes.find((recipe) => recipe._id === recipeId);

  // fetches ingredients from store
  const ingredientList = ingredientsStore.ingredients;

  // creates an array of ingredient objects that are used in the recipe
  const ingredientsUsed = ingredientList.filter((ingredient) =>
    recipe.ingredients.includes(ingredient._id)
  );

  // returns only the ingredient names
  const ingredientUsedNames = ingredientsUsed.map(
    (ingredient) => ingredient.name
  );

  // function that creates the printable list of ingredients for use in recipe page
  function ingredientListMaker(ingredients) {
    const list = ingredients.toString();
    return list.replace(/,/g, ", ");
  }

  const ingredientPrint = ingredientListMaker(ingredientUsedNames);

  return (
    <div>
      <div className="createForm p-5 m-5">
        <div className="creationLog text-wrap">
          <div className="recipedetailImage">
            <img className="recipeImage" src={`${recipe.image}`} />
            <h1>{recipe.name}</h1>
          </div>
          <p className="lead mb-4 fw-bold">{recipe.description}</p>
          <h2>Ingredients:</h2>
          <p>{ingredientPrint}</p>
          <h2>Instructions:</h2>
          <p>{recipe.directions}</p>
        </div>
      </div>
    </div>
  );
};
export default observer(RecipeDetail);
