import React from "react";

const Button = ({ children, backgroundColor, onClick }) => {
  return (
    <button
      className={`px-8 py-2 rounded-3xl  font-semibold focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-none  text-xl ${backgroundColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
