import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CategoriesList from "./components/CategoriesList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/:category/recipes" element={<></>} />
        <Route path="/ingredients" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
