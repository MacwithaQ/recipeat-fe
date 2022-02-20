import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RecipesStore {
  recipes = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchRecipes = async () => {
    try {
      const res = await instance.get("/api/recipes");
      this.recipes = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  addRecipe = async (recipe) => {
    try {
      const res = await instance.post(
        `api/categories/${recipe.category}/recipes`,
        recipe
      );
      this.recipes = [...this.recipes, res.data];
      console.log(this.recipes);
    } catch (error) {
      console.log(error);
    }
  };
}

const recipesStore = new RecipesStore();
recipesStore.fetchRecipes();
export default recipesStore;
