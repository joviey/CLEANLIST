import { useState } from "react";
import { Menu, X } from "lucide-react";
import vector from "/vector.png"; // Match exactly!


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="text-white">
        <div className="flex-col md:flex md:flex-row md:justify-between px-5 py-5 ">
        <div className="flex md:flex md:flex-row items-center text-center justify-center md:mr-60">
      <img src={vector} alt="picture" className="w-7 h-7 md:w-10 md:h-10"/>
      <h3 className="text-4xl md:text-6xl">Cleanlist</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-evenly justify-center text-center py-4 ">
  <ul className="flex flex-col md:flex-row md:justify-evenly md:items-center items-center justify-center text-center text-xl md:gap-8">
          <li className="py-2"><a href="#" className="hover:text-green-400">Home</a></li>
          <li className="py-2"><a href="#">About us</a></li>
          <li className="py-2"><a href="#">Pricing</a></li>
          <li className="py-2"><a href="#">Contact us</a></li> 
        </ul>
        <div className="text-center items-center justify-center  flex gap-4 py-3 md:gap-6 md:px-4"> 
          <button style={{backgroundColor: "rgba(57, 131, 120, 1)" }} className="border-none rounded-xl text-white capitalize px-2">Sign up</button>
          <button className="capitalize border border-white border-4 rounded-xl px-3 z-20">Demo</button>
        </div>
      </div>
        </div>

      <button className="hidden mt-5" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="hidden absolute top-16 right-0 w-64 px-10 bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-6 text-lg">
            <li><a href="#" className="hover:text-green-900">Home</a></li>
            <li><a href="#" className="hover:text-green-900">About us</a></li>
            <li><a href="#" className="hover:text-green-900">Pricing</a></li>
            <li><a href="#" className="hover:text-green-900">Contact us</a></li>
          </ul>
          <div className="flex flex-col items-center gap-4 pb-6">
            <button className="bg-green-900 text-white px-4 py-2 rounded-xl w-32">Sign up</button>
            <button className="border-2 border-green-900 px-4 py-2 rounded-xl w-32">Demo</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default App;