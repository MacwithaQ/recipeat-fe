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
      this.ingredients = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  addIngredient = async (ingredient) => {
    try {
      const res = await instance.post("/api/ingredients", ingredient);
      this.ingredients = [...this.ingredients, res.data];
      console.log(res.data)
    } catch (error) {
      console.log("file: ingredientsStore.js ~ line 26 ~", error);
    }
  };
}

const ingredientsStore = new IngredientsStore();
ingredientsStore.fetchIngredients();
export default ingredientsStore;
