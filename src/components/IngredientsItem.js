import { Link } from "react-router-dom";

const IngredientItem = ({ ingredient }) => {

  return (
    <li>
      <Link class="card" to="">
        <img src={ingredient.image} class="card__image" alt="" />
        <div class="card__overlay">
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <div class="card__header-text">
              <h3 class="card__title">{ingredient.name}</h3>
            </div>
          </div>
          <p class="card__description">{ingredient.description}</p>
        </div>
      </Link>
    </li>
  );
};

export default IngredientItem;
