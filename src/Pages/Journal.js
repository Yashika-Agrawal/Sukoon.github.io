import SideBar from "../components/SideBar";

export default function Journal() {
  return (
    <>
      <div className="h-screen bg-purple-200 flex flex-row">
        <SideBar />

        <div className="bg-white h-screen w-1/4 flex flex-col border-r-2">
          <div className=" justify-center bg-gray-100 py-5 text-center ">
            <input
              type="text"
              className="rounded-xl py-2 px-3 w-4/5 border-2 border-gray-300"
              placeholder="Search your Journal"
            />
          </div>
          <div className=" border-b-2 border-b-violet-400 flex justify-center bg-violet-300 text-center   cursor-pointer">
            <div className=" w-1/3 py-5  border-r-2 border-r-violet-400 ">
              Date
            </div>
            <div className=" w-2/3 py-5  border-l-violet-400">Entry</div>
          </div>
          <div className=" border-b-2 border-b-violet-400 flex justify-center bg-violet-300 text-center   cursor-pointer">
            <div className=" w-1/3 py-5  border-r-2 border-r-violet-400 ">
              Date
            </div>
            <div className=" w-2/3 py-5  border-l-violet-400">Entry</div>
          </div>
        </div>
        <div className="bg-white h-screen w-3/4 flex flex-col border-r-2">
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
            >
              +
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
