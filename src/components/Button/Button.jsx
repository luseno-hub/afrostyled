import React from "react";
import { ActionButton } from "./Button.Styled";

export default function Button({ primary, children, onClick }) {
  return (
    <ActionButton onClick={onClick} primary={primary}>
      {children}
    </ActionButton>
  );
}
