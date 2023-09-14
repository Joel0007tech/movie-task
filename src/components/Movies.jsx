import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from "../assets/Logo.svg";

import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlayDuotone } from "react-icons/pi";
import { BsCalendar3 } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import stranger from "../assets/Posterstranger.svg";
import Batman from "../assets/Posterbatman.svg";
import Spider from "../assets/Posterposterspider.svg";
import Dunkirk from "../assets/PosterPosterDunkkirk.svg";
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

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getTrendingMovieData("movie");
  }, []);

  async function getTrendingMovieData(type) {
    try {
      const apiKey = '46de18fffa9edb1da899c9420d18e1c6';
      let resp = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&media_type=movie`);
      console.log(21, resp.data.results);

      setMovieData(resp.data.results);
     
    } catch (e) {

    } finally {

    }

  }

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
              <div className='grid grid-cols-3 justify-items-center gap-3'>
          {movieData.map((item) =>
            <div className="movie_item">
              <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />
              <div className="movie_name">
                {item.original_title ? item.original_title : item.original_name}

              </div>
            </div>
          )}
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
