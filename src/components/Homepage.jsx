import React from "react";
import logo from "../assets/Logo.svg";
import imdb from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg";
import pignet from "../assets/PngItem_1381056 1.svg";
import headingBackground from "../assets/Poster.svg";
import { AiOutlineSearch, AiOutlineRight, AiFillYoutube } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { LuPlayCircle } from "react-icons/lu";
import { BsSuitHeart, BsTwitter} from "react-icons/bs";
import stranger from "../assets/Posterstranger.svg";
import { BiLogoFacebookSquare } from "react-icons/bi";
import {BiLogoInstagram} from "react-icons/bi";
import Batman from "../assets/Posterbatman.svg";
import Spider from "../assets/Posterposterspider.svg";
import Dunkirk from "../assets/PosterPosterDunkkirk.svg"

const Homepage = () => {
  const headingBckground = {
    backgroundImage: `url(${headingBackground})`,
    height: "100vh",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  const strangerThings = {
    backgroundImage: `url(${stranger})`,
    backgroundSize: "contain",
    height: "300px",
    backgroundRepeat: "no-repeat",
  };
  const secondPoster ={
    backgroundImage: `url(${Batman})`,
    backgroundSize: "contain",
    height: "300px",
    backgroundRepeat: "no-repeat",
  }
  const thirdPoster ={
    backgroundImage: `url(${Spider})`,
    backgroundSize: "contain",
    height: "300px",
    backgroundRepeat: "no-repeat",
  }
  const fourthPoster ={
    backgroundImage: `url(${Dunkirk})`,
    backgroundSize: "contain",
    height: "300px",
    backgroundRepeat: "no-repeat",
  }


  const Font = {
    fontFamily: " 'DM Sans', sans-serif",
  };

  return (
    <div>
      <div style={headingBckground}>
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
        <div className="flex flex-col px-36 gap-5 py-20">
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
          <div className="bg-[#BE123C] rounded-md flex w-fit p-2 gap-3 mt-9">
            <LuPlayCircle className="mt-[5px] text-white" />
            <a href="http://" className="text-white" style={Font}>
              WATCH TRAILER
            </a>
          </div>
        </div>
      </div>
      <section className="w-full relative bottom-12">
        <div className="flex justify-around">
          <p style={Font} className="font-bold text-4xl">Featured Movie</p>
          <div className="flex">
          <p className="text-[#BE123C] text-md font-normal cursor-pointer">Sort more </p>
          <AiOutlineRight className="text-[#BE123C] relative top-1"/>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
        <div className="flex gap-5 justify-center">
          <div className="flex flex-col" data-testid: movie-card>
          <div style={strangerThings} data-testid: movie-poster>
          <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
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
            <p className="text-[#111827] font-bold text-lg" style={Font} data-testid: movie-title>Spider-Man</p>
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
        <div className="flex flex-col" data-testid: movie-card>
          <div style={strangerThings} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
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
          <div style={strangerThings} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
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
          <div style={strangerThings} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
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
          <div style={strangerThings} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
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
        </div>
        <div className="flex gap-5 justify-center">
        <div className="flex flex-col" data-testid: movie-card>
          <div style={strangerThings} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
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
          <div style={strangerThings} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
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
          <div style={strangerThings} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
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
          <div style={strangerThings} data-testid: movie-poster>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
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
        </div>
        </div>
      </section>
      <footer>
        <div className="flex flex-col gap-1s">
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
