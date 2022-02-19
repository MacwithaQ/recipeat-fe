import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {

  return (
    <li>
      <Link class="card" to="">
        <img src={recipe.image} class="card__image" alt="" />
        <div class="card__overlay">
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <div class="card__header-text">
              <h3 class="card__title">{recipe.name}</h3>
            </div>
          </div>
          <p class="card__description">{recipe.description}</p>
        </div>
      </Link>
    </li>
  );
};

export default RecipeItem;
