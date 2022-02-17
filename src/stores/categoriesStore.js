import { makeAutoObservable } from "mobx";
import categoriesData from "../categoriesData";

class CategoriesStore {
  categories = categoriesData;

  createCategory = (category) => {
    console.log(category);
    this.categories = [...this.categories, category];
  };

  constructor() {
    makeAutoObservable(this);
  }
}

const categoriesStore = new CategoriesStore();
export default categoriesStore;
