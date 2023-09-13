import React from "react";
import logo from "../assets/Logo.svg";
import headingBackground from "../assets/Poster.svg";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlayDuotone } from "react-icons/pi";
import { BsCalendar3 } from "react-icons/bs";
import {RiLogoutBoxRLine} from "react-icons/ri"
import { Link } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";

const Movies = () => {
  const Font = {
    fontFamily: 'Poppins, sans-serif'
  };

  const headingBckground = {
    backgroundImage: `url(${headingBackground})`,
    height: "100vh",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width:"100vh"
  };

  return (
    <div>
      <div className="bg-white w-fit m-auto p-4">
        <div className="flex">
          <div className="flex flex-col border border-gray-400 rounded-r-3xl p-3">
            <img src={logo} alt="movie-box logo" />
            <div className=" pt-7">
                <ul className="flex flex-col gap-10">
                <div className="flex gap-3 px-9">
                <GoHome />
                <li className="text-base font-normal relative bottom-1 text-justify">
                  <Link to="/homepage" target="_blank"
                  style={Font}
                >
                  Home
                  </Link>
                  </li>
              </div>
              <div className="flex gap-3 px-9">
                <BiCameraMovie />
                <li className="text-base font-normal relative bottom-1 text-justify">
                  <Link to="/" target="_blank"
                  style={Font}
                >
                  Movies
                  </Link>
                  </li>
              </div>
              <div className="flex gap-3 px-9">
                <PiMonitorPlayDuotone />
                <li className="text-base font-normal relative bottom-1 text-justify">
                  <Link to="/series" target="_blank"
                  style={Font}
                >
                  TV Series
                  </Link>
                  </li>
              </div>
              <div className="flex gap-3 px-9">
                <BsCalendar3 />
                <li className="text-base font-normal relative bottom-1 text-justify">
                  <Link to="/upcoming" target="_blank"
                  style={Font}
                >
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
              <a href="http://" className="text-[#BE123C] bg-[#BE123C33] text-center rounded-full text-sm p-2" style={Font}>Start playing</a>
            </div>
            <div className="flex m-auto mt-9 gap-1">
                <RiLogoutBoxRLine/>
                <a href="http://" className="no-underline text-[#666] text-sm" style={Font}>Log out</a>
            </div>
          </div>
          <div className="flex flex-col">
            <div style={headingBckground} className="border-[3px] rounded-2xl border-gray-200">
            <div className="flex justify-between mt-3">
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent border border-white text-white w-[350px] rounded-md h-10 p-3 m-auto mt-24"
              placeholder="what do you want to watch?"
              style={Font}
            />
            <AiOutlineSearch className="text-white relative top-28 right-64" onClick={Reflect}/>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
