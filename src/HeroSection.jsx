import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import Pic from "./assets/1.png";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2   z-20 relative text-white mt-20">
      <div className="col-start-1 md:w-3/4 order-1 md:ml-20 px-6">
        <button
          className="border border-none rounded-xl text-white capitalize px-4"
          style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}
        >
          business
        </button>
        <h3 className="text-2xl md:text-4xl align items capitalize">
          every thing to grow your business,
          <br />
          <FontAwesomeIcon
            icon={faMinus}
            className="text-green-900 font-green"
          ></FontAwesomeIcon>
          all in one place
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl w-full mt-6">
          Send invoices, collect payments, text with customers, accept online
          bookings, build a digital presence, and start growing with powerful,
          easy-to-use tools.
        </p>
        <button
          className="border border-none rounded-xl mt-8 text-white  capitalize py-3 px-4"
          style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}
        >
          sign up <FontAwesomeIcon icon={faLongArrowRight}></FontAwesomeIcon>
        </button>
      </div>
      <div className=" hidden md:block col-start-2 order-2 w-4/5 ml-10 mt-10">
        <img src={Pic} alt="picture"></img>
      </div>
    </div>
  );
};
export default Hero;
