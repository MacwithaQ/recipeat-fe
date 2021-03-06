import React from "react";
import FoodCollage2 from "../media/FoodCollage2.jpeg";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div class="px-4 py-5 my-5 text-center">
          <Image
            class="d-block mx-auto mb-4"
            src={FoodCollage2}
            alt=""
            fluid
            // width="72"
            // height="57"
          />
          <h1 class="display-5 fw-bold text-white">Are You Hungry?</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4 text-white">
              We have compiled all your favorite recipes for you in one place!
              Now you can access any recipe you'd like to explore. You can also
              create your own recipe if you'd like to add to this community!
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/categories">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                  Explore Recipes
                </button>
              </Link>
              <Link to="/recipeCreate">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4"
                >
                  Add Recipe
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
