export function MoodTracker({excited,joyfull,happy,neutral,unhappy,stressed,angry,setExcited,setJoyfull,setHappy,setNeutral,setUnhappy,setStressed,setAngry}) {
  return (
    <div className="ml-10 bg-purple-400 h-1/5 my-5 rounded-lg pb-5 shadow-2xl">
      <h1 className="text-white text-xl text-center mt-5 mb-2 font-poppins font-bold">
        How are you feeling today?
      </h1>
      <div>
        <ul className=" flex  justify-center flex-row-reverse">
          <li className="text-3xl ms-3 hover:text-4xl  cursor-pointer"onClick={()=>{setAngry(angry+1)}}> 😡</li>
          <li className="text-3xl mx-3   hover:text-4xl cursor-pointer" onClick={()=>{setStressed(stressed+1)}}>😭</li>
          <li className="text-3xl mx-3  hover:text-4xl  hover:text-4xl cursor-pointer" onClick={()=>{setUnhappy(unhappy+1)}}>☹️</li>
          <li className="text-3xl mx-3  hover:text-4xl cursor-pointer" onClick={()=>{setNeutral(neutral+1)}}>😐</li>
          <li className="text-3xl mx-3  hover:text-4xl cursor-pointer"onClick={()=>{setHappy(happy+1)}}>😊</li>
          <li className="text-3xl mx-3  hover:text-4xl cursor-pointer" onClick={()=>{setJoyfull(joyfull+1)}}>😃</li>
          <li className="text-3xl  hover:text-4xl me-4 cursor-pointer" onClick={()=>{setExcited(excited+1)}}>😁</li>
        </ul>
      </div>
      <div className="mt-1">
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
