import React, { useEffect, useState } from "react";
import {
  Card,
  CardMetadata,
  ProductName,
  ProductImage,
  ActionBar,
  ProductPrice,
  IsStocked,
} from "./ItemCard.Styled";
import Button from "../Button";

// Data Imports
import ProductsData from "../../data/products.json";

export default function ItemCard({ category, price, stocked, name }) {
  const handleClick = () => {
    alert("Clicked Button");
  };

  return (
    <>
      {ProductsData.map((product) => {
        return (
          <Card>
            <CardMetadata>{product.category}</CardMetadata>
            <ProductName>{product.name}</ProductName>
            <IsStocked>
              {product.stocked ? "In Stock" : "Out of Stock"}
            </IsStocked>
            <ProductImage />
            <ProductPrice>{product.price}</ProductPrice>
            <ActionBar>
              <Button primary title="Buy Now" onClick={handleClick} />
              <Button title="Add to cart" />
            </ActionBar>
          </Card>
        );
      })}
    </>
  );
}
