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
      const res = await instance.get("/api/categories");
      this.categories = res.data;
    } catch (error) {
      console.log("file: categoriesStore.js ~ line 18 ~", error);
    }
  };

  createCategory = async (category) => {
    try {
      const res = await instance.post("/api/categories", category);
      console.log(res)
      this.categories = [...this.categories, res.data];
    } catch (error) {
      console.log(error);
    }
  };
}

const categoriesStore = new CategoriesStore();
categoriesStore.fetchCategories();
export default categoriesStore;
