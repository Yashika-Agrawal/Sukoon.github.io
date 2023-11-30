import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "./images/img1.jpg";
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
    <div className="h-full bg-purple-400   px-5 mr-10 flex flex-col shadow-2xl">
      <div className="text-white text-3xl text-center mt-10 p-3 rounded-xl cursor-pointer hover:bg-purple-800">
        <FontAwesomeIcon title="Home" icon={faHouse} />
      </div>
      <div className="text-white text-3xl text-center mt-10 p-3 rounded-xl cursor-pointer hover:bg-purple-800">
        <FontAwesomeIcon title="Journal" icon={faBook} />
      </div>
      <div className="text-white text-3xl text-center mt-10 p-3 rounded-xl cursor-pointer hover:bg-purple-800">
        <FontAwesomeIcon title="Books" icon={faBookOpenReader} />
      </div>
      <div className="text-white text-3xl text-center mt-10 p-3 rounded-xl cursor-pointer hover:bg-purple-800">
        <FontAwesomeIcon title="Music" icon={faMusic} />
      </div>
      <div className="text-white text-3xl text-center mt-10 p-3 rounded-xl cursor-pointer hover:bg-purple-800">
        <FontAwesomeIcon title="Graph" icon={faChartSimple} />
      </div>
    </div>
  );
}
function Welcome() {
  return (
    <div className="py-5 px-2 bg-purple-400 h-1/5 my-5 rounded-lg shadow-2xl">
      <h1 className="text-center font-bold text-3xl text-white font-Poppins">
        Welcome Yashika! 👧🏻
      </h1>
      <p className=" text-center text-white text-xl">Let's make your day! ❤️</p>
    </div>
  );
}
function MoodTracker() {
  return (
    <div className="bg-purple-400 h-1/5 my-5 rounded-lg pb-5 shadow-2xl">
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
  const [quote, setQuote] = useState({
    text: "You are always free to change your mind and choose a different future, or a different past.",
  });
  let quotes = [];
  async function loadQuotes() {
    const response = await fetch(
      "https://type.fit/api/quotes"
      // {
      //   method: "GET",
      //   headers: {
      //     "X-Api-Key": "ADXsdSkEYE/wuTsIlYFIgg==2WI7roAuJ7BmLRpE",
      //   },
      // }
    );
    quotes = await response.json();
  }
  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
    console.log(select);
  };
  loadQuotes();
  return (
    <div className="bg-purple-400 h-1/2 my-5 w-96 rounded-lg flex flex-col flex-grow-0 shadow-2xl">
      <h1 className=" text-white text-2xl mt-5 font-bold text-center ">
        QUOTES
      </h1>
      <div className="bg-white rounded-3xl h-3/4 mx-5 my-2 flex items-center justify-center ">
        <p className=" font-sacramento mx-2 text-3xl font-bold  text-center">
          {quote.text}
        </p>
      </div>
      <button
        className="bg-purple-800 w-fit px-3 rounded-xl m-2 self-center py-2 text-white font-bold 
      "
        onClick={() => random()}
      >
        New Quote
      </button>
    </div>
  );
}
function Music() {
  // Dummy data for music playlist
  const playlist = [
    { title: "Song 1", artist: "Artist 1" },
    { title: "Song 2", artist: "Artist 2" },
    { title: "Song 3", artist: "Artist 3" },
    { title: "Song 4", artist: "Artist 3" },
    { title: "Song 5", artist: "Artist 3" },
    { title: "Song 6", artist: "Artist 3" },
    // Add more songs as needed
  ];

  return (
    <div className="bg-purple-400 h-1/2 mt-5 rounded-t-lg p-5 overflow-auto shadow-2xl">
      <h1 className="text-white text-2xl font-bold mb-3">Music Playlist</h1>
      <div className="grid grid-cols-1 gap-4">
        {playlist.map((song, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg flex items-center justify-between shadow-lg"
          >
            <div>
              <h2 className="text-purple-800 text-lg font-bold">
                {song.title}
              </h2>
              <p className="text-gray-500">{song.artist}</p>
            </div>
            {/* You can add play button, pause button, etc. as needed */}
            <button className="bg-purple-800 text-white px-3 py-1 rounded">
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Explore() {
  const meditations = [
    {
      title: "Morning Meditation",
      src: img1,
      duration: "10 minutes",
      type: "• Audio",
    },
    {
      title: "Breathing exercise",
      src: img1,
      duration: "15 minutes",
      type: "• Video",
    },
    {
      title: "Relaxing sounds",
      src: img1,
      duration: "25 minutes",
      type: "• Audio",
    },
    {
      title: "Morning Meditation",
      src: img1,
      duration: "10 minutes",
      type: "• Audio",
    },
  ];
  return (
    <div className="bg-purple-400 h-screen mt-1 rounded-lg flex flex-col">
      <h1 className="text-white font-bold text-center mt-3 text-5xl font-poppins">
        Explore Today
      </h1>
      <div className="bg-purple-500 flex mt-7 rounded-3xl p-2 drop-shadow-xl">
        {/* Breathing Exercise 1 */}
        {meditations.map((meditation) => (
          <div className="bg-white  rounded-3xl cursor-pointer w-1/4 m-5 drop-shadow-2xl">
            <img
              src={meditation.src}
              alt="meditation"
              className=" rounded-t-3xl"
            />
            <h1 className=" text-center font-bold text-gray-700 pt-3 ">
              {meditation.title}
            </h1>
            <p className=" text-gray-500 text-center pb-2 ">
              {meditation.duration}
              <span>{meditation.type}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
