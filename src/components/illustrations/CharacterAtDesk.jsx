import React from "react";

export default function CharacterAtDesk({ className = "w-80 h-64" }) {
  return (
    <img
      src="/character-desk.jpg"
      alt="Character working at desk"
      className={`object-contain drop-shadow-lg ${className}`}
      draggable={false}
    />
  );
}