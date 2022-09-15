import React from "react";

export default function SearchGroup() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input type="text" value="" />
      <div>
        <input type="checkbox" />
        <span>Only shoe products in stock</span>
      </div>
    </div>
  );
}
