import recipesStore from "../stores/recipesStore";
import { observer } from "mobx-react";
import RecipeItem from "./RecipeItem";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";
import ingredientsStore from "../stores/ingredientsStore";
import makeAnimated from "react-select/animated";
import { useState } from "react";

const RecipeList = ({ query }) => {
  const { categoryId } = useParams();

  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // iterate ingredient and map them to value and option
  const ingredientOptions = ingredientsStore.ingredients.map((ingredient) => ({
    value: ingredient._id,
    label: ingredient.name,
  }));

  // take ingredient id from react-select
  const handleSelect = (options) => {
    const ingredients = options.map((option) => option.value);
    setSelectedIngredients(ingredients);
  };

  const recipeMapping = () => {
    if (selectedIngredients.length === 0) {
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
    } else {
      if (!categoryId) {
        return recipesStore.recipes
          .filter((recipe) =>
            recipe.name.toLowerCase().includes(query.toLowerCase())
          )
          .filter((recipe) =>
            selectedIngredients.some((ingredient) =>
              recipe.ingredients.includes(ingredient)
            )
          )
          .map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />);
      } else {
        return recipesStore.recipes
          .filter((recipe) => recipe.category === categoryId)
          .filter((recipe) =>
            recipe.name.toLowerCase().includes(query.toLowerCase())
          )
          .filter((recipe) =>
            selectedIngredients.some((ingredient) =>
              recipe.ingredients.includes(ingredient)
            )
          )
          .map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />);
      }
    }
  };

  const recipe = recipeMapping();
  const animatedComponents = makeAnimated();

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
        <div>
          <Select
            options={ingredientOptions}
            isMulti
            components={animatedComponents}
            onChange={handleSelect}
            defaultValue={-1}
          />
        </div>
      </div>
      <ul className="cards">{recipe}</ul>
    </div>
  );
};

export default observer(RecipeList);
