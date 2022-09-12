import React from "react";

export default function SearchBar() {
  return (
    <input
      placeholder="Search Movies"
      value=""
      onChange={(e) => {
        e.target.value;
      }}
    />
  );
}
