import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div
      className="relative max-w-[1177px] h-[80px] left-[371px] flex justify-center 
    items-center"
    >
      <div
        className="w-[1177px] h-[40px] text-[#0D0E43] flex relative font-Jose justify-between 
    items-center"
      >
        <div className="text-[34px] font-bold cursor-pointer">Hekto</div>

        <div>
          <ul className="flex space-x-7 font-lato text-[16px] cursor-pointer">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/pages/shopGrid">
              <li>Pages</li>
            </Link>
            <Link href="/product">
              <li>Product</li>
            </Link>
            <li>Blogs</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="relative flex">
          <input
            type="text"
            className="h-[40px] font-Jose text-[20px] w-[266px] border-[2px]
 border-[#E7E6EF] rounded-tl rounded-bl"
          />

          <i
            className="fa-solid fa-magnifying-glass cursor-pointer h-[40px] w-[51px] text-center 
content-center text-[20px] text-[#F3F9FF] rounded-tr rounded-br bg-[#FB2E86]"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
