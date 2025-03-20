import React from "react";
import pic from "./assets/standard.png";
import picc from  "./assets/Premium.png";
 const Price = () =>{
    return(
        <section className="relative">
            <div>
                <div>
                    <h3>Our Price</h3>
                    <p>Projectile helps you collaborate more smoothly and communicate better.  Projectile helps you collaborate 
                    more smoothly and communicate better. </p>
                </div>
                <div className="grid grid-cols-1 md:flex md:flex-row md:gap-0 h-full justify-center items-center">
                <img src={pic} alt="pic" className="md:w-2/3 w-3/4 flex"/>
                <img src={picc} alt="pic" className="lg:scale-100 md:w-4/5 mt-6"/>
                <img src={pic} alt="pic" className="hidden md:block md:w-2/3"/>
                </div>
            </div>
        </section>
    )
 }
 export default Price