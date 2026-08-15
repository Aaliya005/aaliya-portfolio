import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 text-center">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Aaliya Manyar. All rights reserved.
      </p>
    </footer>
  );
}