import { observer } from "mobx-react";
import { Link } from "react-router-dom";

function CategoryItem({ category, setCategory }) {
  const handleClick = (e) => {
    setCategory(category.name);
  };
  return (
    <li>
      <Link class="card" onClick={handleClick} to="/recipes">
        <img src={category.image} class="card__image" alt="" />
        <div class="card__overlay">
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <div class="card__header-text">
              <h3 class="card__title">{category.name}</h3>
            </div>
          </div>
          <p class="card__description">{category.description}</p>
        </div>
      </Link>
    </li>
  );
}
export default observer(CategoryItem);