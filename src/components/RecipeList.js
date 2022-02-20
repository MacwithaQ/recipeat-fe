import recipesStore from "../stores/recipesStore";
import { observer } from "mobx-react";
import RecipeItem from "./RecipeItem";
import { Link, useParams } from "react-router-dom";

const RecipeList = ({ query }) => {
  
  const { categoryId } = useParams();

  const recipeMapping = () => {
    if (!categoryId) {
      return recipesStore.recipes
        .filter((recipe) =>
          recipe.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />);
    } else {
      return recipesStore.recipes
        .filter((recipe) => recipe.category === categoryId)
        .filter((recipe) =>
          recipe.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />);
    }
  };

  const recipe = recipeMapping();


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
