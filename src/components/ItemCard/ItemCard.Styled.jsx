import styled from "styled-components";

export const Card = styled.div`
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.675rem;
  padding: 0.5rem;
  border: 1px solid #f2f2f2;
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

export const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1d1e1f;
`;

export const Stocked = styled.span`
  display: inline-block;
  background: ${(props) => (props.isStocked ? "#e5fff1" : "#fff1f5")};
  color: ${(props) => (props.isStocked ? "#00d563" : "#f02052")};
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 2rem;
`;

export const ActionBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
