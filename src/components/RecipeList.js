import recipesStore from "../stores/recipesStore";
import { observer } from "mobx-react";
import RecipeItem from "./RecipeItem";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import recipes from "../recipeData";

const RecipeList = ({ query }) => {
  
  const { categoryId } = useParams();

  const recipe = recipesStore.recipes
    .filter((recipe) => recipe.category === categoryId)
    .filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()))
    .map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />);


  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="controls">
        <button type="button" class="btn btn-dark" onClick={handleClick}>
          <Link
            className="link-dark text-decoration-none text-reset m-2"
            to="/recipecreate"
          >
            Create Recipe
          </Link>
        </button>
      </div>
      <ul className="cards">{recipe}</ul>
    </div>
  );
};

export default observer(RecipeList);
