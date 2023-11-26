import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBook,
  faBookOpenReader,
  faMusic,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
function App() {
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
function SideBar() {
  return (
    <div className="h-full bg-purple-400 px-5 mr-10 flex flex-col">
      <FontAwesomeIcon
        title="Home"
        icon={faHouse}
        className="text-white text-3xl py-5 pt-10 cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faBook}
        title="Journal"
        className="text-white text-3xl py-5 pt-10 cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faBookOpenReader}
        className="text-white text-3xl py-5 pt-10 cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faMusic}
        className="text-white text-3xl py-5 pt-10 cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faChartSimple}
        className="text-white text-3xl py-5 pt-10 cursor-pointer"
      />
    </div>
  );
}
function Welcome() {
  return (
    <div className="py-5 px-2 bg-purple-400 h-1/5 my-5 rounded-lg">
      <h1 className="text-center font-bold text-3xl text-white font-Poppins">
        Welcome Yashika! 👧🏻
      </h1>
      <p className="text-center text-white text-xl">Let's make your day! ❤️</p>
    </div>
  );
}
function MoodTracker() {
  return (
    <div className="bg-purple-400 h-1/5 my-5 rounded-lg pb-5">
      <h1 className="text-white text-xl text-center mt-5 mb-2 font-poppins font-bold">
        How are you feeling today?
      </h1>
      <div>
        <ul className=" flex  justify-center flex-row-reverse">
          <li className="text-3xl ms-3  cursor-pointer"> 😡</li>
          <li className="text-3xl mx-3 cursor-pointer">😭</li>
          <li className="text-3xl mx-3  cursor-pointer">☹️</li>
          <li className="text-3xl mx-3  cursor-pointer">😐</li>
          <li className="text-3xl mx-3 cursor-pointer">😊</li>
          <li className="text-3xl mx-3 cursor-pointer">😃</li>
          <li className="text-3xl me-4 cursor-pointer">😁</li>
        </ul>
      </div>
      <div>
        <ul className=" flex  justify-center flex-row flex-1">
          <li className="mx-2 text-white font-bold">Excited</li>
          <li className="mx-2 text-white font-bold">Joyfull</li>
          <li className="mx-2 text-white font-bold">Happy</li>
          <li className="mx-2 text-white font-bold">Neutral</li>
          <li className="mx-2 text-white font-bold">Unhappy</li>
          <li className="mx-2 text-white font-bold">Stressed</li>
          <li className="mx-2 text-white font-bold">Angry</li>
        </ul>
      </div>
    </div>
  );
}

function Quote() {
  return (
    <div className="bg-purple-400 h-1/2 px-48 my-5 rounded-lg">
      <h1>Quote</h1>
    </div>
  );
}
function Music() {
  return (
    <div className="bg-purple-400 h-1/2 mt-5 rounded-t-lg">
      <h1>Music</h1>
    </div>
  );
}
function Explore() {
  return (
    <div className="bg-purple-400 h-screen mt-5 rounded-lg">
      <h1 className="text-white text-3xl font-bold text-center mt-3">
        Explore Today
      </h1>
    </div>
  );
}
export default App;
