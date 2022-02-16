import { makeAutoObservable } from "mobx";
import categories from "../categoriesData";

class CategoriesStore {
  Category = categories;

  constructor() {
    makeAutoObservable(this);
  }
}

const categoriesStore = new CategoriesStore();
export default categoriesStore;
