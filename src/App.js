import "./App.css";
import Home from "./Pages/Home.js";
import Journal from "./Pages/Journal.js";
import Book from "./Pages/Book.js";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import { Music } from "./components/Music.js";
import Graph from "./Pages/Graph.js";
function App() {
  return (
    // <div className="flex h-screen bg-purple-200">
    // <div className="flex flex-col flex-1">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/book" element={<Book />} />
      <Route path="/music" element={<Music />} />
      <Route path="/graph" element={<Graph />} />
    </Routes>
  );
}
//class ht jayegi
export default App;
