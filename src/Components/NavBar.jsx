import { Logo, NotificationsIcon ,ProfileIcon, SearchIcon, ShopIcon } from "../public/Svgs";
import { useState } from "react";
import Categories from "./Categories";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [user , setUser] = useState({
    id : 1,
    name : "name",
    email : "email",
    password : "password" ,
    role :  3, // 1 for costumer , 2 for vendeur , 3 for admin
  }) // user object [id, name, email, password, ...] (Redux or Context API can be used here)
  const [isAuth, setIsAuth] = useState(false); // check if user is authenticated (Redux or Context API can be used here)
  const [search, setSearch] = useState("");
  return (
    <div>
      <div
        className="sm:px-5 sm:py-1 px-3 py-2 w-calc(100% - 40px) 
        bg-white flex flex-col justify-start items-start pb-2"
      >
        <div className="flex w-full flex-row justify-between sm:gap-8 gap-1 items-center">
          <div className="flex items-center justify-start gap-2">
            <Link to="/">
            <Logo />
            </Link>
            <h1 className="txt sm:inline-block hidden uppercase">Logo</h1>
          </div>

          <form onSubmit={()=>{
            navigate(`/search/${search}`)
          }} className="relative gg:w-full w-[60%]">
            <SearchIcon />
            {/* search bar */}
            <input
              type="text"
              placeholder="Rechercher"
              onChange={(e) => {setSearch(e.target.value)}}
              className="border-[1px] border-black rounded-2xl ps-4 py-1 w-full focus:outline-none focus:border-[1.5px]"
            />
            {/* S'inscrier button */}
          </form>
          {isAuth === false ? (
            <Link
              to="/login"
              className="bg-[#D9D9D9] text-black text-[11px] gg:text-md sm:px-8 px-1 pt-1 pb-[6px] rounded-2xl"
            >
              S'inscrire
            </Link>
          ) : (
            <Link
              to="/profile">
              <ProfileIcon />
            </Link>
          )}
          {
           (isAuth && user.role === 1) ? 
            <Link to="/card">
            <div className="hover:cursor-pointer">
              <ShopIcon />
            </div>
          </Link> : 
          (isAuth && (user.role === 2 || user.role === 3) ) ?
          <Link to="/notifications">
          <div className="hover:cursor-pointer">
            <NotificationsIcon />
          </div>
        </Link> : 
        <Link to="/card">
        <div className="hover:cursor-pointer">
          <ShopIcon />
        </div>
      </Link>
        
          }
         
        </div>
        <Categories />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
