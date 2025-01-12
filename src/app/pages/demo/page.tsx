import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import c5 from "@/images/c5.jpeg";
import d2 from "@/images/d2.jpeg";
import d3 from "@/images/d3.jpeg";
import d4 from "@/images/d4.jpeg";
import d5 from "@/images/d5.jpeg";
import Link from "next/link";

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
        Hekto Demo
      </h1>
      <h2
        className="absolute top-[482px] left-[374px] font-Jose
      text-[24px] text-[#1D3178] font-bold
      max-sm:left-[10px] max-sm:top-[320px] max-sm:text-[14px]"
      >
        Hekto Demo
      </h2>
      <p
        className="absolute top-[522px] left-[375px] font-lato
      text-[12px] text-[#1D3178]
      max-sm:left-[10px] max-sm:top-[340px] max-sm:text-[10px]"
      >
        Cart/ Information/ Shipping/ Payment
      </p>

      <div
        className="absolute top-[561px] left-[375px] w-[770px] h-[920px]
      bg-[#F8F8FD] rounded border-[1px] border-[#BFC6E0]
      max-sm:left-[10px] max-sm:top-[370px] max-sm:w-[340px] max-sm:h-[700px]"
      ></div>

      <div
        className="absolute space-y-[30px] top-[557px] left-[1175px] w-[85px] h-[1158px]
      max-sm:top-[1110px] max-sm:left-[10px]"
      >
        <Image src={c5} alt="d1" className="w-[83px] h-[87px]" />
        <Image src={d2} alt="d2" className="w-[83px] h-[87px]" />
        <Image src={d3} alt="d3" className="w-[83px] h-[87px]" />
        <Image src={d4} alt="d4" className="w-[83px] h-[87px]" />
        <Image src={d5} alt="d5" className="w-[83px] h-[87px]" />
      </div>

      <div
        className="absolute space-y-[96px] top-[567px] left-[1275px] 
      w-[170px] h-[1158px] text-[#000000] text-[14px] font-Jose font-semibold
      max-sm:top-[1115px] max-sm:left-[100px] max-sm:text-[12px] max-sm:space-y-[100px]"
      >
        <p>Ut diam consequat</p>
        <p>Ut diam consequat</p>
        <p>Ut diam consequat</p>
        <p>Ut diam consequat</p>
        <p>Ut diam consequat</p>
      </div>

      <div
        className="absolute space-y-[100px] top-[589px] left-[1273px] 
      w-[60px] h-[1158px] text-[#A1A8C1] text-[12px] font-Jose
      max-sm:top-[1135px] max-sm:left-[100px] max-sm:text-[10px] max-sm:space-y-[104px]"
      >
        <p>Color Size</p>
        <p>Color Size</p>
        <p>Color Size</p>
        <p>Color Size</p>
        <p>Color Size</p>
      </div>

      <div
        className="absolute space-y-[96px] top-[610px] left-[1273px] 
      w-[70px] h-[1158px] text-[#A1A8C1] text-[14px] font-Jose
      max-sm:top-[1150px] max-sm:left-[100px] max-sm:text-[10px] max-sm:space-y-[104px]"
      >
        <p>Brown XL</p>
        <p>Brown XL</p>
        <p>Brown XL</p>
        <p>Brown XL</p>
        <p>Brown XL</p>
      </div>

      <div
        className="absolute space-y-[96px] top-[593px] left-[1501px] 
      w-[32px] h-[1158px] text-[#15245E] text-[14px] font-Jose font-semibold
      max-sm:top-[1135px] max-sm:left-[320px] max-sm:text-[10px] max-sm:space-y-[104px]"
      >
        <p>$32.00</p>
        <p>$39.00</p>
        <p>$26.00</p>
        <p>$42.00</p>
        <p>$99.00</p>
      </div>

      <div
        className="absolute space-y-[116px] top-[659px] left-[1175px] 
      w-[369px] h-[464px]
      max-sm:left-[10px] max-sm:top-[1210px] max-sm:w-[340px]"
      >
        <p className="border-b-[1px] border-[#E1E1E4]"></p>
        <p className="border-b-[1px] border-[#E1E1E4]"></p>
        <p className="border-b-[1px] border-[#E1E1E4]"></p>
        <p className="border-b-[1px] border-[#E1E1E4]"></p>
        <p className="border-b-[1px] border-[#E1E1E4]"></p>
      </div>

      <div
        className="absolute top-[1165px] left-[1175px] 
      w-[371px] h-[284px] bg-[#F4F4FC] rounded
      max-sm:left-[10px] max-sm:top-[1710px] max-sm:w-[340px] max-sm:h-[230px]"
      ></div>
      <p
        className="absolute top-[1199px] left-[1198px] font-lato
      text-[18px] text-[#1D3178] font-semibold
      max-sm:text-[12px] max-sm:left-[20px] max-sm:top-[1730px]"
      >
        Subtotals:
      </p>
      <p
        className="absolute top-[1268px] left-[1204px] font-lato
      text-[18px] text-[#1D3178] font-medium
      max-sm:text-[12px] max-sm:left-[20px] max-sm:top-[1790px]"
      >
        Totals:
      </p>

      <div
        className="absolute space-y-[67px] top-[1234px] left-[1201px] 
      w-[310px]
      max-sm:left-[20px] max-sm:top-[1752px] max-sm:space-y-[58px] max-sm:w-[320px]"
      >
        <p className="border-b-[2px] border-[#E8E6F1]"></p>
        <p className="border-b-[2px] border-[#E8E6F1]"></p>
      </div>

      <p
        className="absolute top-[1201px] left-[1455px] font-lato
      text-[16px] text-[#15245E]
      max-sm:text-[10px] max-sm:left-[295px] max-sm:top-[1730px]"
      >
        ‎£219.00
      </p>
      <p
        className="absolute top-[1270px] left-[1462px] font-lato
      text-[16px] text-[#15245E]
      max-sm:text-[10px] max-sm:left-[295px] max-sm:top-[1790px]"
      >
        ‎£325.00
      </p>

      <i
        className="fa-solid fa-circle-check absolute top-[1332px] left-[1205px]
 text-[#19D16F] text-[8px]
 max-sm:top-[1850px] max-sm:left-[20px]"
      ></i>

      <p
        className="absolute top-[1328px] left-[1220px] font-lato
      text-[12px] text-[#8A91AB]
      max-sm:text-[10px] max-sm:top-[1846px] max-sm:left-[34px]"
      >
        Shipping & taxes calculated at checkout
      </p>

      <Link href="/pages/order">
        <button
          className="absolute top-[1377px] left-[1204px] font-lato
      text-[14px] text-[#FFFFFF] text-center w-[312px] h-[40px]
      font-bold rounded bg-[#19D16F]
      max-sm:left-[20px] max-sm:top-[1875px]
          max-sm:text-[12px] max-sm:w-[320px] max-sm:h-[40px]"
        >
          Proceed To Checkout
        </button>
      </Link>

      <h3
        className="absolute top-[630px] left-[405px] font-Jose
      text-[18px] text-[#1D3178] font-bold
      max-sm:left-[20px] max-sm:top-[390px] max-sm:text-[12px]"
      >
        Contact Information
      </h3>
      <p
        className="absolute top-[625px] left-[912px] font-lato
      text-[14px] text-[#C1C8E1] font-medium
      max-sm:left-[200px] max-sm:top-[390px] max-sm:text-[10px]"
      >
        Already have an account? Log in
      </p>
      <p
        className="absolute top-[690px] left-[405px] font-lato
      text-[14px] text-[#C1C8E1] font-semibold
      max-sm:left-[20px] max-sm:top-[440px] max-sm:text-[10px]"
      >
        Email or mobile phone number
      </p>
      <p
        className="border-b-[2px] border-[#E8E6F1] absolute top-[720px] left-[405px]
      w-[698px]
      max-sm:left-[20px] max-sm:top-[460px] max-sm:w-[320px]"
      ></p>
      <i
        className="fa-solid fa-square-check absolute top-[756px] left-[406px]
 text-[#19D16F] text-[8px]
 max-sm:left-[20px] max-sm:top-[484px]"
      ></i>
      <p
        className="absolute top-[752px] left-[422px] font-lato
      text-[12px] text-[#8A91AB] font-medium
      max-sm:left-[32px] max-sm:top-[480px] max-sm:text-[10px]"
      >
        Keep me up to date on news and excluive offers
      </p>
      <h3
        className="absolute top-[875px] left-[405px] font-Jose
      text-[18px] text-[#1D3178] font-bold
      max-sm:left-[20px] max-sm:top-[560px] max-sm:text-[12px]"
      >
        Shipping address
      </h3>

      <div
        className="absolute space-y-[55px] top-[969px] left-[407px] 
      w-[698px] font-lato font-medium text-[14px] text-[#C1C8E1]
      max-sm:left-[20px] max-sm:top-[610px] max-sm:w-[320px] max-sm:text-[10px]"
      >
        <div className="flex space-x-6">
          <p className="border-b-[2px] border-[#E8E6F1] w-[336px]">
            First name (optional)
          </p>
          <p className="border-b-[2px] border-[#E8E6F1] w-[336px]">Last name</p>
        </div>

        <p className="border-b-[2px] border-[#E8E6F1]">Address</p>
        <p className="border-b-[2px] border-[#E8E6F1]">
          Appaetnentment,suit,e.t.c (optinal)
        </p>
        <p className="border-b-[2px] border-[#E8E6F1]">City</p>

        <div className="flex space-x-6">
          <p className="border-b-[2px] border-[#E8E6F1] w-[338px]">
            Bangladesh
          </p>
          <p className="border-b-[2px] border-[#E8E6F1] w-[336px]">
            Postal Code
          </p>
        </div>
      </div>

      <Link href="/pages/demo">
        <button
          className="absolute top-[1372px] left-[405px] font-Jose
      text-[16px] text-[#FFFFFF] text-center w-[182px] h-[44px] 
      rounded-[2px] bg-[#FB2E86] font-semibold
      max-sm:left-[20px] max-sm:top-[980px]
          max-sm:text-[12px] max-sm:w-[140px] max-sm:h-[40px]"
        >
          Continue Shipping
        </button>
      </Link>

      <footer
        className="absolute top-[1807px]
      max-sm:top-[2030px]"
      >
        <Footer />
      </footer>
    </>
  );
}

export default page;
