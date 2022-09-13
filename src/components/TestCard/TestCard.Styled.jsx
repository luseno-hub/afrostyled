import styled from "styled-components";

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  height: auto;
`;

export const Image = styled.img`
  display: block;
  width: 10rem;
  height: 16rem;
  border-radius: 1rem;
`;

export const MovieType = styled.span`
  display: inline-block;
  color: #000;
  font-weight: 500;
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const MovieYear = styled.span`
  display: inline-block;
  color: #000;
  font-weight: 500;
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const MovieName = styled.h3`
  color: #000;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
`;
