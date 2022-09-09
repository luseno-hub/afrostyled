import React, { useEffect, useState } from "react";
import {
  Card,
  CardMetadata,
  ProductName,
  ProductImage,
  ActionBar,
  ProductPrice,
  Stocked,
} from "./ItemCard.Styled";
import Button from "../Button";

// Data Imports
import ProductsData from "../../data/products.json";

export default function ItemCard() {
  const handleClick = () => {
    alert("Clicked Button");
  };

  return (
    <>
      {ProductsData.map((product, index) => {
        return (
          <Card>
            <CardMetadata>{product.category}</CardMetadata>
            <ProductName>{product.name}</ProductName>
            <Stocked isStocked={product.stocked ? true : false}>
              {product.stocked ? "In Stock" : "Out of Stock"}
            </Stocked>
            <ProductImage />
            <ProductPrice>{product.price}</ProductPrice>
            <ActionBar>
              <Button primary onClick={handleClick}>
                Buy Now
              </Button>
              <Button>Add to cart</Button>
            </ActionBar>
          </Card>
        );
      })}
    </>
  );
}
