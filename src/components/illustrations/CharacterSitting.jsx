import React from "react";

export default function CharacterSitting({ className = "w-80 h-80" }) {
  return (
    <img
      src="/character-sitting.png"
      alt="Character sitting with laptop"
      className={`object-contain drop-shadow-lg ${className}`}
      draggable={false}
    />
  );
}