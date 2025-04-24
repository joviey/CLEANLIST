import React from "react";
import backgroundImg from "./assets/backGround.png";

const Background = ({ children }) => {
  return (
    <div
      className="w-full min-h-screen overflow-x-hidden bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 w-full h-full flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default Background;
