import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import categories from "../categoriesStore";
import { observer } from "mobx-react";

function CategoriesList() {
  const [create, setCreate] = useState(false);
  const [type, setType] = useState("");
  const [category, setCategory] = useState({
    name: "",
    image: "",
    description: "",
  });

  const categoryList = categories.categories.map((category) => (
    <CategoryItem category={category} />
  ));

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    categories.createCategory(category);
    setCreate(!create);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setCreate(!create);
  };

  return (
    <div>
      <div class="b-example-divider"></div>
      <div className="controls">
        <button type="button" class="btn btn-dark" onClick={handleClick}>
          Create Category
        </button>
      </div>
      {create && (
        <div class="createForm">
          <form class="formitself" onSubmit={handleSubmit}>
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter category name"
                onChange={handleChange}
              />
            </div>
            <div class="form-check"></div>
            <div class="form-group">
              <label>Image URL</label>
              <input
                type="url"
                name="image"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter image URL"
                onChange={handleChange}
              />
            </div>
            <div class="form-check"></div>
            <div class="form-group">
              <label for="exampleInputPassword1">Short Description</label>
              <input
                type="text"
                name="description"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter a short description"
                onChange={handleChange}
              />
            </div>
            <div class="form-check"></div>
            <div className="submitbutton">
              <button type="submit" class="btn btn-dark">
                ✔
              </button>
            </div>
          </form>
        </div>
      )}
      <div>
        <ul class="cards">{categoryList}</ul>
      </div>
    </div>
  );
}
export default observer(CategoriesList);
