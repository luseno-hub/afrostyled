import React, { useState, useEffect } from "react";
import { Input } from "./SearchBar.Styled";

export default function SearchBar({ placeholder, value, onChange }) {
  return (
    <>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
}
