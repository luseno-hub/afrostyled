import styled from "styled-components";

export const ContainerFluid = styled.div`
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 768px) {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export const FlexItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  & + & {
    margin-top: 4rem;
  }
`;
