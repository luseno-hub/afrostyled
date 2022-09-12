import React, { useEffect, useState } from "react";
import { Movie, MovieInfo, Category, Title } from "./MovieCard.Styled";

// Data Imports
import { API_URL } from "../../utils/constants";

export default function MovieCard() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Top Gun Maverick");
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <Movie
          backgroundImg={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
        >
          <MovieInfo>
            <Category>{movie.Type}</Category>
            <Title>{movie.Title}</Title>
          </MovieInfo>
        </Movie>
      ))}
    </>
  );
}
