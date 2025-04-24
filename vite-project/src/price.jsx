import React from "react";
import CheckList from './Checklist';
 const Price = () =>{
    return(
        <section>
            <div className="mt-20">
                <div className="md:grid md:grid-row-3 flex flex-col justify-center items-center text-center md:mt-20">
                    <p className="border-none rounded-xl capitalize w-20 grid-row-1  " 
                    style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}><p>pricing</p></p>
                    <h3 className="text-white text-xl md:grid-row-2 mt-6">Our Price</h3>
                    <p className="text-white text-xl md:mt-4 md:w-[50rem] mt-6 w-[25rem]">Projectile helps you collaborate more smoothly and communicate better. 
                         Projectile helps you collaborate more smoothly and communicate better. </p>
                </div>
            <div className="md:flex justify-center items-center md:mt-10 relative top-[30px] ">

            <div style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} className="w-80 h-full px-10 py-10 pt-8 rounded-xl md:mt-7">
                <div className="flex flex-col ">
                    <h2 className="text-2xl capitalize text-white">standard</h2>
                <p className="text-white pb-5">For solo designer</p>
                <hr className="w-60 pt-5"/>
                <p className="text-2xl text-white">$29 USD</p>
                <p className="text-white">per person, per month</p>
                <div className="text-white pt-10"><CheckList /></div>
                <p className="border-none rounded-xl px-4 py-4 w-40 mt-14 text-center text-white"  style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}>Get Started</p>
                
                </div>
            </div>
            <div  style={{ backgroundColor: "rgba(57, 131, 120, 1)" }} className="w-80 h-[90vh] px-10 py-10 md:pt-20 rounded-xl ">
    <div className="flex flex-col ">
        <h2 className="text-2xl capitalize text-white">Premium</h2>
                <p className="text-white pb-5">For solo designer</p>
                <hr className="w-60 pt-5"/>
                <p className="text-2xl text-white">$59 USD</p>
                <p className="text-white">six persons, per month</p>
                <div className="text-white pt-10"><CheckList /></div>
                <p className="border-none rounded-xl px-4 py-4 w-40 mt-14 text-center text-green"  style={{ backgroundColor: "rgba(255, 255, 255, 0.99)" }}>Get Started</p> 
    </div>
               
            </div>

            <div style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} className="w-80 h-full px-10 py-10 pt-8 rounded-xl  md:flex hidden md:mt-7">
                <div>
                  <h2 className="text-2xl capitalize text-white">standard</h2>
                <p className="text-white pb-5">For solo designer</p>
                <hr className="w-60 pt-5"/>
                <p className="text-2xl text-white">$29 USD</p>
                <p className="text-white">per person, per month</p>
                <div className="text-white pt-10"><CheckList /></div>
                <p className="border-none rounded-xl px-4 py-4 w-40 mt-14 text-center text-white"  style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}>Get Started</p>  
                </div>
                
               
            </div>
        </div>
        </div>
        </section>
    )
 }
 export default Price