import styled from "styled-components";

export const Movie = styled.article`
  width: 100%;
  height: 30rem;
  border-radius: 0.5rem;
  background-color: #f6f6f6;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 30%;
    z-index: 2;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
  }

  @media (min-width: 768px) {
    width: calc((100% - 3rem) / 3);
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  max-width: 100%;
  z-index: 3;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Category = styled.span`
  display: inline-block;
  color: #f4f4f4;
  font-weight: 500;
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Title = styled.h3`
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
`;
