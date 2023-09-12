import React from "react";
import logo from "../assets/Logo.svg";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlayDuotone } from "react-icons/pi";
import { BsCalendar3 } from "react-icons/bs";
import {RiLogoutBoxRLine} from "react-icons/ri"

const Movies = () => {
  const Font = {
    fontFamily: 'Poppins, sans-serif'
  };
  return (
    <div>
      <div className="bg-white w-fit m-auto p-4">
        <div className="flex">
          <div className="flex flex-col border border-gray-400 rounded-r-3xl p-3">
            <img src={logo} alt="movie-box logo" />
            <div className="flex flex-col gap-10 pt-7">
              <div className="flex gap-3 px-9">
                <GoHome />
                <a
                  href="http://"
                  className="text-base font-normal relative bottom-1 text-justify"
                  style={Font}
                >
                  Home
                </a>
              </div>
              <div className="flex gap-3 px-9">
                <BiCameraMovie />
                <a
                  href="http://"
                  className="text-base font-normal relative bottom-1 text-justify"
                  style={Font}
                >
                  Movies
                </a>
              </div>
              <div className="flex gap-3 px-9">
                <PiMonitorPlayDuotone />
                <a
                  href="http://"
                  className="text-base font-normal relative bottom-1 text-justify"
                  style={Font}
                >
                  TV Series
                </a>
              </div>
              <div className="flex gap-3 px-9">
                <BsCalendar3 />
                <a
                  href="http://"
                  className=" text-base font-normal relative bottom-1 text-justify"
                  style={Font}
                >
                  Upcoming
                </a>
              </div>
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
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
