import React from "react";
import logo from "../assets/logo.svg"

const Header = () => {
  return (
    <header className="w-full h-[11vh] flex px-15 items-center shadow-[0px_5px_3px_#e4e6ea] justify-center ">
      <section className="w-[50%] flex items-center h-full">
        <div className="w-[100px] ">
          <img
            className="w-full"
            src={logo}
            alt="logo"
          />
        </div>
      </section>
      <section className="w-[50%] flex items-center justify-between h-full">
        <div className="flex font-[600] text-[17px] items-center gap-10 justify-center">
          <h2 className="cursor-pointer">Features</h2>
          <h2 className="cursor-pointer">Exchanges</h2>
          <h2 className="cursor-pointer">How it works?</h2>
          <h2 className="cursor-pointer">Blog</h2>
          <h2 className="cursor-pointer">About us</h2>
        </div>
        <div>
          <button className=" border-[#0052fe] cursor-pointer border-1 text-[17px] w-[100px] h-[40px] rounded-md text-[#0052fe] font-[500]">Sign In</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
