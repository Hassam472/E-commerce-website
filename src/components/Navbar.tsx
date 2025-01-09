import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent } from "./ui/dropdown-menu";

function Navbar() {
  return (
    <>
      <div
        className="relative max-w-[1177px] h-[80px] left-[371px] flex justify-center 
    items-center
    
    max-sm:left-0 max-sm:w-[340px]"
      >
        <div
          className="w-[1177px] h-[40px] text-[#0D0E43] flex relative font-Jose 
        justify-between items-center
        
        max-sm:w-[340px]"
        >
          <Link href="/">
            <div
              className="text-[34px] font-bold cursor-pointer
       
       max-sm:text-[28px] max-sm:ml-[10px]"
            >
              Hekto
            </div>
          </Link>

          <div
            className="relative flex ml-5
       max-sm:ml-0 max-sm:absolute max-sm:right-10"
          >
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

          <div className="hidden max-sm:block max-sm:font-lato max-sm:text-[24px] max-sm:absolute max-sm:right-0">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <i className="fa-solid fa-bars"></i>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/">
                    <p className="hover:text-[#FB2E86]">Home</p>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href="/pages/shopGrid">
                    <p className="hover:text-[#FB2E86]">Pages</p>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href="/product">
                    <p className="hover:text-[#FB2E86]">Product</p>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href="/pages/blog">
                    <p className="hover:text-[#FB2E86]">Blog</p>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href="/pages/about">
                    <p className="hover:text-[#FB2E86]">About</p>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href="/pages/contact">
                    <p className="hover:text-[#FB2E86]">Contact</p>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div>
            <ul
              className="flex space-x-7 font-lato text-[16px]
          
          max-sm:hidden"
            >
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
        </div>
      </div>
    </>
  );
}

export default Navbar;
