import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Series() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getTrendingMovieData("movie");
  }, []);


  async function getTrendingMovieData(type) {
    try {
      const apiKey = '46de18fffa9edb1da899c9420d18e1c6';
      let resp = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&media_type=movie`);
      console.log(21, resp.data.results);

      setMovieData(resp.data.results);
     
    } catch (e) {

    } finally {

    }

  }



  return (
    <>
      <div className="background_container">
        <div className="button_container">
          <button onClick={() => {
            getTrendingMovieData("movie");
          }
          }>
            Trending Movies
          </button>
          <button onClick={() => {
            getTrendingMovieData("tv");
          }
          }>
            Series
          </button>
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
    </>

  );
}

export default Series;
