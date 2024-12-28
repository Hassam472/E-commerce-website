import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div
      className="relative max-w-[1177px] h-[80px] left-[371px] flex justify-center 
    items-center
    
    max-sm:left-3 max-sm:justify-start"
    >
      <div
        className="w-[1177px] h-[40px] text-[#0D0E43] flex relative font-Jose 
        justify-between items-center
        
        max-sm:w-[400px] space-x-[60px]"
      >
       <Link href="/">
       <div className="text-[34px] font-bold cursor-pointer
       
       max-sm:text-[24px]">Hekto</div>
       </Link>
        <div>
          <ul className="flex space-x-7 font-lato text-[16px]
          
          max-sm:text-[14px] max-sm:space-x-3">
            <Link href="/">
              <li className="hover:text-[#FB2E86]">Home</li>
            </Link>
            <Link href="/pages/shopGrid">
              <li className="hover:text-[#FB2E86]">Pages</li>
            </Link>
            <Link href="/product">
              <li className="hover:text-[#FB2E86]">Product</li>
            </Link>
            <Link href="/pages/blog">
              <li className="hover:text-[#FB2E86]">Blog</li>
            </Link>
            <Link href="/pages/about">
              <li className="hover:text-[#FB2E86]">About</li>
            </Link>
            <Link href="/pages/contact">
              <li className="hover:text-[#FB2E86]">Contact</li>
            </Link>
          </ul>
        </div>

        <div className="relative flex">
          <input
            type="text"
            className="h-[40px] font-Jose text-[20px] w-[266px] border-[2px]
 border-[#E7E6EF] rounded-tl rounded-bl
 
 max-sm:h-[30px] max-sm:text-[14px] max-sm:w-[100px]"
          />

          <i
            className="fa-solid fa-magnifying-glass cursor-pointer h-[40px] w-[51px] text-center 
content-center text-[20px] text-[#F3F9FF] rounded-tr rounded-br bg-[#FB2E86]
max-sm:h-[30px] max-sm:text-[14px] max-sm:w-[31px]"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
