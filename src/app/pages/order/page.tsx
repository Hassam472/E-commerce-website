import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import o1 from "@/images/o1.png";
import o2 from "@/images/o2.png";
import o3 from "@/images/o3.png";
import Link from "next/link";
import Footer from "@/components/Footer";

function page() {
  return (
    <>
      <div className="absolute top-[125px] w-[1920px] h-[286px] bg-[#F6F5FF]"></div>
      <h1
        className="absolute top-[221px] left-[374px] font-Jose
      text-[36px] text-[#101750] font-bold"
      >
        Order Completed
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
        . Order Completed
      </p>

      <h2
        className="absolute top-[695px] left-[752px] font-Jose
      text-[36px] text-[#101750] font-bold"
      >
        Your Order Is Completed!
      </h2>
      <p
        className="absolute top-[759px] left-[648px] font-lato
      text-[16px] text-[#8D92A7] font-semibold w-[625px] leading-8 text-center"
      >
        Thank you for your order! Your order is being processed and will be
        completed within 3-6 hours. You will receive an email confirmation when
        your order is completed.
      </p>

      <Link href="/pages/shopList">
        <button
          className="absolute top-[859px] left-[869px] font-lato
      text-[16px] text-[#FFFFFF] text-center w-[208px] h-[59px] 
      rounded-[3px] bg-[#FF1788] font-semibold"
        >
          Continue Shopping
        </button>
      </Link>

      <Image src={o1} alt="o1" className="absolute top-[592px] left-[927px]" />
      <i
        className="fa-solid fa-check absolute top-[600px] left-[942px]
       text-[#FF1788] text-[60px] rounded-full bg-[#FFFFFF]"
      ></i>

      <Image src={o2} alt="o2" className="absolute top-[630px] left-[415px]" />

      <Image src={o3} alt="o3" className="absolute top-[945px] left-[1483px]" />

      <Image
        src={logo}
        alt="logo"
        className="absolute top-[1099px] left-[372px] 
      w-[1176px] h-[121px]"
      />
      <footer className="absolute top-[1304px]">
        <Footer />
      </footer>
    </>
  );
}

export default page;
