import React, { useState } from "react";
import logo from "../assets/logo.svg"
import { IoIosMenu } from "react-icons/io";
import { MdClear } from "react-icons/md";

const Header = () => {
  const [showDropDown , setShowDropDown] = useState(false);
  return (
    <header className="w-full relative h-[11vh] flex md:px-15 px-5 items-center shadow-[0px_5px_3px_#e4e6ea] justify-between md:justify-start ">
      <section className="md:w-[15%] w-[25%] flex items-center h-full">
        <div className="lg:w-[100px]  md:w-[80px] ">
          <img
            className="w-full"
            src={logo}
            alt="logo"
          />
        </div>
      </section>
      <section className="w-[85%] hidden  lg:bg-white md:flex items-center justify-end md:gap-18 lg:gap-20 h-full">
        <div className="flex font-[600] text-center lg:text-[17px] items-center gap-10 justify-center">
          <h2 className="cursor-pointer">Features</h2>
          <h2 className="cursor-pointer">Exchanges</h2>
          <h2 className="cursor-pointer">How it works?</h2>
          <h2 className="cursor-pointer">Blog</h2>
          <h2 className="cursor-pointer">About us</h2>
        </div>
        <div>
          <button className=" border-[#0052fe] cursor-pointer border-1 md:w-[80px] md:h-[35px] md:text-[14px]  lg:text-[17px] lg:w-[100px] lg:h-[40px] rounded-md text-[#0052fe] font-[500]">Sign In</button>
        </div>
      </section>
      <section className="md:hidden" >
      <IoIosMenu onClick={() => setShowDropDown(!showDropDown)} style={{fontSize:"2rem"}} />
      </section>
     {
      showDropDown ?  <div className="flex absolute flex-col bg-white w-[93%] shadow-[3px_3px_10px_grey] rounded-xl left-4  top-[110%] font-[600] text-center lg:text-[17px] items-center py-5 justify-center">
      <h2 className="cursor-pointer hover:bg-[#e8e8e8] w-[100%] py-3">Features</h2>
      <h2 className="cursor-pointer hover:bg-[#e8e8e8] w-[100%] py-3">Exchanges</h2>
      <h2 className="cursor-pointer hover:bg-[#e8e8e8] w-[100%] py-3">How it works?</h2>
      <h2 className="cursor-pointer hover:bg-[#e8e8e8] w-[100%] py-3">Blog</h2>
      <h2 className="cursor-pointer  hover:bg-[#e8e8e8] w-[100%] py-3">About us</h2>
      <MdClear onClick={() => setShowDropDown(!showDropDown)} style={{fontSize:"1.3rem"}} className="absolute top-3 right-3 " />
    </div> : null
     }
    </header>
  );
};

export default Header;
