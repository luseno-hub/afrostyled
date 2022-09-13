import React from "react";
import {
  Image,
  CardContainer,
  MovieName,
  MovieType,
  MovieYear,
} from "./TestCard.Styled";

export default function TestCard({ img, Year, Type, Name }) {
  return (
    <CardContainer>
      <Image src={img} />
      <MovieYear>{Year}</MovieYear>
      <MovieName>{Name}</MovieName>
      <MovieType>{Type}</MovieType>
    </CardContainer>
  );
}
