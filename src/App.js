import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CategoriesList from "./components/CategoriesList";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeCreate from "./components/RecipeCreate";
import IngredientsList from "./components/IngredientsList";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <NavBar setQuery={setQuery} />
      <div class="b-example-divider"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesList query={query} />} />
        <Route path="/recipes" element={<RecipeList query={query} />} />
        <Route
          path="/:categoryId/recipes"
          element={<RecipeList query={query} />}
        />
        <Route
          path="/ingredients"
          element={
            <>
              <IngredientsList query={query} />
            </>
          }
        />
        <Route path="/recipecreate" element={<RecipeCreate />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
