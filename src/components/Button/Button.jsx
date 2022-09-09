import React from "react";
import { ActionButton } from "./Button.Styled";

export default function Button({ primary, title, onClick }) {
  return (
    <ActionButton onClick={onClick} primary={primary}>
      {title}
    </ActionButton>
  );
}
