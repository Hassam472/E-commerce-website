import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";

function page() {
  return (
    <>
      <div className="absolute top-[125px] w-[1920px] h-[286px] bg-[#F6F5FF]"></div>
      <h1
        className="absolute top-[221px] left-[374px] font-Jose
      text-[36px] text-[#101750] font-bold"
      >
        My Account
      </h1>
      <p
        className="absolute top-[266px] left-[375px] font-lato
      text-[16px] text-[#000000] font-medium"
      >
        Home .
      </p>
      <p
        className="absolute top-[266px] left-[431px] font-lato
      text-[16px] text-[#000000] font-medium"
      >
        Pages
      </p>
      <p
        className="absolute top-[266px] left-[485px] font-lato
      text-[16px] text-[#FB2E86] font-medium"
      >
        . My Account
      </p>

      <Image
        src={logo}
        alt="logo"
        className="absolute top-[1114px] left-[508px] 
w-[904px] h-[93px]"
      />

      <footer className="absolute top-[1316px]">
        <Footer />
      </footer>
    </>
  );
}

export default page;
