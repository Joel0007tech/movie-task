import React from "react";
import logo from "../assets/Logo.svg";
import headingBackground from "../assets/Poster.svg";
import imdb from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg";
import pignet from "../assets/PngItem_1381056 1.svg";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlayDuotone } from "react-icons/pi";
import { BsCalendar3 } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsSuitHeart } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import stranger from "../assets/Posterstranger.svg";
import Batman from "../assets/Posterbatman.svg";
import Spider from "../assets/Posterposterspider.svg";
import Dunkirk from "../assets/PosterposterDunkkirk.svg";
import DontBreathe from "../assets/PosterDont-breathe.svg";
import Dune from "../assets/Posterdunc.svg";
import Notime from "../assets/Posterno-time.svg";
import Shangchi from "../assets/Postershang-chi.svg"

const Movies = () => {
  const Font = {
    fontFamily: "Poppins, sans-serif",
  };

  const DuneImg = {
    backgroundImage: `url(${Dune})`,
    height: "300px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  const BreatheImg = {
    backgroundImage: `url(${DontBreathe})`,
    height: "300px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  const Timeless = {
    backgroundImage: `url(${Notime})`,
    height: "300px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  const Shang = {
    backgroundImage: `url(${Shangchi})`,
    height: "300px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };


  const strangerThings = {
    backgroundImage: `url(${stranger})`,
    backgroundSize: "contain",
    height: "300px",
    backgroundRepeat: "no-repeat",
  };

  const secondPoster = {
    backgroundImage: `url(${Batman})`,
    backgroundSize: "cover",
    height: "300px",
    backgroundRepeat: "no-repeat",
  };
  const thirdPoster = {
    backgroundImage: `url(${Spider})`,
    backgroundSize: "cover",
    height: "300px",
    backgroundRepeat: "no-repeat",
  };
  const fourthPoster = {
    backgroundImage: `url(${Dunkirk})`,
    backgroundSize: "cover",
    height: "300px",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div className=" bg-gray-300 w-fit h-[1000px] m-auto p-4">
        <div className="flex">
          <div className="flex flex-col border border-gray-400 rounded-r-3xl p-3">
            <img src={logo} alt="movie-box logo" />
            <div className=" pt-7">
              <ul className="flex flex-col gap-10">
                <div className="flex gap-3 px-9">
                  <GoHome />
                  <li className="text-base font-normal relative bottom-1 text-justify">
                    <Link to="/homepage" target="_blank" style={Font}>
                      Home
                    </Link>
                  </li>
                </div>
                <div className="flex gap-3 px-9">
                  <BiCameraMovie />
                  <li className="text-base font-normal relative bottom-1 text-justify">
                    <Link to="/" target="_blank" style={Font}>
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
          <div className="flex flex-col border rounded-t-md">
            <div
              style={thirdPoster}
            >
              <div className="flex justify-between mt-3">
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-transparent border border-white text-black w-[500px] bg-white rounded-md h-10 p-3 m-auto mt-24 relative bottom-3"
                  placeholder="what do you want to watch?"
                  style={Font}
                />
                <AiOutlineSearch className="text-black relative top-24 right-60" />
              </div>
              <div className="flex flex-col gap-5 pt-6 bg-black">
        <div className="flex gap-5 justify-center">
          <div className="flex flex-col" data-testid: movie-card>
          <div style={strangerThings} data-testid: movie-poster>
          <div className="flex justify-between p-2">
            <BsSuitHeart className="text-white"/>
            </div>
            </div>
            <p className="text-[#9CA3AF] font-normal text-xs" style={Font}>USA, 2016 - Current</p>
            <p className="text-[#111827] font-bold text-lg" style={Font} data-testid: movie-title>Stranger things</p>
            <div className="flex gap-4">
            <div className="flex gap-5">
              <img src={imdb} alt="imdbtmv" />
              <p className="text-[#111827]" style={Font}>
                86.0/100
              </p>
            </div>
            <div className="flex gap-5">
              <img src={pignet} alt="pigneeterre" />
              <p className="text-[#111827]" style={Font}>
                97%
              </p>
            </div>
          </div>
          <p style={Font} className="text-[#9CA3AF] text-xs">Action, Adventure, Horror</p>
          </div>
          <div className="flex flex-col" data-testid: movie-card>
          <div style={secondPoster} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <BsSuitHeart className="text-white"/>
            </div>
            </div>
            <p className="text-[#9CA3AF] font-normal text-xs" style={Font}>USA, 2016 - Current</p>
            <p className="text-[#111827] font-bold text-lg" style={Font} data-testid: movie-title>Batman Begins</p>
            <div className="flex gap-4">
            <div className="flex gap-5">
              <img src={imdb} alt="imdbtmv" />
              <p className="text-[#111827]" style={Font}>
                86.0/100
              </p>
            </div>
            <div className="flex gap-5">
              <img src={pignet} alt="pigneeterre" />
              <p className="text-[#111827]" style={Font}>
                97%
              </p>
            </div>
          </div>
          <p style={Font} className="text-[#9CA3AF] text-xs">Action, Adventure, Horror</p>
          </div>
          <div className="flex flex-col" data-testid: movie-card>
          <div style={thirdPoster} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <BsSuitHeart className="text-white"/>
            </div>
            </div>
            <p className="text-[#9CA3AF] font-normal text-xs" style={Font}>USA, 2016 - Current</p>
            <p className="text-[#111827] font-bold text-lg" style={Font} data-testid: movie-title>Spiderman </p>
            <div className="flex gap-4">
            <div className="flex gap-5">
              <img src={imdb} alt="imdbtmv" />
              <p className="text-[#111827]" style={Font}>
                86.0/100
              </p>
            </div>
            <div className="flex gap-5">
              <img src={pignet} alt="pigneeterre" />
              <p className="text-[#111827]" style={Font}>
                97%
              </p>
            </div>
          </div>
          <p style={Font} className="text-[#9CA3AF] text-xs">Action, Adventure, Horror</p>
          </div>
          <div className="flex flex-col" data-testid: movie-card>
          <div style={fourthPoster} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <BsSuitHeart className="text-white"/>
            </div>
            </div>
            <p className="text-[#9CA3AF] font-normal text-xs" style={Font}>USA, 2016 - Current</p>
            <p className="text-[#111827] font-bold text-lg" style={Font} data-testid: movie-title>Dunkirk</p>
            <div className="flex gap-4">
            <div className="flex gap-5">
              <img src={imdb} alt="imdbtmv" />
              <p className="text-[#111827]" style={Font}>
                86.0/100
              </p>
            </div>
            <div className="flex gap-5">
              <img src={pignet} alt="pigneeterre" />
              <p className="text-[#111827]" style={Font}>
                97%
              </p>
            </div>
          </div>
          <p style={Font} className="text-[#9CA3AF] text-xs">Action, Adventure, Horror</p>
          </div>
        </div>
        <div className="flex gap-5 justify-center">
        <div className="flex flex-col">
          <div style={DuneImg} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <BsSuitHeart className="text-white"/>
            </div>
            </div>
            <p className="text-[#9CA3AF] font-normal text-xs" style={Font}>USA, 2016 - Current</p>
            <p className="text-[#111827] font-bold text-lg" style={Font} data-testid: movie-title>Dune</p>
            <div className="flex gap-4">
            <div className="flex gap-5">
              <img src={imdb} alt="imdbtmv" />
              <p className="text-[#111827]" style={Font}>
                86.0/100
              </p>
            </div>
            <div className="flex gap-5">
              <img src={pignet} alt="pigneeterre" />
              <p className="text-[#111827]" style={Font}>
                97%
              </p>
            </div>
          </div>
          <p style={Font} className="text-[#9CA3AF] text-xs">Action, Adventure, Horror</p>
          </div>
          <div className="flex flex-col" data-testid: movie-card>
          <div style={BreatheImg} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <BsSuitHeart className="text-white"/>
            </div>
            </div>
            <p className="text-[#9CA3AF] font-normal text-xs" style={Font}>USA, 2016 - Current</p>
            <p className="text-[#111827] font-bold text-lg" style={Font} data-testid: movie-title>Don't Breathe</p>
            <div className="flex gap-4">
            <div className="flex gap-5">
              <img src={imdb} alt="imdbtmv" />
              <p className="text-[#111827]" style={Font}>
                86.0/100
              </p>
            </div>
            <div className="flex gap-5">
              <img src={pignet} alt="pigneeterre" />
              <p className="text-[#111827]" style={Font}>
                97%
              </p>
            </div>
          </div>
          <p style={Font} className="text-[#9CA3AF] text-xs">Action, Adventure, Horror</p>
          </div>
          <div className="flex flex-col" data-testid: movie-card>
          <div style={Timeless} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <BsSuitHeart className="text-white"/>
            </div>
            </div>
            <p className="text-[#9CA3AF] font-normal text-xs" style={Font}>USA, 2016 - Current</p>
            <p className="text-[#111827] font-bold text-lg" style={Font} data-testid: movie-title>No Time</p>
            <div className="flex gap-4">
            <div className="flex gap-5">
              <img src={imdb} alt="imdbtmv" />
              <p className="text-[#111827]" style={Font}>
                86.0/100
              </p>
            </div>
            <div className="flex gap-5">
              <img src={pignet} alt="pigneeterre" />
              <p className="text-[#111827]" style={Font}>
                97%
              </p>
            </div>
          </div>
          <p style={Font} className="text-[#9CA3AF] text-xs">Action, Adventure, Horror</p>
          </div>
          <div className="flex flex-col" data-testid: movie-card>
          <div style={Shang} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <BsSuitHeart className="text-white"/>
            </div>
            </div>
            <p className="text-[#9CA3AF] font-normal text-xs" style={Font}>USA, 2016 - Current</p>
            <p className="text-[#111827] font-bold text-lg" style={Font} data-testid: movie-title>Shang-chi</p>
            <div className="flex gap-4">
            <div className="flex gap-5">
              <img src={imdb} alt="imdbtmv" />
              <p className="text-[#111827]" style={Font}>
                86.0/100
              </p>
            </div>
            <div className="flex gap-5">
              <img src={pignet} alt="pigneeterre" />
              <p className="text-[#111827]" style={Font}>
                97%
              </p>
            </div>
          </div>
          <p style={Font} className="text-[#9CA3AF] text-xs">Action, Adventure, Horror</p>
          </div>
        </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
