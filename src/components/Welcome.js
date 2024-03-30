import { useAuth0 } from "@auth0/auth0-react";

export function Welcome() {
  const { loginWithRedirect, isAuthenticated ,user} = useAuth0();
  return (
    <div className=" ml-10 py-5 px-2 bg-purple-400 h-1/5 my-5 rounded-lg shadow-2xl">
      <h1 className="text-center font-bold text-3xl text-white font-Poppins">
        Welcome {isAuthenticated?user.name:"User"}! 
      </h1>
      <p className=" text-center text-white text-xl">Let's make your day  ! ❤️</p>

      
    </div>
  );
}
