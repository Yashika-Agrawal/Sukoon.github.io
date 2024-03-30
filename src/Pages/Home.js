import { MoodTracker } from "../components/MoodTracker";
import { Welcome } from "../components/Welcome";
import { Quote } from "../components/Quote";
import Music from "../components/Music";
import { Explore } from "../components/Explore";
import SideBar from "../components/SideBar";
import { useState } from "react";

function Home({excited,joyfull,happy,neutral,unhappy,stressed,angry,setExcited,setJoyfull,setHappy,setNeutral,setUnhappy,setStressed,setAngry}) {

  return (
    <div className="flex h-screen bg-purple-200">
      <SideBar />

      <div className="flex flex-col flex-1">
        <Welcome />
        <MoodTracker joyfull={joyfull} happy={happy} excited={excited} angry={angry} unhappy={unhappy} stressed={stressed} neutral={neutral} setJoyfull={setJoyfull} setHappy={setHappy} setExcited={setExcited} setAngry={setAngry} setUnhappy={setUnhappy} setStressed={setStressed} setNeutral={setNeutral} />
        <Explore />
      </div>
      <div className="flex flex-col mx-5">
        <Quote />
        <Music />
      </div>
    </div>
  );
}

export default Home;
