import categoriesStore from "../stores/categoriesStore";
import { observer } from "mobx-react";

const RecipeCreate = () => {
  const categoryOptions = categoriesStore.categories.map((category) => (
    <option>{category.name}</option>
  ));

  return (
    <div>
      <div className="createForm p-5 m-5">
        <div className="creationLog">
          <label class="form-label m-3">Recipe Name</label>
          <input
            class="form-control form-control-lg"
            type="text"
            name="name"
            placeholder="Enter recipe name"
            aria-label=".form-control-lg example"
          />
          <label class="form-label m-3">Category</label>
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1">
              {categoryOptions}
            </select>
          </div>
          <label class="form-label m-3">Description</label>
          <input
            class="form-control form-control-lg"
            type="text"
            name="description"
            placeholder="Enter recipe description"
            aria-label=".form-control-lg example"
          />
          <label class="form-label m-3">Image URL</label>
          <input
            class="form-control form-control-lg"
            type="text"
            name="image"
            placeholder="Enter image URL"
            aria-label=".form-control-lg example"
          />
          <label class="form-label m-3">Ingredients</label>
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="Enter recipe ingredients"
            aria-label=".form-control-lg example"
          />
          <label class="form-label m-3">Instructions</label>
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-dark m-3">
            Create Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default observer(RecipeCreate);
