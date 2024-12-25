import React from "react";
import icon from "@/images/icon.jpg";
import Image from "next/image";
import pr1 from "@/images/pr1.jpeg";
import pr2 from "@/images/pr2.jpeg";
import pr3 from "@/images/pr3.jpeg";
import pr4 from "@/images/pr4.jpeg";
import rp1 from "@/images/rp1.jpeg";
import rp2 from "@/images/rp2.jpeg";
import rp3 from "@/images/rp3.jpeg";
import rp4 from "@/images/rp4.jpeg";
import logo from "@/images/logo.png";
import Footer from "@/components/Footer";

function page() {
  return (
    <>
      <div className="absolute top-[125px] w-[1920px] h-[286px] bg-[#F6F5FF]"></div>
      <h1
        className="absolute top-[221px] left-[374px] font-Jose
      text-[36px] text-[#101750] font-bold"
      >
        Product Details
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
        . Product Details
      </p>

      <div
        className="absolute top-[532px] left-[371px] w-[1170px] h-[509px]
       bg-[#FFFFFF] shadow-md"
      ></div>
      <h2
        className="absolute top-[606px] left-[972px] font-semibold
      text-[36px] text-[#0D134E] font-Jose"
      >
        Playwood arm chair
      </h2>
      <div className="absolute top-[655px] left-[976px] text-[9px] space-x-1">
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
      </div>
      <p
        className="text-[14px] text-[#151875] font-Jose absolute 
          top-[651px] left-[1050px]"
      >
        (22)
      </p>
      <p
        className="text-[16px] text-[#111C85] font-Jose absolute 
          top-[681px] left-[975px]"
      >
        $32.00
      </p>
      <p
        className="text-[16px] line-through text-[#FF2AAA] font-Jose absolute 
          top-[681px] left-[1042px]"
      >
        $42.00
      </p>
      <p
        className="text-[16px] text-[#0D134E] font-Jose absolute 
          top-[722px] left-[976px]"
      >
        Color
      </p>
      <p
        className="text-[16px] text-[#A9ACC6] w-[549px] font-Jose absolute 
          top-[750px] left-[975px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
        porttitor purus, et volutpat sit.
      </p>
      <p
        className="text-[16px] text-[#151875] font-Jose absolute 
          top-[829px] left-[1046px]"
      >
        Add To cart
        <i className="fa-regular fa-heart pl-7 text-[18px]"></i>
      </p>
      <p
        className="text-[16px] text-[#151875] font-Jose absolute 
          top-[875px] left-[975px]"
      >
        Categories:
      </p>
      <p
        className="text-[16px] text-[#151875] font-Jose absolute 
          top-[914px] left-[975px]"
      >
        Tags
      </p>
      <p
        className="text-[16px] text-[#151875] font-Jose absolute 
          top-[953px] left-[975px]"
      >
        Share
      </p>
      <Image
        src={icon}
        alt="icon"
        className="w-[56px] h-[12px] absolute top-[958px] left-[1032px]"
      />

      <div className="absolute top-[1172px] bg-[#F9F8FE] w-[1920px] h-[649px]"></div>

      <Image
        src={pr1}
        alt="pr1"
        className="w-[375px] h-[487px] absolute 
    top-[545px] left-[556px] rounded"
      />
      <Image
        src={pr2}
        alt="pr2"
        className="w-[151px] h-[155px] absolute 
    top-[545px] left-[384px] rounded"
      />
      <Image
        src={pr3}
        alt="pr3"
        className="w-[151px] h-[155px] absolute 
    top-[711px] left-[384px] rounded"
      />
      <Image
        src={pr4}
        alt="pr4"
        className="w-[151px] h-[155px] absolute 
    top-[877px] left-[384px] rounded"
      />

      <div
        className="w-[620px] flex justify-between absolute top-[1280px] left-[376px] 
    text-[24px] text-[#151875] font-Jose font-semibold"
      >
        <p className="underline">Description</p>
        <p>Additional Info</p>
        <p>Reviews</p>
        <p>Video</p>
      </div>

      <p
        className="absolute top-[1364px] left-[371px] 
    text-[22px] text-[#151875] font-Jose font-semibold"
      >
        Varius tempor.
      </p>
      <p
        className=" w-[1153px] leading-7 absolute top-[1400px] left-[374px] 
    text-[16px] text-[#A9ACC6] font-Jose"
      >
        Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare
        faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac
        est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque,
        elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam
        tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus.
        Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu
        in fringilla vulputate nunc nec. Dui, massa viverr .
      </p>

      <p
        className="absolute top-[1523px] left-[371px] 
    text-[22px] text-[#151875] font-Jose font-semibold"
      >
        More details
      </p>

      <p
        className=" w-[1153px] leading-10 absolute top-[1561px] left-[405px] 
    text-[16px] text-[#A9ACC6] font-Jose"
      >
        Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu,
        nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
        massa viverr .Aliquam dis vulputate vulputate integer sagittis. Faucibus
        ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
        nunc nec. Dui, massa viverr .Aliquam dis vulputate vulputate integer
        sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in
        fringilla vulputate nunc nec. Dui, massa viverr .Aliquam dis vulputate
        vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo
        netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
      </p>
      <div
        className="flex flex-col h-[140px] justify-between absolute
       top-[1569px] left-[380px] text-[18px]"
      >
        <i className="fa-solid fa-arrow-right"></i>
        <i className="fa-solid fa-arrow-right"></i>
        <i className="fa-solid fa-arrow-right"></i>
        <i className="fa-solid fa-arrow-right"></i>
      </div>

      <h1
        className="absolute top-[1947px] left-[371px] font-Jose
      text-[36px] text-[#101750] font-bold"
      >
        Related Products
      </h1>

      <Image
        src={rp1}
        alt="rp1"
        className="w-[270px] h-[340px] absolute 
    top-[2030px] left-[371px] rounded"
      />

      <Image
        src={rp2}
        alt="rp2"
        className="w-[250px] h-[316px] absolute 
    top-[2042px] left-[680px] rounded"
      />

      <Image
        src={rp3}
        alt="rp3"
        className="w-[270px] h-[340px] absolute 
    top-[2030px] left-[969px] rounded"
      />

      <Image
        src={rp4}
        alt="rp4"
        className="w-[270px] h-[340px] absolute 
    top-[2030px] left-[1268px] rounded"
      />

      <div
        className="text-[#151875] text-[16px] w-[147px] font-Jose absolute 
          top-[2390px] left-[377px] font-semibold"
      >
        Mens Fashion Wear
        <p className="text-[13px] pt-[14px]">$43.00</p>
      </div>

      <div className="absolute top-[2390px] left-[572px] text-[9px] space-x-1">
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#B2B2B2]"></i>
      </div>

      <div
        className="text-[#151875] text-[16px] w-[147px] font-Jose absolute 
          top-[2390px] left-[673px] font-semibold"
      >
        Women’s Fashion
        <p className="text-[13px] pt-[14px]">$67.00</p>
      </div>

      <div className="absolute top-[2390px] left-[861px] text-[9px] space-x-1">
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
      </div>

      <div
        className="text-[#151875] text-[16px] w-[187px] font-Jose absolute 
          top-[2387px] left-[975px] font-semibold"
      >
        Wolx Dummy Fashion
        <p className="text-[13px] pt-[14px]">$67.00</p>
      </div>

      <div className="absolute top-[2390px] left-[1170px] text-[9px] space-x-1">
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#B2B2B2]"></i>
      </div>

      <div
        className="text-[#151875] text-[16px] w-[187px] font-Jose absolute 
          top-[2389px] left-[1276px] font-semibold"
      >
        Top Wall Digital Clock
        <p className="text-[13px] pt-[14px]">$51.00</p>
      </div>

      <div className="absolute top-[2390px] left-[1469px] text-[9px] space-x-1">
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#B2B2B2]"></i>
        <i className="fa-solid fa-star text-[#B2B2B2]"></i>
      </div>

      <Image
        src={logo}
        alt="logo"
        className="absolute top-[2559px] left-[508px] w-[904px] h-[93px]"
      />
      <footer className="absolute top-[2751px]">
        <Footer/>
      </footer>
    </>
  );
}

export default page;
