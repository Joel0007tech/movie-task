import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from "../assets/Logo.svg";
import imdb from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg"
import pignet from "../assets/PngItem_1381056 1.svg"
import headingBackground from "../assets/Poster.svg";
import { AiOutlineSearch, AiOutlineRight, AiFillYoutube } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { LuPlayCircle } from "react-icons/lu";
import { BsTwitter} from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";
import {BiLogoInstagram} from "react-icons/bi";



const Homepage = () => {
  const headingBckground = {
    backgroundImage: `url(${headingBackground})`,
    height: "100vh",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  
  const Font = {
    fontFamily: " 'DM Sans', sans-serif",
  };
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getUpcomingSeries("upcoming");
  }, []);


  async function getUpcomingSeries(type) {
    try {
      const apiKey = '46de18fffa9edb1da899c9420d18e1c6';
      let resp = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&media_type=movie`);
      console.log(21, resp.data.results);

      setMovieData(resp.data.results);
     
    } catch (e) {

    } finally {

    }

  }

  return (
    <div>
      <div style={headingBckground} className='sm:w-[900px] sm:h-[100px]'>
        <div className="flex p-5 justify-around">
          <img src={logo} alt="logo-hero" />
          <div className="flex justify-between mt-3">
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent border border-white text-white w-[500px] rounded-md h-10 p-3"
              placeholder="what do you want to watch?"
              style={Font}
            />
            <AiOutlineSearch className="text-white relative top-4 right-5" />
          </div>
          <div className="flex mt-3 gap-8">
            <a href="#" className="text-white no-underline" style={Font}>
              Sign in
            </a>
            <HiMenuAlt4 className=" bg-[#BE123C] text-white rounded-full w-[30px] h-[30px] cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col 2xl:px-36 gap-5 2xl:py-20 sm:relative sm:bottom-12">
          <h3 className="text-white text-5xl font-bold" style={Font}>
            John Wick 3: <br />
            Parabellum
          </h3>
          <div className="flex gap-4">
            <div className="flex gap-5">
              <img src={imdb} alt="imdbtmv" />
              <p className="text-white" style={Font}>
                86.0/100
              </p>
            </div>
            <div className="flex gap-5">
              <img src={pignet} alt="pigneeterre" />
              <p className="text-white" style={Font}>
                97%
              </p>
            </div>
          </div>
          <p className="text-white" style={Font}>
            John Wick is on the run after killing a member
            <br />
            of the international assassins' guild, and with
            <br />
            a $14 million price tag on his head, he is the
            <br />
            target of hit men and women everywhere.
          </p>
          <div className="bg-[#BE123C] rounded-md flex w-fit p-2 gap-3 2xl:mt-9">
            <LuPlayCircle className="mt-[5px] text-white" />
            <a href="http://" className="text-white" style={Font}>
              WATCH TRAILER
            </a>
          </div>
        </div>
      </div>
      <section className="w-full">
        <div className=' p-7 bg-slate-500 relative bottom-28 sm:w-[900px]'>
        <div className='flex p-7 gap-3 justify-around'>
        <h3 className='text-3xl font-bold' style={Font}>Featured Movie</h3>
        <input type="text" name="" id="" placeholder='search for upcoming series here'
      className='w-[700px] p-2 border rounded-full' style={Font}/>
      <div className="flex">
          <p className="text-[#BE123C] text-md font-normal cursor-pointer">Sort more </p>
          <AiOutlineRight className="text-[#BE123C] relative top-1"/>
          </div>
        </div>
        <div className='grid grid-cols-4 sm:grid sm:grid-cols-3 justify-items-center gap-3'>
          {movieData.slice(0,10).map((item) =>
            <div className="flex flex-col">
              <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} 
              className=" border-[2px] rounded-full" data-testid: movie-poster/>
              <div className="flex flex-col gap-2">
                <p className='text-white font-bold text-center' style={Font} data-testid: movie-title >
                  {item.original_title ? item.original_title : item.original_name}</p>
                <p className='text-white text-center' style={Font} data-testid: movie-release-date >
                  {item.release_date ? item.release_date : item.release_date}</p>
              </div>
            </div>
          )}
        </div>
        </div>
      </section>
      <footer className='relative bottom-10'>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center gap-10">
            < BiLogoFacebookSquare className="text-3xl"/>
          <BiLogoInstagram className="text-3xl"/>
          <BsTwitter className="text-3xl"/>
          <AiFillYoutube className="text-3xl"/>
          </div>
          <div className="flex justify-center gap-10">
            <p style={Font} className="text-[#111827] text-md">Conditions of Use</p>
            <p style={Font} className="text-[#111827] text-md">Privacy & Policy</p>
            <p style={Font} className="text-[#111827] text-md">Press Room</p>
          </div>
          <div className="flex justify-center">
            <p style={Font} className="text-[#6B7280] text-md">© 2021 MovieBox by Adriana Eka Prayudha  </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

