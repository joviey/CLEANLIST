import React from "react";
import D from "./assets/design.png";

const Design = () => {
  return (
    <div
      className="w-3/5 absolute -top-20 right-0 hidden md:block h-screen z-10 overflow-hidden "
      style={{ backgroundImage: `url(${D})` }}
    ></div>
  );
};
export default Design;
