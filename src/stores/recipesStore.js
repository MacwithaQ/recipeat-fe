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
      console.log(res.data);
      this.recipes = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  addRecipe = (recipe) => {
    this.recipes.push(recipe);
  };
}

const recipesStore = new RecipesStore();
recipesStore.fetchRecipes();
export default recipesStore;
