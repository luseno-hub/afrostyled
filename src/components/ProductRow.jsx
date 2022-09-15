import React from "react";

export default function ProductRow({ products }) {
  console.log("productss =>", products);
  return <h1>{products[1].name}</h1>;
}
