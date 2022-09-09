import styled from "styled-components";

export const ActionButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#2473ea" : "transparent")};
  color: ${(props) => (props.primary ? "#fff" : "#2473ea")};
  border: 2px solid #2473ea;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
