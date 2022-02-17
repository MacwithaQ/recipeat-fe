import React from "react";
import FoodCollage2 from "../media/FoodCollage2.jpeg";
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <div>
      <div class="b-example-divider"></div>
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
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                Primary button
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Secondary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
