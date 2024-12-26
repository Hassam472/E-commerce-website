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

      <div
        className="absolute top-[531px] left-[688px] w-[544px] h-[474px] 
      bg-[#FFFFFF] shadow-lg"
      ></div>

      <h2
        className="absolute top-[581px] left-[917px] font-Jose
      text-[32px] text-[#000000] font-bold"
      >
        Login
      </h2>
      <p
        className="absolute top-[620px] left-[811px] font-lato
      text-[17px] text-[#9096B2]"
      >
        Please login using account detail bellow.
      </p>
      <input
        type="text"
        placeholder="Email Address"
        className="absolute top-[677px] left-[745px] text-[16px] text-[#9096B2]
      w-[432px] h-[52px] border-[1px] border-[#C2C5E1] rounded-sm font-lato pl-3"
      />
      <input
        type="text"
        placeholder="Password"
        className="absolute top-[752px] left-[745px] text-[16px] text-[#9096B2]
      w-[432px] h-[52px] border-[1px] border-[#C2C5E1] rounded-sm font-lato pl-3"
      />
      <p
        className="absolute top-[817px] left-[744px] font-lato
      text-[17px] text-[#9096B2]"
      >
        Forgot your password?
      </p>
      <button
          className="absolute top-[860px] left-[744px] font-lato
      text-[17px] text-[#FFFFFF] text-center w-[432px] h-[47px] 
      rounded-[3px] bg-[#FB2E86] font-bold"
        >
          Sign In
        </button>
      <p
        className="absolute top-[935px] left-[820px] font-lato
      text-[17px] text-[#9096B2]"
      >
        Don’t have an Account?Create account
      </p>

      <footer className="absolute top-[1316px]">
        <Footer />
      </footer>
    </>
  );
}

export default page;
