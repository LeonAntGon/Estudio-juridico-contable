import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estilos CSS inline para las líneas del menú hamburguesa
  const commonLineStyles = {
    transition: "0.5s",
    strokeWidth: "6px",
    stroke: "black",
    strokeLinecap: "round" as "butt" | "round" | "square", // Asegúrate de que sea uno de los tipos permitidos
  };

  return (
    <div
      className="relative w-12 h-12 cursor-pointer"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      style={{
        height: "50px",
        width: "50px",
        position: "relative",
        transform: "0.2s",
      }}
    >
      <svg
        fill="none"
        viewBox="0 0 50 50"
        height="50"
        width="50"
        style={{ transition: "0.5s" }}
      >
        {/* Línea superior */}
        <path
          style={{
            ...commonLineStyles,
            strokeDasharray: "40 40",
            strokeDashoffset: isMenuOpen ? "0" : "25",
            transformOrigin: "left",
            transform: isMenuOpen
              ? "rotateZ(45deg) translate(-7px, -5px)"
              : "none",
            stroke: isMenuOpen ? "crimson" : "black",
          }}
          d="M6 11L44 11"
        ></path>

        {/* Línea del medio */}
        <path
          style={{
            ...commonLineStyles,
            strokeDasharray: "40 40",
            strokeDashoffset: isMenuOpen ? "40" : "0",
            stroke: isMenuOpen ? "crimson" : "black",
          }}
          d="M6 24H43"
        ></path>

        {/* Línea inferior */}
        <path
          style={{
            ...commonLineStyles,
            strokeDasharray: "40 40",
            strokeDashoffset: isMenuOpen ? "0" : "60",
            transformOrigin: "left",
            transform: isMenuOpen
              ? "rotateZ(-45deg) translate(-5px, 5px)"
              : "none",
            stroke: isMenuOpen ? "crimson" : "black",
          }}
          d="M6 37H43"
        ></path>
      </svg>
    </div>
  );
};

export default HamburgerMenu;
