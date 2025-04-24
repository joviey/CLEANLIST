import React from "react";
import instagram from "./assets/insta.png";
import facebook from "./assets/facebook.png";
import linkedln from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import talk from "./assets/talk.png";
import vector from "./assets/vector.png";

const Footer = () => {
  return (
    <section className="mt-20">
      <hr />
      <div className="md:flex md:flex-row md:justify-around md:items-center md:pt-10 md:pb-10 capitalize text-white text-xl 
       flex flex-col items-center justify-center md:justify-center hidden md:inline">
        <ol className="md:flex md:flex-row flex flex-col gap-y-6 md:gap-y-6 md:gap-x-6 ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>News</li>
          <li>service</li>
          <li>porfolio</li>
        </ol>
        <ol className="md:flex text-center gap-4  md:flex-row flex flex-col gap-y-6 mt-4">
          <li>privacy policy</li>
          <li>Terms & Conditions</li>
        </ol>
      </div>

      <hr />

      <div className="md:grid md:grid-cols-3 justify-between md:gap-6 flex-col">
        <div className="md:col-start-1 md:mt-20 md:w-3/4 md:ml-32 flex-col items-center pb-10 justify-center text-center mt-20 ">
          <p className="flex text-3xl text-white md:gap-2 items-center md:justify-start justify-center flex-row ">
            <img src={vector} className="w-8 h-8"/>
            Cleanlist
          </p>
          <h3 className="mt-6 text-white flex md:text-justify">
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
            diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
            muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
            inde.{" "}
          </h3>
        </div>
        <div className="md:col-start-2 text-white mt-28 flex-col justify-items-center md:ml-20">
          <h4 className="text-xl" style={{ color: "rgba(57, 131, 120, 1)" }}>
            Have you any questions?
          </h4>

          <p className="flex flex-col items-start py-4">
            <span className="flex items-center gap-x-3">
              <img src={talk} alt="Phone Icon" className="w-8 h-8" />
              +44 123 456 7890
            </span>
            <span className="ml-10">example@email.com</span>
          </p>
        </div>
        <div className=" justify-items-center">
          <h3 className="mt-10 text-white text-2xl">Follow us on</h3>
          <ol className="py-2 capitalize text-xl text-white">
            <li className="flex items-center gap-4 py-2 ">
              <img src={facebook} className="w-6 h-6" />
              facebook
            </li>
            <li className="flex items-center gap-4 py-2 ">
              <img src={twitter} className="w-6 h-6" />
              twitter
            </li>
            <li className="flex items-center gap-4 py-2 ">
              <img src={linkedln} className="w-6 h-6" />
              snapchat
            </li>
            <li className="flex items-center gap-4 py-2 ">
              <img src={instagram} className="w-6 h-6" />
              instagram
            </li>
          </ol>
        </div>
      </div>
      <hr />
      <div className="md:flex md:justify-around mt-10 text-center">
        <footer className="text-white">
          Copyright © 2022. Brilworks . All rights reserved.
        </footer>
      </div>
    </section>
  );
};
export default Footer;
