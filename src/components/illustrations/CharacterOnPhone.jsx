import React from "react";

export default function CharacterOnPhone({ className = "w-64 h-80" }) {
  return (
    <img
      src="/character-phone.jpg"
      alt="Character on phone"
      className={`object-contain drop-shadow-lg ${className}`}
      draggable={false}
    />
  );
}