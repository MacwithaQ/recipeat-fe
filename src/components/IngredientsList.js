import ingredientsStore from "../stores/ingredientsStore";
import { observer } from "mobx-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import IngredientItem from "./IngredientsItem";

const IngredientList = ({ query }) => {
  const ingredient = ingredientsStore.ingredients
    .filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((ingredient) => (
      <IngredientItem key={ingredient.id} ingredient={ingredient} />
    ));
  const [create, setCreate] = useState({
    name: "",
    image: "",
    description: "",
  });

  const handleClick = (event) => {
    event.preventDefault();
    setCreate(!create);
  };

  return (
    <div>
      <div className="controls">
        <button type="button" class="btn btn-dark" onClick={handleClick}>
          Add Ingredient
        </button>
      </div>
      <ul className="cards">{ingredient}</ul>
    </div>
  );
};

export default observer(IngredientList);
