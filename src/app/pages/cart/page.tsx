import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import c1 from "@/images/c1.jpeg";
import c2 from "@/images/c2.jpeg";
import c3 from "@/images/c3.jpeg";
import c4 from "@/images/c4.jpeg";
import c5 from "@/images/c5.jpeg";

function page() {
  return (
    <>
      <div className="absolute top-[125px] w-[1920px] h-[286px] bg-[#F6F5FF]"></div>
      <h1
        className="absolute top-[221px] left-[374px] font-Jose
      text-[36px] text-[#101750] font-bold"
      >
        Shopping Cart
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
        . Shopping Cart
      </p>

      <div
        className="absolute top-[539px] left-[374px] w-[1200px] font-Jose
      text-[20px] text-[#1D3178] font-bold flex justify-between"
      >
        <p className="w-[190px]">Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p className="w-[371px] text-center pr-16">Cart Totals</p>
      </div>

      <div className="absolute space-y-[30px] top-[607px] left-[375px] w-[85px] h-[1158px]">
        <Image src={c1} alt="c1" className="w-[83px] h-[87px]" />
        <Image src={c2} alt="c2" className="w-[83px] h-[87px]" />
        <Image src={c3} alt="c3" className="w-[83px] h-[87px]" />
        <Image src={c4} alt="c4" className="w-[83px] h-[87px]" />
        <Image src={c5} alt="c5" className="w-[83px] h-[87px]" />
      </div>

      <div
        className="absolute space-y-[96px] top-[617px] left-[475px] 
      w-[170px] h-[1158px] text-[#000000] text-[14px] font-Jose font-semibold"
      >
        <p>Ut diam consequat</p>
        <p>Vel faucibus posuere</p>
        <p>Ac vitae vestibulum</p>
        <p>Elit massa diam</p>
        <p>Proin pharetra elementum</p>
      </div>

      <div
        className="absolute space-y-[82px] top-[639px] left-[473px] 
      w-[32px] h-[1158px] text-[#A1A8C1] text-[12px] font-Jose"
      >
        <p>Color Size</p>
        <p>Color Size</p>
        <p>Color Size</p>
        <p>Color Size</p>
        <p>Color Size</p>
      </div>

      <div
        className="absolute space-y-[76px] top-[637px] left-[505px] 
      w-[32px] h-[1158px] text-[#A1A8C1] text-[14px] font-Jose"
      >
        <p>Brown XL</p>
        <p>Brown XL</p>
        <p>Brown XL</p>
        <p>Brown XL</p>
        <p>Brown XL</p>
      </div>

      <div
        className="absolute space-y-[96px] top-[641px] left-[680px] 
      w-[32px] h-[1158px] text-[#15245E] text-[14px] font-Jose font-semibold"
      >
        <p>$32.00</p>
        <p>$39.00</p>
        <p>$26.00</p>
        <p>$42.00</p>
        <p>$99.00</p>
      </div>

      <div
        className="absolute space-y-[96px] top-[641px] left-[855px] 
      w-[32px] h-[1158px] text-[#BEBFC2] text-[12px] tracking-[5px] text-center font-Jose"
      >
        <p className="w-[51px] h-[15px] bg-[#E7E7EF]">- 1 +</p>
        <p className="w-[51px] h-[15px] bg-[#E7E7EF]">- 1 +</p>
        <p className="w-[51px] h-[15px] bg-[#E7E7EF]">- 1 +</p>
        <p className="w-[51px] h-[15px] bg-[#E7E7EF]">- 1 +</p>
        <p className="w-[51px] h-[15px] bg-[#E7E7EF]">- 1 +</p>
      </div>

      <div
        className="absolute space-y-[96px] top-[641px] left-[1045px] 
      w-[32px] h-[1158px] text-[#15245E] text-[14px] font-Jose font-semibold"
      >
        <p>$219.00</p>
        <p>$107.00</p>
        <p>$88.00</p>
        <p>$499.00</p>
        <p>$127.00</p>
      </div>

      <div
        className="absolute space-y-[116px] top-[709px] left-[375px] 
      w-[718px] h-[464px]"
      >
        <p className="border-b-[1px] border-[#E1E1E4]"></p>
        <p className="border-b-[1px] border-[#E1E1E4]"></p>
        <p className="border-b-[1px] border-[#E1E1E4]"></p>
        <p className="border-b-[1px] border-[#E1E1E4]"></p>
        <p className="border-b-[1px] border-[#E1E1E4]"></p>
      </div>

      <div
        className="absolute top-[601px] left-[1174px] 
      w-[371px] h-[284px] bg-[#F4F4FC] rounded"
      ></div>
      <p
        className="absolute top-[635px] left-[1197px] font-lato
      text-[18px] text-[#1D3178] font-semibold"
      >
        Subtotals:
      </p>
      <p
        className="absolute top-[704px] left-[1203px] font-lato
      text-[18px] text-[#1D3178] font-medium"
      >
        Totals:
      </p>

      <div
        className="absolute space-y-[67px] top-[670px] left-[1200px] 
      w-[310px]"
      >
        <p className="border-b-[2px] border-[#E8E6F1]"></p>
        <p className="border-b-[2px] border-[#E8E6F1]"></p>
      </div>

      <p
        className="absolute top-[637px] left-[1454px] font-lato
      text-[16px] text-[#15245E]"
      >
        ‎£219.00
      </p>
      <p
        className="absolute top-[706px] left-[1461px] font-lato
      text-[16px] text-[#15245E]"
      >
        ‎£325.00
      </p>

      <i
        className="fa-solid fa-circle-check absolute top-[768px] left-[1204px]
 text-[#19D16F] text-[8px]"
      ></i>

      <p
        className="absolute top-[764px] left-[1219px] font-lato
      text-[12px] text-[#8A91AB]"
      >
        Shipping & taxes calculated at checkout
      </p>

      <button
        className="absolute top-[813px] left-[1203px] font-lato
      text-[14px] text-[#FFFFFF] text-center w-[312px] h-[40px]
      font-bold rounded bg-[#19D16F]"
      >
        Proceed To Checkout
      </button>

      <p
        className="absolute top-[917px] left-[1261px] font-Jose
      text-[20px] text-[#1D3178] font-bold"
      >
        Calculate Shopping
      </p>

      <div
        className="absolute top-[963px] left-[1174px] 
      w-[371px] h-[284px] bg-[#F4F4FC] rounded"
      ></div>

      <button
        className="absolute top-[1210px] left-[375px] font-Jose
      text-[16px] text-[#FFFFFF] text-center w-[134px] h-[39px] rounded-[2px] bg-[#FB2E86]"
      >
        Update Cart
      </button>

      <button
        className="absolute top-[1210px] left-[960px] font-Jose
      text-[16px] text-[#FFFFFF] text-center w-[134px] h-[39px] rounded-[2px] bg-[#FB2E86]"
      >
        Clear Cart
      </button>

      <button
        className="absolute top-[1185px] left-[1206px] font-Jose
      text-[16px] text-[#FFFFFF] text-center w-[179px] h-[41px] rounded-[2px] bg-[#FB2E86]"
      >
        Calculate Shopping
      </button>

      <div
        className="absolute space-y-[61px] top-[1029px] left-[1206px] 
      w-[310px]"
      >
        <p className="border-b-[1px] border-[#C7CEE4]"></p>
        <p className="border-b-[1px] border-[#C7CEE4]"></p>
        <p className="border-b-[1px] border-[#C7CEE4]"></p>
      </div>

      <footer className="absolute top-[1394px]">
        <Footer />
      </footer>
    </>
  );
}

export default page;
