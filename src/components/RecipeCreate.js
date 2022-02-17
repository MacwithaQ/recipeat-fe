const RecipeCreate = () => {
  return (
    <div>
      <div className="createForm p-5 m-5">
        <div className="creationLog">
          <label class="form-label m-3">Recipe Name</label>
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="Enter recipe name"
            aria-label=".form-control-lg example"
          />
          <label class="form-label m-3">Description</label>
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="Enter recipe description"
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

export default RecipeCreate;
