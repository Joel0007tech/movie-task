import React from 'react';
import stranger from "../assets/Posterstranger.svg";
import imdb from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg";
import pignet from "../assets/PngItem_1381056 1.svg";
import { BsSuitHeart} from "react-icons/bs";

const Upcoming = () => {

    const Font = {
        fontFamily: 'Poppins, sans-serif'
      };

      const strangerThings = {
        backgroundImage: `url(${stranger})`,
        backgroundSize: "contain",
        height: "300px",
        backgroundRepeat: "no-repeat",
      };

  return (
    <div>
         <div className='bg-black w-full h-full p-7'>
            <div className='flex gap-3'>
            <h3 style={Font} className='text-white text-4xl'>Upcoming Series</h3>
            <input type="text" name="" id="" placeholder='search upcomings here'
             className='w-[900px] border rounded-md text-[#111827] p-3' style={Font}/>
            </div> 
            <div className="flex flex-col gap-5 pt-6">
        <div className="flex gap-5 justify-center">
          <div className="flex flex-col">
          <div style={strangerThings}>
          <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
            <BsSuitHeart className="text-white"/>
            </div>
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
          <div className="flex flex-col">
          <div style={strangerThings}>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
            <BsSuitHeart className="text-white"/>
            </div>
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
          <div className="flex flex-col">
          <div style={strangerThings}>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
            <BsSuitHeart className="text-white"/>
            </div>
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
          <div className="flex flex-col">
          <div style={strangerThings}>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
            <BsSuitHeart className="text-white"/>
            </div>
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
        <div className="flex gap-5 justify-center">
        <div className="flex flex-col">
          <div style={strangerThings}>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
            <BsSuitHeart className="text-white"/>
            </div>
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
          <div className="flex flex-col">
          <div style={strangerThings}>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
            <BsSuitHeart className="text-white"/>
            </div>
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
          <div className="flex flex-col">
          <div style={strangerThings}>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
            <BsSuitHeart className="text-white"/>
            </div>
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
          <div className="flex flex-col">
          <div style={strangerThings}>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
            <BsSuitHeart className="text-white"/>
            </div>
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
        <div className="flex gap-5 justify-center">
        <div className="flex flex-col">
          <div style={strangerThings}>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
            <BsSuitHeart className="text-white"/>
            </div>
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
          <div className="flex flex-col">
          <div style={strangerThings}>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
            <BsSuitHeart className="text-white"/>
            </div>
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
          <div className="flex flex-col">
          <div style={strangerThings}>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
            <BsSuitHeart className="text-white"/>
            </div>
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
          <div className="flex flex-col">
          <div style={strangerThings}>
            <div className="flex justify-between p-2">
            <p className="bg-slate-400 border rounded-full text-sm p-1" style={Font}>TV SERIES</p>
            <BsSuitHeart className="text-white"/>
            </div>
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
        </div>
    </div>
  )
}

export default Upcoming