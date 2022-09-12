import { useState } from "react";
import ItemCard from "./components/ItemCard";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";

// Global Imports
import {
  ContainerFluid,
  FlexItems,
} from "./components/ContainerMain/ContainerMain.Styled";

function App() {
  return (
    <ContainerFluid>
      <FlexItems>
        <ItemCard />
      </FlexItems>
      <FlexItems>
        <SearchBar />
        <MovieCard />
      </FlexItems>
    </ContainerFluid>
  );
}

export default App;
