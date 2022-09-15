import React from "react";

export default function ProductCategoryRow({ products }) {
  const categoryLabel = products.map((product) => {
    {
      product.category;
    }
  });

  return <div>{categoryLabel}</div>;
}
