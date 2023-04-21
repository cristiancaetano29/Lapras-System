import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`p-2 rounded-full hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
