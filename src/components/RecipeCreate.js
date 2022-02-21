import categoriesStore from "../stores/categoriesStore";
import ingredientsStore from "../stores/ingredientsStore";
import recipesStore from "../stores/recipesStore";
import { observer } from "mobx-react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipeCreate = () => {
  const categoryOptions = categoriesStore.categories.map((category) => ({
    value: category._id,
    label: category.name,
  }));

  // const categoryOptions = categoriesStore.categories.map((category) => (
  //   <option value={category._id}>{category.name}</option>
  // ));

  const ingredientOptions = ingredientsStore.ingredients.map((ingredient) => ({
    value: ingredient._id,
    label: ingredient.name,
  }));

  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
    ingredients: [],
    directions: "",
  });

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSelectCategory = (e) => {
    setNewRecipe({ ...newRecipe, category: e.value });
  };

  const handleSelectIngredients = (values) => {
    const ingredientId = values.map((value) => value.value);
    setNewRecipe({ ...newRecipe, ingredients: ingredientId });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    recipesStore.addRecipe(newRecipe);
    navigate("/recipes");
  };

  const animatedComponents = makeAnimated();

  return (
    <div>
      <form>
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
              onChange={handleChange}
            />

            <label class="form-label m-3">Category</label>
            <div class="form-group">
              <Select
                name="category"
                onChange={handleSelectCategory}
                class="form-control"
                id="exampleFormControlSelect1"
                options={categoryOptions}
                components={animatedComponents}
                required
              />
            </div>

            <label class="form-label m-3">Description</label>
            <input
              class="form-control form-control-lg"
              type="text"
              name="description"
              placeholder="Enter recipe description"
              aria-label=".form-control-lg example"
              required
              onChange={handleChange}
            />

            <label class="form-label m-3">Image URL</label>
            <input
              class="form-control form-control-lg"
              type="text"
              name="image"
              placeholder="Enter image URL"
              aria-label=".form-control-lg example"
              required
              onChange={handleChange}
            />

            <label class="form-label m-3">Ingredients</label>
            <div class="form-group">
              <Select
                name="ingredients"
                class="form-control"
                id="exampleFormControlSelect1"
                options={ingredientOptions}
                isMulti
                components={animatedComponents}
                onChange={handleSelectIngredients}
                required
              />
            </div>

            <label class="form-label m-3">Instructions</label>
            <div class="form-group">
              <textarea
                name="directions"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="7"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-dark m-3"
              onClick={handleSubmit}
            >
              Create Recipe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default observer(RecipeCreate);
