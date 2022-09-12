import React, { useState, useEffect } from "react";
import { Input } from "./SearchBar.Styled";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  return (
    <Input
      placeholder="Search Movies"
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
    />
  );
}
