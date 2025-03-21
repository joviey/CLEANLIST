import React from "react";
import pic from "./assets/standard.png";
import picc from  "./assets/Premium.png";
 const Price = () =>{
    return(
        <section>
            <div className="mt-20">
                <div className="md:grid md:grid-row-3 flex flex-col justify-center items-center text-center md:mt-20">
                    <p className="border-none rounded-xl capitalize w-20 grid-row-1  " 
                    style={{ backgroundColor: "rgba(57, 131, 120, 1)" }}><p>pricing</p></p>
                    <h3 className="text-white text-xl md:grid-row-2 mt-6">Our Price</h3>
                    <p className="text-white text-xl md:mt-4 md:w-[50rem] mt-6">Projectile helps you collaborate more smoothly and communicate better.  Projectile helps you collaborate 
                    more smoothly and communicate better. </p>
                </div>
                <div className="flex flex-col md:grid-row-3 md:flex mt-10 md:flex-row md:gap-0 h-full justify-center items-center relative pb-80 md:pb-0 md:mt-20">
                <img src={pic} alt="pic" className="md:w-80 w-64 md:relative md:z-10 md:right-40"/>
                <img src={picc} alt="pic" className="md:w-96 w-64 md:absolute md:z-30 md:mt-20"/>
                <img src={pic} alt="pic" className="w-64  md:w-80 md:relative md:z-10 md:left-40 absolute top-[695px] md:top-0 z-20"/>
                </div>
            </div>
        </section>
    )
 }
 export default Price