import React from "react";
import { ActionButton } from "./Button.Styled";

export default function Button({ title, onClick }) {
  return <ActionButton onClick={onClick}>{title}</ActionButton>;
}
