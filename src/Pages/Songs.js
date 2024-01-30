import SideBar from "../components/SideBar";
import SongsNav from "../components/SongsNav";

export default function Songs() {
  return (
    <>
      <div className="h-screen bg-purple-200 flex flex-row">
        <SideBar />
        <div>
          <SongsNav></SongsNav>
        </div>
      </div>
    </>
  );
}
