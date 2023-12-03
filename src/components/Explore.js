import img1 from "../images/img1.jpg";

export function Explore() {
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
    <div className="ml-10 bg-purple-400 h-screen mt-1 rounded-lg flex flex-col">
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
