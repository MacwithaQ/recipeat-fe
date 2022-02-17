import { makeAutoObservable } from "mobx";
import categoriesData from "../categoriesData";
import instance from "./instance";

class CategoriesStore {
  categories = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategories = async () => {
    try {
      const res = await instance.get("/categories");
      this.categories = res.data;
      console.log(this.categories)
    } catch (error) {
      console.log("file: categoriesStore.js ~ line 18 ~",error);
    }
  };

  createCategory = (category) => {
    console.log(category);
    this.categories = [...this.categories, category];
  };
}

const categoriesStore = new CategoriesStore();
categoriesStore.fetchCategories();
export default categoriesStore;
