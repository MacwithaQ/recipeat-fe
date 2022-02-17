import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CategoriesList from "./components/CategoriesList";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import RecipeList from "./components/RecipeList"

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <NavBar setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesList query={query} />} />
        <Route path="/recipes" element={<RecipeList/>} />
        <Route path="/:category/recipes" element={<></>} />
        <Route path="/ingredients" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
