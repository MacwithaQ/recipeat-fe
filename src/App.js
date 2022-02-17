import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CategoriesList from "./components/CategoriesList";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeCreate from "./components/RecipeCreate";

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <NavBar setQuery={setQuery} />
      <div class="b-example-divider"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/categories"
          element={<CategoriesList query={query} setCategory={setCategory} />}
        />
        <Route path="/recipes" element={<RecipeList category={category} />} />
        <Route path="/:category/recipes" element={<></>} />
        <Route path="/ingredients" element={<></>} />
        <Route path="/recipecreate" element={<RecipeCreate />} />
      </Routes>
    </div>
  );
}

export default App;
