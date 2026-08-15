import React from "react";

export default function CharacterStanding({
  className = "",
  style = {},
}) {
  return (
    <img
      src="/character-standing.jpg"
      alt="Character"
      draggable={false}
      className={className}
      style={{
        display: "block",
        objectFit: "contain",
        userSelect: "none",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}