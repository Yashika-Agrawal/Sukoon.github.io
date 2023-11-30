export function MoodTracker() {
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
