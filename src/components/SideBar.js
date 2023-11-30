import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBook,
  faBookOpenReader,
  faMusic,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="h-full bg-purple-400   px-5 mr-10 flex flex-col shadow-2xl max-w-[6rem]">
      <Link to="/">
        <div className="text-white text-3xl text-center mt-10 p-3 rounded-xl cursor-pointer hover:bg-purple-800">
          <FontAwesomeIcon title="Home" icon={faHouse} />
        </div>
      </Link>
      <Link to="/journal">
        <div className="text-white text-3xl text-center mt-10 p-3 rounded-xl cursor-pointer hover:bg-purple-800">
          <FontAwesomeIcon title="Journal" icon={faBook} />
        </div>
      </Link>
      <Link to="/book">
        <div className="text-white text-3xl text-center mt-10 p-3 rounded-xl cursor-pointer hover:bg-purple-800">
          <FontAwesomeIcon title="Books" icon={faBookOpenReader} />
        </div>
      </Link>
      <Link to="/songs">
        <div className="text-white text-3xl text-center mt-10 p-3 rounded-xl cursor-pointer hover:bg-purple-800">
          <FontAwesomeIcon title="Songs" icon={faMusic} />
        </div>
      </Link>
      <Link to="/graph">
        <div className="text-white text-3xl text-center mt-10 p-3 rounded-xl cursor-pointer hover:bg-purple-800">
          <FontAwesomeIcon title="Graph" icon={faChartSimple} />
        </div>
      </Link>
    </div>
  );
}
