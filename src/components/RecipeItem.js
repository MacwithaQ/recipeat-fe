import { Card, Button } from "react-bootstrap";
import { useState } from "react";

const RecipeItem = ({ recipe }) => {

  return (
    <li>
      <a href="" class="card">
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
      </a>
    </li>
  );
};

export default RecipeItem;
