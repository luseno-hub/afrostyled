import { useState, useEffect } from "react";

import ItemCard from "./components/ItemCard";
import SearchBar from "./components/SearchBar";
import TestCard from "./components/TestCard";

import FilterableProductTable from "./components/FilterableProductTable";

// Global Imports
import {
  ContainerFluid,
  FlexItems,
} from "./components/ContainerMain/ContainerMain.Styled";
// Data Imports
import { API_URL } from "../src/utils/constants";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

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
      <FlexItems>
        <FilterableProductTable products={PRODUCTS} />
      </FlexItems>

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
