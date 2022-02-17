import categoriesStore from "../categoriesStore";
import { observer } from "mobx-react";
import burgerIcon from "../media/BurgerIcon.png";
import { Image } from "react-bootstrap";

function CategoryItem({ category }) {
  return (
    <li>
      <a href="" class="card">
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
      </a>
    </li>
  );
}
export default observer(CategoryItem);
