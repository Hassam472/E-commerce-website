import React from "react";
import Image from "next/image";
import about from "@/images/about.jpeg";
import Footer from "@/components/Footer";
import sh1 from "@/images/shopex1.png";
import sh2 from "@/images/shopex2.png";
import sh3 from "@/images/shopex3.png";
import sh4 from "@/images/shopex4.png";
import cl1 from "@/images/client1.jpeg";
import cl2 from "@/images/client2.jpeg";
import cl3 from "@/images/client3.jpeg";
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
        About Us
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
        . About Us
      </p>

      <div
        className="absolute top-[530px] left-[375px] w-[552px] h-[409px] 
      bg-[#2B3CAB] rounded-md
      max-sm:w-[220px] max-sm:h-[190px] max-sm:top-[330px] max-sm:left-[60px]"
      ></div>

      <Image
        src={about}
        alt="about"
        className="absolute top-[530px] left-[390px] 
      w-[555px] h-[390px] rounded-md
      max-sm:w-[220px] max-sm:h-[180px] max-sm:top-[330px] max-sm:left-[70px]"
      />

      <h2
        className="absolute top-[571px] left-[975px] font-Jose
      text-[36px] text-[#151875] font-bold w-[522px]
      max-sm:left-[60px] max-sm:top-[540px] max-sm:w-[230px] max-sm:text-[22px]"
      >
        Know About Our Ecommerce Business, History
      </h2>

      <p
        className="absolute top-[681px] left-[975px] font-lato
      text-[16px] text-[#8A8FB9] font-semibold w-[550px] leading-6
      max-sm:left-[60px] max-sm:top-[640px] max-sm:w-[230px] max-sm:text-[12px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
        ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
        amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
        quis bibendum quam.
      </p>

      <Link href="/pages/contact">
      <button
        className="absolute top-[830px] left-[975px] rounded-sm font-lato
      text-[18px] text-[#FFFFFF] bg-[#FB2E86] font-semibold w-[145px] h-[44px]
      max-sm:left-[60px] max-sm:top-[795px]
          max-sm:text-[14px] max-sm:w-[110px] max-sm:h-[40px]"
      >
        Contact us
      </button>
      </Link>

      <h3
        className="absolute top-[1080px] left-[827px] font-Jose
      text-[42px] text-[#000000] font-bold
      max-sm:left-[100px] max-sm:top-[900px] max-sm:text-[26px]"
      >
        Our Features
      </h3>

      <div
        className="absolute top-[1173px] left-[375px] w-[1218px] h-[320px] 
      flex justify-between

      max-sm:w-[260px] max-sm:top-[950px] max-sm:space-y-[50px]
      max-sm:left-[50px] max-sm:flex-col"
      >

        <div
          className="w-[270px] h-[320px] bg-[#FFFFFF] shadow-md space-y-[20px] 
        text-center pt-40
        max-sm:w-[250px] max-sm:h-[300px] max-sm:space-y-[10px]"
        >
          <p className="font-Jose text-[22px] text-[#151875] font-bold
          max-sm:text-[18px]">
            Free Delivery
          </p>
          <p className="font-lato text-[16px] text-[#1A0B5B4D] font-bold
          max-sm:text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>

        <div
          className="w-[270px] h-[320px] bg-[#FFFFFF] shadow-md space-y-[20px] 
        text-center pt-40 border-b-2 border-[#FF9100]
        max-sm:w-[250px] max-sm:h-[300px] max-sm:space-y-[10px]"
        >
          <p className="font-Jose text-[22px] text-[#151875] font-bold
          max-sm:text-[18px]">
            100% Cash Back
          </p>
          <p className="font-lato text-[16px] text-[#1A0B5B4D] font-bold
          max-sm:text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>

        <div
          className="w-[270px] h-[320px] bg-[#FFFFFF] shadow-md space-y-[20px] 
        text-center pt-40
        max-sm:w-[250px] max-sm:h-[300px] max-sm:space-y-[10px]"
        >
          <p className="font-Jose text-[22px] text-[#151875] font-bold
          max-sm:text-[18px]">
            Quality Product
          </p>
          <p className="font-lato text-[16px] text-[#1A0B5B4D] font-bold
          max-sm:text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>

        <div
          className="w-[270px] h-[320px] bg-[#FFFFFF] shadow-md space-y-[20px] 
        text-center pt-40
        max-sm:w-[250px] max-sm:h-[300px] max-sm:space-y-[10px]"
        >
          <p className="font-Jose text-[22px] text-[#151875] font-bold
          max-sm:text-[18px]">
            24/7 Support
          </p>
          <p className="font-lato text-[16px] text-[#1A0B5B4D] font-bold
          max-sm:text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
      </div>

      <div
        className="absolute top-[1235px] left-[478px] w-[1002px] h-[65px] 
      flex justify-between
      max-sm:w-[260px] max-sm:top-[1020px] max-sm:space-y-[220px]
      max-sm:left-[140px] max-sm:flex-col"
      >
        <Image src={sh1} alt="sh1" className="w-[65px] h-[65px]" />
        <Image src={sh2} alt="sh2" className="w-[65px] h-[65px]" />
        <Image src={sh3} alt="sh3" className="w-[65px] h-[65px]" />
        <Image src={sh4} alt="sh4" className="w-[65px] h-[65px]" />
      </div>

      <div
        className="absolute top-[1626px] w-[1920px] h-[503px] 
      bg-[#FBFBFF] font-lato text-center content-center text-[#8A8FB9]
      max-sm:w-[360px] max-sm:top-[2100px]"
      >
        <p className="text-[#151875] text-[22px] mt-[220px]">Selina Gomez</p>
        <p className="text-[10px]">Ceo At Webecy Digital</p>
        <p className="w-[689px] ml-[616px] mt-[30px] text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
          ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
          nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
          lacus volutpat praesent.
        </p>
        <p className="text-xl mt-[12px]">
            <i className="fa-solid fa-minus text-[#FF75B0]"></i>
            <i className="fa-solid fa-minus text-[#FB2E86]"></i>
            <i className="fa-solid fa-minus text-[#FF75B0]"></i>
          </p>
      </div>

      <Image
          src={cl1}
          alt="cl1"
          className="w-[55px] h-[55px] rounded-sm 
        border-[1px] border-green-400 absolute top-[1810px] left-[860px]"
        />
        <Image
          src={cl2}
          alt="cl2"
          className="w-[55px] h-[59px] rounded-sm 
        border-[1px] border-green-400 absolute top-[1800px] left-[925px]"
        />
        <Image
          src={cl3}
          alt="cl3"
          className="w-[55px] h-[55px] rounded-sm 
        border-[1px] border-green-400 absolute top-[1810px] left-[990px]"
        />

      

      <h3
        className="absolute top-[1697px] left-[809px] font-Jose
      text-[42px] text-[#000000] font-bold"
      >
        Our Client Say!
      </h3>

      <footer className="absolute top-[2434px]
      max-sm:top-[2800px]">
        <Footer />
      </footer>
    </>
  );
}

export default page;
