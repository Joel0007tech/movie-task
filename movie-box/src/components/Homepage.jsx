import React from "react";
import logo from "../assets/Logo.svg";
import imdb from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg";
import pignet from "../assets/PngItem_1381056 1.svg";
import headingBackground from "../assets/Poster.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { LuPlayCircle } from "react-icons/lu";
import { BsSuitHeart } from "react-icons/bs";
import stranger from "../assets/Posterstranger.svg";

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
    width: "1500px",
    backgroundRepeat: "no-repeat",
  };
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
      <section className="bg-black w-full">
        <div className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col">
          <div style={strangerThings} className="flex">
            <p className="bg-slate-300 rounded-full bg-transparent" style={Font}>TV SERIES</p>
            <BsSuitHeart/>
            </div>
            <p className="text-[#9CA3AF] font-normal text-xs" style={Font}>USA, 2016 - Current</p>
            <p className="text-[#111827] font-bold text-lg" style={Font}>Stranger things</p>
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
    </div>
  );
};

export default Homepage;
