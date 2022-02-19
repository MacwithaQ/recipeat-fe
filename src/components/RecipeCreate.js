import categoriesStore from "../stores/categoriesStore";
import { observer } from "mobx-react";
import ingredientsStore from "../stores/ingredientsStore";
import Select from 'react-select'

const RecipeCreate = () => {
  const categoryOptions = categoriesStore.categories.map((category) => (
    <option>{category.name}</option>
    ));

    const ingredientOptions = ingredientsStore.ingredients.map((ingredient) => (
      {value:ingredient.name, label:ingredient.name}
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
            required
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
            required
          />
          <label class="form-label m-3">Image URL</label>
          <input
            class="form-control form-control-lg"
            type="text"
            name="image"
            placeholder="Enter image URL"
            aria-label=".form-control-lg example"
            required
          />
          <label class="form-label m-3">Ingredient</label>
          <div class="form-group">
            <Select class="form-control" id="exampleFormControlSelect1" options={ingredientOptions} isMulti/>
          </div>
          <label class="form-label m-3">description</label>
          <input
            class="form-control form-control-lg"
            type="text"
            name="description"
            placeholder="Enter recipe description"
            aria-label=".form-control-lg example"
            required
          />
          {/* use https://react-select.com/home#getting-started */}
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
