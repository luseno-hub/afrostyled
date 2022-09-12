import React, { useEffect, useState } from "react";
import { Movie, MovieInfo, Category, Title } from "./MovieCard.Styled";

// Data Imports
import { API_URL } from "../../utils/constants";

const movie1 = {
  Title: "Top Gun: Maverick",
  Year: "2022",
  imdbID: "tt1745960",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
};

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
