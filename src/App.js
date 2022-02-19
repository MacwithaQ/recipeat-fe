import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CategoriesList from "./components/CategoriesList";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeCreate from "./components/RecipeCreate";
import IngredientsList from "./components/IngredientsList";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <NavBar setQuery={setQuery} />
      <div class="b-example-divider"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesList query={query} />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/:category/recipes" element={<></>} />
        <Route path="/ingredients" element={<><IngredientsList /></>} />
        <Route path="/recipecreate" element={<RecipeCreate />} />
      </Routes>
    </div>
  );
}

export default App;
