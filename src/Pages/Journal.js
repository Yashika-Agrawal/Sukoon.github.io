import { useState } from "react";
import Editor from "../components/Editor";
import SideBar from "../components/SideBar";
import "../App.css";
const config = {
  buttons: [
    "bold",
    "italic",
    "underline",
    "|",
    "ul",
    "ol",
    "eraser",
    "|",
    "fontsize",
    "brush",
    "|",
    "image",
    "table",

    "link",
    "|",
    "align",
    "|",
    "undo",
    "redo",
    "|",

    "fullsize",
  ],
};
export default function Journal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [entries, setEntries] = useState([]);
  function handleAddEntry() {
    const newEntry = {
      title: title,
      content: content,
      date: new Date(),
    };
    setEntries([...entries, newEntry]);
    setTitle("");
    setContent("");
  }
  return (
    <>
      <div className="h-screen bg-purple-200 flex flex-row overflow-hidden">
        <SideBar />
        <SearchJournal entries={entries} />
        <Workspace
          title={title}
          setTitle={setTitle}
          onAddEntry={handleAddEntry}
        />
      </div>
    </>
  );
}
function SearchJournal({ entries }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="bg-white h-screen w-1/4 flex flex-col border-r-2 ">
      <div className=" justify-center bg-gray-100 py-5 text-center ">
        <input
          type="text"
          className="rounded-xl py-2 px-3 w-4/5 border-2 border-gray-300"
          placeholder="Search your Journal"
        />
      </div>
      {entries.map((entry) => (
        <div
          key={entry.date.getTime()}
          className="mb-1 border-b-2 border-b-violet-400 flex justify-center bg-violet-300 text-center   cursor-pointer"
        >
          <div className=" w-1/3 py-5  border-r-2 border-r-violet-400 text-lg">
            <p>{`${entry.date.getDate()} ${months[entry.date.getMonth()]}`} </p>
          </div>
          <div className=" w-2/3 py-5  border-l-violet-400  text-lg">
            {entry.title}
          </div>
        </div>
      ))}

      {/* <div className=" border-b-2 border-b-violet-400 flex justify-center bg-violet-300 text-center   cursor-pointer">
        <div className=" w-1/3 py-5  border-r-2 border-r-violet-400 ">Date</div>
        <div className=" w-2/3 py-5  border-l-violet-400">Entry</div>
      </div> */}
    </div>
  );
}
function Workspace({ title, setTitle, onAddEntry }) {
  const [content, setContent] = useState("");
  function handleTitle(e) {
    console.log(title);
    setTitle(e.target.value);
  }
  function handleClick() {
    setTitle(title);
    setContent(content);
    onAddEntry();
    setTitle("");
    setContent("");
  }
  return (
    <div className="bg-white h-screen w-3/4 flex flex-col border-r-2 overflow-hidden">
      <div className=" text-2xl items-center space-x-8 justify-end flex flex-row border-b-2  bg-gray-100  text-center ">
        <div className="cursor-pointer" title="EDIT">
          ✏️
        </div>
        <div className="cursor-pointer" title="Delete">
          🗑️
        </div>
        <div
          className=" cursor-pointer rounded-l-lg bg-purple-500 p-5 px-6 text-white font-bold"
          title="NEW"
          onClick={handleClick}
        >
          +
        </div>
      </div>
      <div className=" justify-center bg-gray-100 py-3 text-center px-2">
        <input
          type="text"
          className="rounded-xl py-2 px-3 w-full border-2 border-gray-300 text-2xl"
          placeholder="Enter your Title..."
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className=" h-screen ">
        <Editor onChange={(content) => setContent(content)} config={config} />
      </div>
    </div>
  );
}
