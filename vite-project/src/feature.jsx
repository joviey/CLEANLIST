import React from "react";
import One from "./assets/one.png";
import Twoe from "./assets/two.png";
import Third from "./assets/third.png";

const Feature = () => {
  return (
    <section className="md:grid md:grid-cols-[30%_70%] flex flex-col">
      <div className="md:col-start-1 md:w-64 md:mr-20 md:mt-40 flex flex-col mt-40">
        <button
          className="border-none md:w-32 rounded-xl px-2 capitalize w-32  items-center md:ml-0 ml-20 text-center justify-center text-2xl text-white"
          style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}
        >
          <p>features</p>
        </button>
        <h2 className="text-white flex flex-col text-center md:text-start justify-center md:justify-start py-4 ">
          Get complete visibility and control
        </h2>
        <p className="text-white  mx-auto w-64 flex flex-col items-center md:items-start  justify-center md:justify-start  text-center md:text-start">
          Projectile helps you collaborate more smoothly and communicate better.
        </p>
      </div>
      <div className="md:col-start-2 flex flex-col justify-between items-center">
      <div className="md:grid md:grid-cols-2 md:gap-x-6 mt-40 items-center justify-between">
      <div className="md:grid md:grid-cols-1 gap-y-6 md:ml-10 flex flex-col items-center justify-around gap-x-6">
            
            <div
              className="border-none rounded-xl h-auto w-72 px-2 py-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <img
                src={One}
                alt="picture"
                className="border-none rounded-xl px-2 py-2"
                style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}
              />
              <h3 className=" text-white text-center text-xl">
                Customer <br/>
                management
              </h3>
              <p className="text-white ml-2 leading-tight mt-6">
                Monitor progress against your plans and address deviations
                faster.
              </p>
            </div>
            <div
              className="border-none bg-red-300 rounded-xl h-auto w-72 px-2 py-4 "
              style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}
            >
              <img
                src={Twoe}
                alt="picture"
                className="border-none rounded-xl px-2 py-2"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              />
              <h3 className=" text-white  text-center  text-xl">
                Scheduling
              </h3>
              <p className="text-white ml-2 leading-tight mt-12">
                Monitor progress against your plans and address deviations
                faster..
              </p>
            </div>
            <div
              className="border-none bg-red-300  rounded-xl h-auto w-72 px-2 py-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <img
                src={Twoe}
                alt="picture"
                className="border-none rounded-xl px-2 py-2"
                style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}
              />
              <h3 className=" text-white  text-center  gap-y-6 text-xl">
                Quotes and <br />
                estimatest
              </h3>
              <p className="text-white ml-2 leading-tight mt-6">
                Monitor progress against your plans and address deviations
                faster.
              </p>
            </div>
          </div>
          <div className="grid-cols-2 gap-y-6 flex flex-col items-center justify-around gap-x-6 md:mt-0 mt-10">
            <div
              className="border-none rounded-xl h-auto w-72 px-2 py-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <img
                src={Third}
                alt="picture"
                className="border-none rounded-xl px-2 py-2"
                style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}
              />
              <h3 className=" text-white  text-center text-xl">
                Credit card <br />
                payment
              </h3>
              <p className="text-white ml-2 leading-tight mt-6">
                Monitor progress against your plans and address deviations
                faster.
              </p>
            </div>
            <div
              className="border-none rounded-xl h-auto w-72 px-2 py-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <img
                src={One}
                alt="picture"
                className="border-none rounded-xl px-2 py-2"
                style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}
              />
              <h3 className=" text-white  text-center  text-xl">
                Referrals and <br />
                reviews
              </h3>
              <p className="text-white ml-2 leading-tight mt-6">
                Monitor progress against your plans and address deviations
                faster.
              </p>
            </div>
            <div
              className="border-none rounded-xl h-auto w-72 px-2 py-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <img
                src={Twoe}
                alt="picture"
                className="border-none rounded-xl px-2 py-2"
                style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}
              />
              <h3 className=" text-white text-center text-xl">
                Billing and <br />
                invoicing
              </h3>
              <p className="text-white ml-2 leading-tight mt-6">
                Monitor progress against your plans and address deviations
                faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
