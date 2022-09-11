import { useState } from "react";
import ItemCard from "./components/ItemCard";
import MovieCard from "./components/MovieCard";

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
        <MovieCard />
      </FlexItems>
    </ContainerFluid>
  );
}

export default App;
