import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CategoriesList from "./components/CategoriesList";
import { Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <NavBar setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesList query={query} />} />
        <Route path="/:category/recipes" element={<></>} />
        <Route path="/ingredients" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
