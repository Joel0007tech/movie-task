import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Reflect() {
  const [movie, setMovie] = useState(null);
  const apiKey = '46de18fffa9edb1da899c9420d18e1c6';
  const movieId = '215103';

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovieDetails();
  }, [apiKey, movieId]);

  return (
    <div>
      {movie ? (
        <>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          {/* Additional movie details */}
        </>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
}

export default Reflect;