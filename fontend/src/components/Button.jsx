import React from "react";

function Button({ className, handleClick, text }) {

  return (
    <button
        onClick={handleClick}
      className={`text-lg font-medium border border-solid border-gray-200 p-2 hover:bg-gray-50 rounded-lg ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
