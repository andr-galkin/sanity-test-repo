import React from "react";

export const Button = ({ onPush, text }) => {
  return (
    <button
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-main w-[200px] text-[white] rounded-[5px] h-12 "
      onClick={onPush}
    >
      {text}
    </button>
  );
};
