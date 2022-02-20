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

  addRecipe = async (recipe) => {
    try {
      console.log(recipe)
      const res = await instance.post(
        `api/categories/${recipe.category}/recipes`,
        recipe
      );
      this.recipes = [...this.recipes, res.data];
      // console.log(this.recipes)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const recipesStore = new RecipesStore();
recipesStore.fetchRecipes();
export default recipesStore;
