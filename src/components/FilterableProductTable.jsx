import React from "react";

import SearchGroup from "./SearchGroup";
import ProductTable from "./ProductTable";

export default function FilterableProductTable({ products }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SearchGroup />
      <ProductTable products={products} />
    </div>
  );
}
