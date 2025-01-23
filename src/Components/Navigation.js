import React from "react";

const Navigation=()=>{
    return(
        <div className="flex flex-row justify-between h-14 items-center px-2">
            <div>
                <h1 className="text-2xl font-bold"><span  className="text-3xl font-extrabold"  style={{ color: '#00D47E' }} >+</span>Xurya</h1>

            </div>

            <div >
                 <ul className="hidden md:flex flex-row gap-4 cursor-pointer">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Feauters</li>
                    <li>Services</li>
                    <li>Contact</li>
                 </ul>
            </div>

            <div className="flex flex-row gap-4">
                  <button className="px-2 border border-gray-600 rounded-2xl py-1">
                    Log in
                  </button>

                  <button className="px-2 rounded-2xl py-1" style={{ background: '#00D47E', color:'#F2F4F4'}} > 
                    Get in touch
                  </button>
            </div>

            <div className="cursor-pointer md:hidden block">
                <img className="h-10" src="menu.png" alt="menu icon"></img>
            </div>
        </div>
    )
}
export default Navigation;