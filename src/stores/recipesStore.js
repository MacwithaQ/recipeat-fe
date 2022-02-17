import { makeAutoObservable } from "mobx";
import Recipes from "../recipeData";

class RecipesStore {
  recipes = Recipes;

  constructor() {
    makeAutoObservable(this);
  }
  addRecipe = (recipe) => {
    // const lastRecipe = this.recipes[this.recipes.length - 1];
    // recipe.id = lastRecipe.id + 1;
    // recipe.currentlyBorrowedBooks = [];
    // recipe.slug = recipe.firstName.tolower + "-" + recipe.lastName.tolower;
    this.recipes.push(recipe);
  };
}

const recipesStore = new RecipesStore();
export default recipesStore;
