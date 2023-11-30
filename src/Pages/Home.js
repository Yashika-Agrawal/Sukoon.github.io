import { MoodTracker } from "../components/MoodTracker";
import { Welcome } from "../components/Welcome";
import { Quote } from "../components/Quote";
import Music from "../components/Music";
import { Explore } from "../components/Explore";
import SideBar from "../components/SideBar";

function Home() {
  return (
    <div className="flex h-screen bg-purple-200">
      <SideBar />

      <div className="flex flex-col flex-1">
        <Welcome />
        <MoodTracker />
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
