import React from "react";
import Image from "next/image";
import contact from "@/images/contact.png";
import Footer from "@/components/Footer";
import Link from "next/link";

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
        Contact Us
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
        . Contact Us
      </p>

      <div className="space-y-[13px] absolute top-[531px] left-[375px]
      max-sm:left-[10px] max-sm:top-[340px] max-sm:text-center">
        <h2 className="font-Jose text-[36px] text-[#151875] font-bold
        max-sm:text-[22px]">
          Information About us
        </h2>
        <p className="font-lato w-[550px] text-[16px] text-[#8A8FB9] leading-6 
        font-semibold
        max-sm:w-[340px] max-sm:text-[12px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
        </p>
        <p className="w-[103px] h-[25px] text-[25px] pt-[20px] flex justify-between
        max-sm:text-[14px] max-sm:w-[80px] max-sm:ml-[125px] max-sm:pt-[10px]">
          <i className="fa-solid fa-circle text-[#5625DF]"></i>
          <i className="fa-solid fa-circle text-[#FF27B7]"></i>
          <i className="fa-solid fa-circle text-[#37DAF3]"></i>
        </p>
      </div>

      <h2
        className="font-Jose text-[36px] text-[#151875] font-bold
          absolute top-[531px] left-[1044px]
          max-sm:left-[110px] max-sm:top-[580px] max-sm:text-[22px]"
      >
        Contact Way
      </h2>

      <div
        className="text-[45px] w-[289px] grid grid-rows-2
             grid-cols-2 gap-x-72 gap-y-[55px] absolute top-[601px] left-[1044px]
             max-sm:left-[10px] max-sm:top-[630px] max-sm:gap-x-[70px] max-sm:gap-y-[55px]
             max-sm:text-[22px]"
      >
        <i className="fa-solid fa-circle text-[#5625DF]"></i>
        <i className="fa-solid fa-circle text-[#FB2E86]"></i>
        <i className="fa-solid fa-circle text-[#FFB265]"></i>
        <i className="fa-solid fa-circle text-[#1BE982]"></i>
      </div>

      <div
        className="w-[389px] h-[155px] gap-x-[200px] gap-y-[50px] absolute top-[601px] left-[1104px]
          font-lato font-semibold text-[#8A8FB9] text-[16px] grid grid-cols-2 grid-rows-2

          max-sm:left-[40px] max-sm:top-[630px] max-sm:gap-x-[20px] max-sm:gap-y-[0px]
             max-sm:text-[10px] max-sm:w-[340px]"
      >
        <p className="w-[172px]
        max-sm:w-[110px]">Tel: 877-67-88-99 E-Mail: shop@store.com</p>
        <p className="w-[112px]
        max-sm:w-[100px]">Support Forum For over 24hr</p>
        <p className="w-[185px]
        max-sm:w-[110px]">
          20 Margaret st, London Great britain, 3NM98-LK
        </p>
        <p className="w-[160px]
        max-sm:w-[110px]">Free standard shipping on all orders.</p>
      </div>

      <div className="space-y-[13px] absolute top-[908px] left-[375px]
      max-sm:top-[800px] max-sm:left-[10px] max-sm:text-center">
        <h2 className="font-Jose text-[36px] text-[#151875] font-bold
        max-sm:text-[22px]">
          Get In Touch
        </h2>
        <p className="font-lato w-[550px] text-[16px] text-[#8A8FB9] leading-6 
        font-semibold
        max-sm:text-[12px] max-sm:w-[340px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
          bibendum quam.
        </p>
      </div>

      <Image
        src={contact}
        alt="contact"
        className="absolute top-[876px] left-[927px]
        max-sm:top-[950px] max-sm:left-[40px] max-sm:w-[270px] max-sm:h-[270px]"
      />

      <div
        className="absolute top-[1050px] left-[377px] font-lato text-[16px] 
      text-[#8A8FB9] w-[534px] space-y-8
      max-sm:top-[1250px] max-sm:left-[10px] max-sm:w-[340px] max-sm:text-[12px]
      max-sm:space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name*"
          className="w-[255px] h-[45px] rounded-[3px] border-[1px] border-[#A4B6C8B2] 
          pl-3
          max-sm:w-[330px]"
        />

        <input
          type="text"
          placeholder="Your E-mail"
          className="w-[255px] h-[45px] ml-5 rounded-[3px] border-[1px] border-[#A4B6C8B2]
          pl-3
          max-sm:w-[330px] max-sm:ml-0"
        />

        <input
          type="text"
          placeholder="Subject*"
          className="w-[534px] h-[45px] rounded-[3px] border-[1px] border-[#A4B6C8B2] 
          pl-3
          max-sm:w-[330px] max-sm:h-[45px]"
        />

        <input
          type="text"
          placeholder="Type Your Messege*"
          className="w-[534px] h-[166px] rounded-[3px] border-[1px]
           border-[#A4B6C8B2] pl-3
           max-sm:w-[330px] max-sm:h-[166px]"
        />


        <button
          className="rounded-sm font-Jose text-[16px] text-[#FFFFFF] bg-[#FB2E86] 
        font-semibold w-[157px] h-[44px]
        
          max-sm:text-[14px] max-sm:w-[110px] max-sm:h-[40px] max-sm:ml-[110px]"
        >
          <Link href="/pages/faq">
          Send Mail
          </Link>
        </button>

      </div>

      <footer className="absolute top-[1807px]
      max-sm:top-[1750px]">
          <Footer />
        </footer>
    </>
  );
}

export default page;
