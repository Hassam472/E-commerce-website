import React from "react";
import Image from "next/image";
import contact from "@/images/contact.png";
import Footer from "@/components/Footer";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="absolute top-[125px] w-[1920px] h-[286px] bg-[#F6F5FF]"></div>
      <h1
        className="absolute top-[221px] left-[374px] font-Jose
      text-[36px] text-[#101750] font-bold"
      >
        Contact Us
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
        . Contact Us
      </p>

      <div className="space-y-[13px] absolute top-[531px] left-[375px]">
        <h2 className="font-Jose text-[36px] text-[#151875] font-bold">
          Information About us
        </h2>
        <p className="font-lato w-[550px] text-[16px] text-[#8A8FB9] leading-6 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
        </p>
        <p className="w-[103px] h-[25px] text-[25px] pt-[20px] flex justify-between">
          <i className="fa-solid fa-circle text-[#5625DF]"></i>
          <i className="fa-solid fa-circle text-[#FF27B7]"></i>
          <i className="fa-solid fa-circle text-[#37DAF3]"></i>
        </p>
      </div>

      <h2
        className="font-Jose text-[36px] text-[#151875] font-bold
          absolute top-[531px] left-[1044px]"
      >
        Contact Way
      </h2>

      <div
        className="text-[45px] w-[289px] grid grid-rows-2
             grid-cols-2 gap-x-72 gap-y-[55px] absolute top-[601px] left-[1044px]"
      >
        <i className="fa-solid fa-circle text-[#5625DF]"></i>
        <i className="fa-solid fa-circle text-[#FB2E86]"></i>
        <i className="fa-solid fa-circle text-[#FFB265]"></i>
        <i className="fa-solid fa-circle text-[#1BE982]"></i>
      </div>

      <div
        className="w-[389px] h-[155px] gap-x-[200px] gap-y-[50px] absolute top-[601px] left-[1104px]
          font-lato font-semibold text-[#8A8FB9] text-[16px] grid grid-cols-2 grid-rows-2"
      >
        <p className="w-[172px]">Tel: 877-67-88-99 E-Mail: shop@store.com</p>
        <p className="w-[112px]">Support Forum For over 24hr</p>
        <p className="w-[185px]">
          20 Margaret st, London Great britain, 3NM98-LK
        </p>
        <p className="w-[160px]">Free standard shipping on all orders.</p>
      </div>

      <div className="space-y-[13px] absolute top-[908px] left-[375px]">
        <h2 className="font-Jose text-[36px] text-[#151875] font-bold">
          Get In Touch
        </h2>
        <p className="font-lato w-[550px] text-[16px] text-[#8A8FB9] leading-6 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
          bibendum quam.
        </p>
      </div>

      <Image
        src={contact}
        alt="contact"
        className="absolute top-[876px] left-[927px]"
      />

      <div
        className="absolute top-[1050px] left-[377px] font-lato text-[16px] 
      text-[#8A8FB9] w-[534px] space-y-8"
      >
        <input
          type="text"
          placeholder="Your Name*"
          className="w-[255px] h-[45px] rounded-[3px] border-[1px] border-[#A4B6C8B2] pl-3"
        />

        <input
          type="text"
          placeholder="Your E-mail"
          className="w-[255px] h-[45px] ml-5 rounded-[3px] border-[1px] border-[#A4B6C8B2] pl-3"
        />

        <input
          type="text"
          placeholder="Subject*"
          className="w-[534px] h-[45px] rounded-[3px] border-[1px] border-[#A4B6C8B2] pl-3"
        />

        <input
          type="text"
          placeholder="Type Your Messege*"
          className="w-[534px] h-[166px] rounded-[3px] border-[1px]
           border-[#A4B6C8B2] pl-3"
        />


        <button
          className="rounded-sm font-Jose text-[16px] text-[#FFFFFF] bg-[#FB2E86] 
        font-semibold w-[157px] h-[44px]"
        >
          <Link href="/pages/faq">
          Send Mail
          </Link>
        </button>

      </div>

      <footer className="absolute top-[1807px]">
          <Footer />
        </footer>
    </>
  );
}

export default page;
