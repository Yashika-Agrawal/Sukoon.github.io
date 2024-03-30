import "./App.css";
import Home from "./Pages/Home.js";
import Journal from "./Pages/Journal.js";
import Book from "./Pages/Book.js";

import Songs from "./Pages/Songs.js";
import Graph from "./Pages/Graph.js";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
 let [excited,setExcited]=useState(0);
let [joyfull,setJoyfull]=useState(0);
let [happy,setHappy]=useState(0);
let [neutral,setNeutral]=useState(0);
let [unhappy,setUnhappy]=useState(0);
let [stressed,setStressed]=useState(0);
let [angry,setAngry]=useState(0);
  return (
    <Routes>
      <Route path="/" element={<Home  joyfull={joyfull} happy={happy} excited={excited} angry={angry} unhappy={unhappy} stressed={stressed} neutral={neutral} setJoyfull={setJoyfull} setHappy={setHappy} setExcited={setExcited} setAngry={setAngry} setUnhappy={setUnhappy} setStressed={setStressed} setNeutral={setNeutral}/>} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/book" element={<Book />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/graph" element={<Graph joyfull={joyfull} happy={happy} excited={excited} angry={angry} unhappy={unhappy} stressed={stressed} neutral={neutral}/>} />
    </Routes>
  );
}

//class ht jayegi
export default App;
