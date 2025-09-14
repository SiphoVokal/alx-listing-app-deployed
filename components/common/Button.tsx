import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
