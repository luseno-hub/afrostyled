import React, { useEffect, useState } from "react";
import {
  Card,
  CardMetadata,
  ProductName,
  ProductImage,
  ActionBar,
} from "./ItemCard.Styled";
import Button from "../Button";

export default function ItemCard() {
  const handleClick = () => {
    alert("Clicked Button");
  };

  return (
    <>
      <Card>
        <CardMetadata>Accessories</CardMetadata>
        <ProductName>Headphones</ProductName>
        <ProductImage />
        <ActionBar>
          <Button title="Buy Now" onClick={handleClick} />
          <Button title="Add to cart" />
        </ActionBar>
      </Card>
    </>
  );
}
