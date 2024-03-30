import { useState } from "react";

export function Quote() {
  const [quote, setQuote] = useState({
    text: "You are always free to change your mind and choose a different future, or a different past.",
  });
  let quotes = [];
  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
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
