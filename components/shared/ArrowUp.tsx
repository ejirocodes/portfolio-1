import React from "react";
// @ts-ignore
export default function ArrowUp({ strokeColour }) {
  return (
    <button className="cursor-pointer h-full hover:scale-125 transition-all w-full flex items-center justify-center rounded-full">
      <svg viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.8887 15.7596L15.2491 2.17631L1.66576 5.81595M15.2491 2.17631L2.75098 23.8237L15.2491 2.17631Z"
          stroke={strokeColour}
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    </button>
  );
}
