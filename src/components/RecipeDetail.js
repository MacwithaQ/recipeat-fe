import { useParams } from "react-router-dom";
import recipesStore from "../stores/recipesStore";
import { observer } from "mobx-react";
import ingredientsStore from "../stores/ingredientsStore";

const RecipeDetail = () => {
  const { recipeId } = useParams();

  const recipe = recipesStore.recipes.find((recipe) => recipe._id === recipeId);

  const ingredients = ingredientsStore.map((ingredient) =>
    recipe.ingredients.map((recipe) => recipe.ingredient === ingredient._id)
  );

  function ingredientListMaker(ingredients) {
    const list = ingredients.toString();
    return list.replace(/,/g, ", ");
  }

  const ingredientList = ingredientListMaker(ingredients);

  return (
    <div>
      <div className="createForm p-5 m-5">
        <div className="creationLog">
          <img className="recipeImage" src={`${recipe.image}`} />
          <h1>{recipe.name}</h1>
          <h2>{recipe.description}</h2>
          <h2>Ingredients:</h2>
          <h4>{ingredientList}</h4>
          <h2>Instructions:</h2>
          <p>{recipe.directions}</p>
        </div>
      </div>
    </div>
  );
};
export default observer(RecipeDetail);
