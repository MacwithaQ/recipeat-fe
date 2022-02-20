import categoriesStore from "../stores/categoriesStore";
import ingredientsStore from "../stores/ingredientsStore";
import recipesStore from "../stores/recipesStore";
import { observer } from "mobx-react";
import Select from "react-select";
import makeAnimated from 'react-select/animated'
import { useState } from "react";

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

  // const ingredientOptions = ingredientsStore.ingredients.map((ingredient) => (
  //   <option value={ingredient._id}>{ingredient.name}</option>
  // ));

  const [newRecipe, setNewRecipe] = useState({
    name: "",
    image: "",
    description: "",
    category:"",
    ingredients:[],
    steps:""
  });

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSelectCategory = (e) => {
    setNewRecipe({...newRecipe, category:e.value})
    console.log(newRecipe)
  }

  const handleSelectIngredients = (e) => {
    setNewRecipe({...newRecipe, ingredients:e.label})
    console.log(newRecipe)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    recipesStore.addRecipe(newRecipe);
  };


  const animatedComponents = makeAnimated()

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
            onChange={handleChange}
          />

          <label class="form-label m-3">Category</label>
          <div class="form-group">
            <Select 
            name="category"
            onChange={handleSelectCategory}
            class="form-control" id="exampleFormControlSelect1"
             options={categoryOptions}
             components={animatedComponents}
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
            {/* <select name="ingredients" onChange={handleChange} class="form-control" id="exampleFormControlSelect1" multiple>
              {ingredientOptions}
            </select> */}
            <Select
              name="ingredients"
              class="form-control"
              id="exampleFormControlSelect1"
              options={ingredientOptions}
              isMulti
              components={animatedComponents}
              onChange={handleSelectIngredients}
            />
          </div>

          <label class="form-label m-3">Instructions</label>
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-dark m-3" onClick={handleSubmit}>
            Create Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default observer(RecipeCreate);
