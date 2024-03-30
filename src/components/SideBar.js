import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";
import {
  faHouse,
  faBook,
  faBookOpenReader,
  faMusic,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function SideBar() {
  const { logout } = useAuth0();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (


    <div className="h-full bg-purple-400   px-5  flex flex-col shadow-2xl max-w-[6rem]">

     

     {
      isAuthenticated?<button  className="bg-white w-12 rounded-lg mt-8" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
         Log Out
       </button>:<button className="bg-white w-12 rounded-lg mt-8 p-1" onClick={() => loginWithRedirect()}>Log In</button>
      //   isAuthenticated?(<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      //   Log Out
      // </button>):(<button onClick={() => loginWithRedirect()}>Log In</button>);
      }
      



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
