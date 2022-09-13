import { useState, useEffect } from "react";

import ItemCard from "./components/ItemCard";
import SearchBar from "./components/SearchBar";
import TestCard from "./components/TestCard";

// Global Imports
import {
  ContainerFluid,
  FlexItems,
} from "./components/ContainerMain/ContainerMain.Styled";
// Data Imports
import { API_URL } from "../src/utils/constants";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("ok");

  const getMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    getMovies("");
  }, []);

  return (
    <ContainerFluid>
      <SearchBar
        placeholder="Search Movies"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button
        onClick={() => {
          getMovies(searchTerm);
        }}
      >
        Search
      </button>

      {movies?.length > 0 ? (
        <FlexItems>
          {movies.map((movie, index) => {
            return (
              <TestCard
                key={index + movie.Poster} //Better Way to declare Keys?
                img={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/400"
                }
                Year={movie.Year}
                Type={movie.Type}
                Name={movie.Title}
              />
            );
          })}
        </FlexItems>
      ) : (
        <FlexItems>Loading</FlexItems>
      )}

      <FlexItems>
        <ItemCard />
      </FlexItems>
    </ContainerFluid>
  );
}

export default App;
