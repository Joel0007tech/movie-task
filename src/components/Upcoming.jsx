import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Upcoming() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getUpcomingSeries("upcoming");
  }, []);


  async function getUpcomingSeries(type) {
    try {
      const apiKey = '46de18fffa9edb1da899c9420d18e1c6';
      let resp = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&media_type=movie`);
      console.log(21, resp.data.results);

      setMovieData(resp.data.results);
     
    } catch (e) {

    } finally {

    }

  }
  const Font = {
    fontFamily: "Poppins, sans-serif",
  };


  return (
    <>
    <div>
      <div className=' p-7 bg-slate-500'>
        <div className='flex p-7 gap-3 justify-center'>
        <h3 className='text-3xl font-bold' style={Font}>Upcoming Series</h3>
        <input type="text" name="" id="" placeholder='search for upcoming series here'
      className='w-[700px] p-2 border rounded-full' style={Font}/>
        </div>
        <div className='grid grid-cols-4 justify-items-center gap-3'>
          {movieData.map((item) =>
            <div className="flex flex-col">
              <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />
              <div className="flex flex-col">
                {item.original_title ? item.original_title : item.original_name}
                {/* {item.overview ? item.overview : item.overview} */}
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </>

  );
}

export default Upcoming;



