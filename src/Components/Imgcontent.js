import React from "react";

const Imgcontent=()=>{
    return (
      <div className="px-2 mb-10">
        <div className="relative h-screen bg-no-repeat bg-cover bg-center rounded-md " style={{ backgroundImage: "url('windmill.jpg')" }}>
         
         <div className="flex flex-row">
              <div className="w-full pt-4 sm:pt-10 sm:pt-32 pl-10 sm:pl-20 md:w-1/2" style={{ color:'#F2F4F4'}} >
                 <p className="mb-3">#1 Energy provider in the world</p>
                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl mb-4">New Energy for the Future</h1>
                 <div>
                    <button className="mr-4 pb-2  border-b-2">Get in Touch</button>
                    <button className="pb-2  border-b-2">Our Services</button>
                 </div>
              </div>
         </div>

         <div className="bg-white flex flex-row absolute right-0 bottom-0 h-40 w-[90%] md:w-1/2 justify-around items-center rounded-tl-lg rounded-bl-lg border-l border-t border-b">
                <div className="w-28">
                    <h1 className="text-4xl font-medium">6 mil</h1>
                    <p className="text-xs text-gray-700">The Company's annual income</p>
                </div>

                <div className="w-28">
                    <h1 className="text-4xl font-medium">315</h1>
                    <p className="text-xs text-gray-700">Projects Completed Worldwide</p>
                </div>

                <div className="w-28">
                    <h1 className="text-4xl font-medium">120K</h1>
                    <p className="text-xs text-gray-700">Employees Work in All part of the World</p>
                </div>


             
         </div>

         
 
        </div>
      </div>
    )
}

export default Imgcontent;