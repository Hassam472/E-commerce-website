import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";

function page() {
  return (
    <>
      <div className="absolute top-[125px] w-[1920px] h-[286px] bg-[#F6F5FF]
      max-sm:w-[360px] max-sm:h-[166px]"></div>
      <h1
        className="absolute top-[221px] left-[374px] font-Jose
      text-[36px] text-[#101750] font-bold
      max-sm:left-[10px] max-sm:top-[180px] max-sm:text-[22px]"
      >
        FAQ
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
        . Faq
      </p>

      <h2
        className="absolute top-[545px] left-[377px] font-Jose
      text-[36px] text-[#1D3178] font-bold
      max-sm:text-[22px] max-sm:top-[350px] max-sm:left-[65px]"
      >
        Generel Information
      </h2>

      <div
        className="font-Jose absolute top-[639px] left-[377px] 
      text-[17px] text-[#1D3178] space-y-[126px] w-[395px] font-semibold
      max-sm:text-[14px] max-sm:top-[400px] max-sm:left-[10px] max-sm:w-[340px]
      max-sm:space-y-[80px]"
      >
        <p>Eu dictumst cum at sed euismood condimentum?</p>
        <p>Magna bibendum est fermentum eros.</p>
        <p>Odio muskana hak eris conseekin sceleton?</p>
        <p>Elit id blandit sabara boi velit gua mara?</p>
      </div>

      <div
        className="font-Jose absolute top-[684px] left-[377px] 
      text-[16px] text-[#A1ABCC] space-y-[105px] w-[499px]
      max-sm:text-[12px] max-sm:top-[430px] max-sm:left-[10px] max-sm:w-[310px]
      max-sm:space-y-[45px]"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
          tristique mollis vitae, consequat gravida sagittis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
          tristique mollis vitae, consequat gravida sagittis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
          tristique mollis vitae, consequat gravida sagittis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
          tristique mollis vitae, consequat gravida sagittis.
        </p>
      </div>

      <div
        className="absolute top-[534px] left-[982px] font-lato text-[16px] 
      text-[#8990B1] w-[566px] h-[738px]
    space-y-10 font-semibold bg-[#F8F8FD] pl-[46px] pt-[210px]

    max-sm:w-[340px] max-sm:left-[10px] max-sm:top-[880px] max-sm:text-[12px] max-sm:pl-0
    max-sm:space-y-4 max-sm:pt-[100px] max-sm:h-[520px]"
      >
        <input
          type="text"
          placeholder="Your Name*"
          className="w-[445px] h-[50px] rounded-[3px] border-[1px] border-[#A4B6C8B2] 
          pl-3
          max-sm:w-[330px]"
        />

        <input
          type="text"
          placeholder="Subject*"
          className="w-[445px] h-[50px] rounded-[3px] border-[1px] border-[#A4B6C8B2] 
          pl-3
          max-sm:w-[330px]"
        />

        <input
          type="text"
          placeholder="Type Your Messege*"
          className="w-[445px] h-[197px] rounded-[3px] border-[1px]
           border-[#A4B6C8B2] pl-3
           max-sm:w-[330px]"
        />

        <button
          className="rounded-sm font-Jose text-[#FFFFFF] bg-[#FB2E86] 
        font-semibold w-[156px] h-[48px]
        max-sm:text-[14px] max-sm:w-[110px] max-sm:h-[40px] max-sm:ml-[110px]"
        >
          Send Mail
        </button>
      </div>

      <h3
        className="absolute top-[600px] left-[1024px] font-Jose
      text-[24px] text-[#1D3178] font-bold
      max-sm:text-[22px] max-sm:top-[910px] max-sm:left-[90px]"
      >
        Ask a Question
      </h3>

      <Image
        src={logo}
        alt="logo"
        className="absolute top-[1364px] left-[337px] 
      w-[1246px] h-[128px]
      max-sm:top-[1480px] max-sm:left-[0px] max-sm:w-[360px]
          max-sm:h-[43px]"
      />

      <footer className="absolute top-[1582px]">
        <Footer />
      </footer>
    </>
  );
}

export default page;
