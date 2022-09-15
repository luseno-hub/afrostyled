import React from "react";

import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <span>Name</span>
        <span>Price</span>
      </div>
      <ProductCategoryRow products={products} />
      <ProductRow products={products} />
    </div>
  );
}
