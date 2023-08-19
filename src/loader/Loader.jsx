import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <>
    <div className="w-screen h-screen flex absolute z-[999] bg-[#494B50]">

      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          ></circle>
      </svg>
          </div>
    </>
  );
};

export default Loader;
