import React from "react";
import logo from "../assets/Logo.svg";
import MovieCard from "./MovieCard";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlayDuotone } from "react-icons/pi";
import { BsCalendar3 } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import Spider from "../assets/Posterposterspider.svg";

const Movies = () => {
  const Font = {
    fontFamily: "Poppins, sans-serif",
  };

  const thirdPoster = {
    backgroundImage: `url(${Spider})`,
    backgroundSize: "cover",
    height: "300px",
    backgroundRepeat: "no-repeat",
  };

 
  return (
    <div>
      <div className=" w-fit  m-auto p-4 bg-gray-400 h-[1650px] sm:h-[1700px]">
        <div className="flex">
          <div className="flex flex-col border border-gray-400 rounded-r-3xl p-3">
            <img src={logo} alt="movie-box logo" />
            <div className=" pt-7">
              <ul className="flex flex-col gap-10">
                <div className="flex gap-3 px-9">
                  <GoHome />
                  <li className="text-base font-normal relative bottom-1 text-justify">
                    <Link to="/" target="_blank" style={Font}>
                      Home
                    </Link>
                  </li>
                </div>
                <div className="flex gap-3 px-9">
                  <BiCameraMovie />
                  <li className="text-base font-normal relative bottom-1 text-justify">
                    <Link to="/movies" target="_blank" style={Font}>
                      Movies
                    </Link>
                  </li>
                </div>
                <div className="flex gap-3 px-9">
                  <PiMonitorPlayDuotone />
                  <li className="text-base font-normal relative bottom-1 text-justify">
                    <Link to="/series" target="_blank" style={Font}>
                      TV Series
                    </Link>
                  </li>
                </div>
                <div className="flex gap-3 px-9">
                  <BsCalendar3 />
                  <li className="text-base font-normal relative bottom-1 text-justify">
                    <Link to="/upcoming" target="_blank" style={Font}>
                      Upcoming Series
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
            <div className="flex flex-col border border-red-700 rounded-md w-fit bg-[#f5c8d36b] m-auto p-4 gap-3 mt-9">
              <p style={Font} className="text-sm text-[#666]">
                Play movie quizes
                <br />
                and earn
                <br />
                free tickets
              </p>
              <p style={Font} className="text-sm text-[#666]">
                50k people are playing
                <br />
                now
              </p>
              <a
                href="http://"
                className="text-[#BE123C] bg-[#BE123C33] text-center rounded-full text-sm p-2"
                style={Font}
              >
                Start playing
              </a>
            </div>
            <div className="flex m-auto mt-9 gap-1">
              <RiLogoutBoxRLine />
              <a
                href="http://"
                className="no-underline text-[#666] text-sm"
                style={Font}
              >
                Log out
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:bg-red-500">
            <div style={thirdPoster}>
              <div className="flex justify-between mt-3 sm:pl-3">
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-transparent border border-white text-black w-[650px] sm:w-[300px]
                   bg-white rounded-md h-10 p-3 m-auto mt-24 relative bottom-3"
                  placeholder="what do you want to watch?"
                  style={Font}
                />
                <AiOutlineSearch className="text-black relative top-24 right-96 sm:right-10 cursor-pointer" />
              </div>
              <MovieCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;


