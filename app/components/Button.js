import React from "react";

const Button = ({ children, args }) => {
  return (
    <button
      className="rounded-2xl px-4 py-2 bg-slate-300 font-bold text-black"
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
