import "./App.css";
import Home from "./Pages/Home.js";
import Journal from "./Pages/Journal.js";
import Book from "./Pages/Book.js";
import Songs from "./Pages/Songs.js";
import Graph from "./Pages/Graph.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/book" element={<Book />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/graph" element={<Graph />} />
    </Routes>
  );
}

//class ht jayegi
export default App;
