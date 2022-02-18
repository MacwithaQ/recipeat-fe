import { makeAutoObservable } from "mobx";
import Recipes from "../recipeData";
import instance from "./instance";

class RecipesStore {
  recipes = [];

  fetchRecipes = async () => {
    try {
      const res = await instance.get("/api/recipes");
      console.log(res.data);
      this.recipes = res.data;
    } catch (error) {
      console.log(error);
    }
  };

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
recipesStore.fetchRecipes();
export default recipesStore;
