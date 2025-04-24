import React from "react";
import books from "./assets/Group.png";
import stripe from "./assets/Frame.png";
import paypal from "./assets/Fram.png";
import venmo from "./assets/Fra.png";
const Integration = () => {
  return (
    <div className="md:items-center md:grid place-items-center text-white flex flex-col md:text-2xl mt-40 text-xl">
      <div className="md:flex md:flex-col md:justify-center md:gap-2 md:items-center  text-center justify-center flex ml-6 flex-col md:text-center">
        <button
          className=" mx-auto border-none rounded-xl w-32 items-center md:py-2  md:px-3 py-2 px-2 flex flex-col justify-center text-center items-center"
          style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}
        >
          Integration
        </button>
        <p className="w-[100%] md:w-full text-xl md:text-4xl mt-4 whitespace-normal md:text-center">
          We are Integrated with industry best service providers
        </p>
      </div>
      <div className="md:flex md:mt-20 md:gap-40 md:items-center md:justify-center flex flex-col items-center justify-center text-center md:flex-row gap-10 mt-10">
        <img src={books} alt="picture" className="w-20 h-auto object-contain" />
        <img
          src={stripe}
          alt="picture"
          className="w-32 h-auto object-contain"
        />
        <img
          src={paypal}
          alt="picture"
          className="w-28 h-auto object-contain"
        />
        <img src={venmo} 
        alt="picture" 
        className="w-32 h-auto object-contain" />
      </div>
    </div>
  );
};

export default Integration;
