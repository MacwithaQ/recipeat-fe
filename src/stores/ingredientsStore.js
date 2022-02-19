import { makeAutoObservable } from "mobx";
import instance from "./instance";

class IngredientsStore {
  ingredients = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchIngredients = async () => {
    try {
      const res = await instance.get("/api/ingredients");
      console.log(res.data);
      this.ingredients = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  addIngredient = (recipe) => {
    this.ingredients.push(recipe);
  };
}

const ingredientsStore = new IngredientsStore();
ingredientsStore.fetchIngredients();
export default ingredientsStore;
