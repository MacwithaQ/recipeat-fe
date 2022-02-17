import recipesStore from "../stores/recipesStore";
import { observer } from "mobx-react";
import RecipeItem from "./RecipeItem";
import { useState } from "react";
import recipes from "../recipeData";

const RecipeList = ({ category }) => {
  const recipe = recipesStore.recipes
    .filter((recipe) => recipe.category.includes(category))
    .map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />);
  const [create, setCreate] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setCreate({ ...recipes, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    recipes.createRecipe(recipe);
    setCreate(!create);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setCreate(!create);
  };

  return (
    <div>
      <div className="controls">
        <button type="button" class="btn btn-dark" onClick={handleClick}>
          Create Recipe
        </button>
      </div>
      <ul className="cards">{recipe}</ul>
    </div>
  );
};

export default observer(RecipeList);
