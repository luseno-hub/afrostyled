import styled from "styled-components";

export const Card = styled.div`
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.675rem;
  padding: 1rem;
  border: 1px solid #d0d0d0;
`;

export const CardMetadata = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: #757575;
  margin-bottom: 0.5rem;
`;

export const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1d1e1f;
  margin-bottom: 0.5rem;
`;

export const ProductImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #f5f5f5;
`;

export const ActionBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
