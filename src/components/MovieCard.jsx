import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const MovieCard = () => {
  const Font = {
    fontFamily: "Poppins, sans-serif",
  };

  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
    window.scroll(0, 0);
  }, []);

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=46de18fffa9edb1da899c9420d18e1c6`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching (Status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  if (error) {
    return (
      <div className="text-white">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            className="border-[4px] rounded-full border-white"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                <p data-testid="movie-title" className="text-white text-3xl font-bold text-center" style={Font}>{movieDetails.title}</p>
                <p data-testid="movie-release-date" className="text-white text-center" style={Font}>
                  {movieDetails.release_date}
                </p>
              </div>
              {/* <div className="text-white text-center" data-testid="movie-runtime" style={Font}>{movieDetails.runtime} Minutes</div> */}
            </div>
          </div>

          <div>
            <p className="text-white text-center" data-testid="movie-overview" style={Font}>{movieDetails.overview}</p>
            <div className="flex justify-center gap-6 mt-6">
              <p>
                <a className="bg-red-700 p-2 text-white px-5 border rounded-md" style={Font} href="">
                  See Showtimes
                </a>
              </p>
              <a className="bg-red-700 p-2 text-white px-5 border rounded-md" style={Font} href="">
                More watch Options
              </a>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;