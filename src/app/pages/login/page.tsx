import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";

function page() {
  return (
    <>
      <div
        className="absolute top-[125px] w-[1920px] h-[286px] bg-[#F6F5FF]
      max-sm:w-[360px] max-sm:h-[166px]"
      ></div>
      <h1
        className="absolute top-[221px] left-[374px] font-Jose
      text-[36px] text-[#101750] font-bold
      max-sm:left-[10px] max-sm:top-[180px] max-sm:text-[22px]"
      >
        My Account
      </h1>
      <p
        className="absolute top-[266px] left-[375px] font-lato
      text-[16px] text-[#000000] font-medium
      max-sm:left-[10px] max-sm:top-[210px] max-sm:text-[12px]"
      >
        Home .
      </p>
      <p
        className="absolute top-[266px] left-[431px] font-lato
      text-[16px] text-[#000000] font-medium
      max-sm:left-[50px] max-sm:top-[210px] max-sm:text-[12px]"
      >
        Pages
      </p>
      <p
        className="absolute top-[266px] left-[485px] font-lato
      text-[16px] text-[#FB2E86] font-medium
      max-sm:left-[86px] max-sm:top-[210px] max-sm:text-[12px]"
      >
        . My Account
      </p>

      <Image
        src={logo}
        alt="logo"
        className="absolute top-[1114px] left-[508px] 
w-[904px] h-[93px]
max-sm:top-[780px] max-sm:left-[0px] max-sm:w-[360px]
          max-sm:h-[43px]"
      />

      <div
        className="absolute top-[531px] left-[688px] w-[544px] h-[474px] 
      bg-[#FFFFFF] shadow-lg
      max-sm:w-[340px] max-sm:h-[380px] max-sm:left-[10px] max-sm:top-[300px]"
      ></div>

      <h2
        className="absolute top-[581px] left-[917px] font-Jose
      text-[32px] text-[#000000] font-bold
      max-sm:left-[140px] max-sm:top-[340px] max-sm:text-[24px]"
      >
        Login
      </h2>
      <p
        className="absolute top-[620px] left-[811px] font-lato
      text-[17px] text-[#9096B2]
      max-sm:left-[70px] max-sm:top-[375px] max-sm:text-[12px]"
      >
        Please login using account detail bellow.
      </p>
      <input
        type="text"
        placeholder="Email Address"
        className="absolute top-[677px] left-[745px] text-[16px] text-[#9096B2]
      w-[432px] h-[52px] border-[1px] border-[#C2C5E1] rounded-sm font-lato pl-3
      max-sm:w-[300px] max-sm:text-[12px] max-sm:top-[420px] max-sm:left-[30px]
      max-sm:h-[38px]"
      />
      <input
        type="text"
        placeholder="Password"
        className="absolute top-[752px] left-[745px] text-[16px] text-[#9096B2]
      w-[432px] h-[52px] border-[1px] border-[#C2C5E1] rounded-sm font-lato pl-3
      max-sm:w-[300px] max-sm:text-[12px] max-sm:top-[480px] max-sm:left-[30px]
      max-sm:h-[38px]"
      />
      <p
        className="absolute top-[817px] left-[744px] font-lato
      text-[17px] text-[#9096B2]
      max-sm:text-[12px] max-sm:top-[530px] max-sm:left-[30px]"
      >
        Forgot your password?
      </p>
      <button
        className="absolute top-[860px] left-[744px] font-lato
      text-[17px] text-[#FFFFFF] text-center w-[432px] h-[47px] 
      rounded-[3px] bg-[#FB2E86] font-bold
      max-sm:w-[300px] max-sm:text-[12px] max-sm:top-[560px] max-sm:left-[30px]
      max-sm:h-[38px]"
      >
        Sign In
      </button>
      <p
        className="absolute top-[935px] left-[820px] font-lato
      text-[17px] text-[#9096B2]
      max-sm:text-[12px] max-sm:top-[610px] max-sm:left-[76px]"
      >
        Don’t have an Account?Create account
      </p>

      <footer
        className="absolute top-[1316px]
      max-sm:top-[890px]"
      >
        <Footer />
      </footer>
    </>
  );
}

export default page;
