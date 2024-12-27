import React from "react";
import Image from "next/image";
import about from "@/images/about.jpeg";
import Footer from "@/components/Footer";
import sh1 from "@/images/shopex1.png";
import sh2 from "@/images/shopex2.png";
import sh3 from "@/images/shopex3.png";
import sh4 from "@/images/shopex4.png";

function page() {
  return (
    <>
      <div className="absolute top-[125px] w-[1920px] h-[286px] bg-[#F6F5FF]"></div>
      <h1
        className="absolute top-[221px] left-[374px] font-Jose
      text-[36px] text-[#101750] font-bold"
      >
        About Us
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
        . About Us
      </p>

      <div
        className="absolute top-[530px] left-[375px] w-[552px] h-[409px] 
      bg-[#2B3CAB] rounded-md"
      ></div>

      <Image
        src={about}
        alt="about"
        className="absolute top-[530px] left-[390px] 
      w-[555px] h-[390px] rounded-md"
      />

      <h2
        className="absolute top-[571px] left-[975px] font-Jose
      text-[36px] text-[#151875] font-bold w-[522px]"
      >
        Know About Our Ecommerce Business, History
      </h2>

      <p
        className="absolute top-[681px] left-[975px] font-lato
      text-[16px] text-[#8A8FB9] font-semibold w-[550px] leading-6"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
        ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
        amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
        quis bibendum quam.
      </p>

      <button className="absolute top-[830px] left-[975px] rounded-sm font-lato
      text-[18px] text-[#FFFFFF] bg-[#FB2E86] font-semibold w-[145px] h-[44px]">
      Contact us
      </button>

      <h3
        className="absolute top-[1080px] left-[827px] font-Jose
      text-[42px] text-[#000000] font-bold"
      >
        Our Features
      </h3>


      <div className="absolute top-[2687px] left-[478px] w-[959px] h-[65px] flex justify-between">
      <Image src={sh1} alt="sh1" className="w-[65px] h-[65px]"/>
      <Image src={sh2} alt="sh2" className="w-[65px] h-[65px]"/>
      <Image src={sh3} alt="sh3" className="w-[65px] h-[65px]"/>
      <Image src={sh4} alt="sh4" className="w-[65px] h-[65px]"/>
      </div>


      <footer className="absolute top-[2434px]">
        <Footer />
      </footer>
    </>
  );
}

export default page;
