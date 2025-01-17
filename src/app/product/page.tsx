import React from "react";
import icon from "@/images/icon.jpg";
import Image from "next/image";
import Link from "next/link";
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
      <div
        className="absolute top-[125px] w-[1920px] h-[286px] bg-[#F6F5FF]
      max-sm:w-[360px] max-sm:h-[166px]"
      ></div>
      <h1
        className="absolute top-[221px] left-[374px] font-Jose
      text-[36px] text-[#101750] font-bold
      max-sm:left-[10px] max-sm:top-[180px] max-sm:text-[22px]"
      >
        Product Details
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
        . Product Details
      </p>

      <div
        className="absolute top-[532px] left-[371px] w-[1170px] h-[509px]
       bg-[#FFFFFF] shadow-md
       max-sm:w-[340px] max-sm:h-[390px] max-sm:left-[10px] max-sm:top-[330px]"
      ></div>
      <h2
        className="absolute top-[606px] left-[972px] font-semibold
      text-[36px] text-[#0D134E] font-Jose
      max-sm:text-[16px] max-sm:top-[360px] max-sm:left-[180px]"
      >
        Playwood arm chair
      </h2>
      <div
        className="absolute top-[655px] left-[976px] text-[9px] space-x-1
      max-sm:left-[180px] max-sm:top-[385px] max-sm:text-[8px]"
      >
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
      </div>
      <p
        className="text-[14px] text-[#151875] font-Jose absolute 
          top-[651px] left-[1050px]
          max-sm:left-[250px] max-sm:top-[385px] max-sm:text-[10px]"
      >
        (22)
      </p>
      <p
        className="text-[16px] text-[#111C85] font-Jose absolute 
          top-[681px] left-[975px]
          max-sm:left-[180px] max-sm:top-[405px] max-sm:text-[10px]"
      >
        $32.00
      </p>
      <p
        className="text-[16px] line-through text-[#FF2AAA] font-Jose absolute 
          top-[681px] left-[1042px]
          max-sm:left-[220px] max-sm:top-[405px] max-sm:text-[10px]"
      >
        $42.00
      </p>
      <p
        className="text-[16px] text-[#0D134E] font-Jose absolute 
          top-[722px] left-[976px]
          max-sm:left-[180px] max-sm:top-[425px] max-sm:text-[10px]"
      >
        Color
      </p>
      <p
        className="text-[16px] text-[#A9ACC6] w-[549px] font-Jose absolute 
          top-[750px] left-[975px]
          max-sm:left-[180px] max-sm:top-[445px] max-sm:text-[10px] max-sm:w-[170px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
        porttitor purus, et volutpat sit.
      </p>
      <Link href="/pages/cart">
        <p
          className="text-[16px] text-[#151875] font-Jose absolute 
          top-[829px] left-[1046px]
          max-sm:left-[210px] max-sm:top-[500px] max-sm:text-[10px]"
        >
          Add To cart
          <i
            className="fa-regular fa-heart pl-7 text-[18px]
        max-sm:text-[10px] max-sm:pl-3"
          ></i>
        </p>
      </Link>
      <p
        className="text-[16px] text-[#151875] font-Jose absolute 
          top-[875px] left-[975px] max-sm:hidden"
      >
        Categories:
      </p>
      <p
        className="text-[16px] text-[#151875] font-Jose absolute 
          top-[914px] left-[975px] max-sm:hidden"
      >
        Tags
      </p>
      <p
        className="text-[16px] text-[#151875] font-Jose absolute 
          top-[953px] left-[975px]
          max-sm:left-[180px] max-sm:top-[520px] max-sm:text-[10px]"
      >
        Share
      </p>
      <Image
        src={icon}
        alt="icon"
        className="w-[56px] h-[12px] absolute top-[958px] left-[1032px]
        max-sm:left-[220px] max-sm:top-[523px] max-sm:w-[36px] max-sm:h-[8px]"
      />

      <div
        className="absolute top-[1172px] bg-[#F9F8FE] w-[1920px] h-[649px]
      max-sm:w-[360px] max-sm:left-0 max-sm:top-[840px] max-sm:h-[600px]"
      ></div>

      <Image
        src={pr1}
        alt="pr1"
        className="w-[375px] h-[487px] absolute 
    top-[545px] left-[556px] rounded
    max-sm:top-[340px] max-sm:left-[20px] max-sm:w-[150px] max-sm:h-[200px]"
      />
      <Image
        src={pr2}
        alt="pr2"
        className="w-[151px] h-[155px] absolute 
    top-[545px] left-[384px] rounded
    max-sm:top-[570px] max-sm:left-[20px] max-sm:w-[100px] max-sm:h-[100px]"
      />
      <Image
        src={pr3}
        alt="pr3"
        className="w-[151px] h-[155px] absolute 
    top-[711px] left-[384px] rounded
    max-sm:top-[570px] max-sm:left-[130px] max-sm:w-[100px] max-sm:h-[100px]"
      />
      <Image
        src={pr4}
        alt="pr4"
        className="w-[151px] h-[155px] absolute 
    top-[877px] left-[384px] rounded
    max-sm:top-[570px] max-sm:left-[240px] max-sm:w-[100px] max-sm:h-[100px]"
      />

      <div
        className="w-[620px] flex justify-between absolute top-[1280px] left-[376px] 
    text-[24px] text-[#151875] font-Jose font-semibold
    max-sm:text-[14px] max-sm:top-[870px] max-sm:left-[10px] max-sm:w-[340px]"
      >
        <p className="underline">Description</p>
        <p>Additional Info</p>
        <p>Reviews</p>
        <p>Video</p>
      </div>

      <p
        className="absolute top-[1364px] left-[371px] 
    text-[22px] text-[#151875] font-Jose font-semibold
    max-sm:text-[14px] max-sm:top-[910px] max-sm:left-[10px]"
      >
        Varius tempor.
      </p>
      <p
        className=" w-[1153px] leading-7 absolute top-[1400px] left-[374px] 
    text-[16px] text-[#A9ACC6] font-Jose
    max-sm:text-[12px] max-sm:top-[935px] max-sm:left-[10px] max-sm:w-[340px]
    max-sm:leading-5 max-sm:text-justify"
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
    text-[22px] text-[#151875] font-Jose font-semibold
    max-sm:text-[14px] max-sm:top-[1150px] max-sm:left-[10px]"
      >
        More details
      </p>

      <p
        className="w-[1153px] leading-10 absolute top-[1561px] left-[405px] 
    text-[16px] text-[#A9ACC6] font-Jose
    max-sm:text-[12px] max-sm:top-[1175px] 
max-sm:left-[30px] max-sm:w-[280px] max-sm:leading-5"
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
       top-[1569px] left-[380px] text-[18px]
       max-sm:top-[1178px] max-sm:left-[10px] max-sm:text-[14px] max-sm:h-[192px]"
      >
        <i className="fa-solid fa-arrow-right"></i>
        <i className="fa-solid fa-arrow-right"></i>
        <i className="fa-solid fa-arrow-right"></i>
        <i className="fa-solid fa-arrow-right"></i>
      </div>

      <h1
        className="absolute top-[1947px] left-[371px] font-Jose
      text-[36px] text-[#101750] font-bold
      max-sm:left-[85px] max-sm:top-[1480px] max-sm:text-[22px]"
      >
        Related Products
      </h1>

      <Image
        src={rp1}
        alt="rp1"
        className="w-[270px] h-[340px] absolute 
    top-[2030px] left-[371px] rounded
    max-sm:top-[1530px] max-sm:left-[40px] max-sm:h-[180px] max-sm:w-[130px]"
      />

      <Image
        src={rp2}
        alt="rp2"
        className="w-[250px] h-[316px] absolute 
    top-[2042px] left-[680px] rounded
    max-sm:top-[1530px] max-sm:left-[190px] max-sm:h-[180px] max-sm:w-[130px]"
      />

      <Image
        src={rp3}
        alt="rp3"
        className="w-[270px] h-[340px] absolute 
    top-[2030px] left-[969px] rounded
    max-sm:top-[1730px] max-sm:left-[40px] max-sm:h-[180px] max-sm:w-[130px]"
      />

      <Image
        src={rp4}
        alt="rp4"
        className="w-[270px] h-[340px] absolute 
    top-[2030px] left-[1268px] rounded
    max-sm:top-[1730px] max-sm:left-[190px] max-sm:h-[180px] max-sm:w-[130px]"
      />

      <div
        className="text-[#151875] text-[16px] w-[147px] font-Jose absolute 
          top-[2390px] left-[377px] font-semibold
          max-sm:hidden"
      >
        Mens Fashion Wear
        <p className="text-[13px] pt-[14px]">$43.00</p>
      </div>

      <div
        className="absolute top-[2390px] left-[572px] text-[9px] space-x-1
      max-sm:hidden"
      >
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#B2B2B2]"></i>
      </div>

      <div
        className="text-[#151875] text-[16px] w-[147px] font-Jose absolute 
          top-[2390px] left-[673px] font-semibold
          max-sm:hidden"
      >
        Women’s Fashion
        <p className="text-[13px] pt-[14px]">$67.00</p>
      </div>

      <div
        className="absolute top-[2390px] left-[861px] text-[9px] space-x-1
      max-sm:hidden"
      >
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
      </div>

      <div
        className="text-[#151875] text-[16px] w-[187px] font-Jose absolute 
          top-[2387px] left-[975px] font-semibold
          max-sm:hidden"
      >
        Wolx Dummy Fashion
        <p className="text-[13px] pt-[14px]">$67.00</p>
      </div>

      <div
        className="absolute top-[2390px] left-[1170px] text-[9px] space-x-1
      max-sm:hidden"
      >
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#B2B2B2]"></i>
      </div>

      <div
        className="text-[#151875] text-[16px] w-[187px] font-Jose absolute 
          top-[2389px] left-[1276px] font-semibold
          max-sm:hidden"
      >
        Top Wall Digital Clock
        <p className="text-[13px] pt-[14px]">$51.00</p>
      </div>

      <div
        className="absolute top-[2390px] left-[1469px] text-[9px] space-x-1
      max-sm:hidden"
      >
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#FFC416]"></i>
        <i className="fa-solid fa-star text-[#B2B2B2]"></i>
        <i className="fa-solid fa-star text-[#B2B2B2]"></i>
      </div>

      <Image
        src={logo}
        alt="logo"
        className="absolute top-[2559px] left-[508px] w-[904px] h-[93px]
        max-sm:top-[1980px] max-sm:left-[0px] max-sm:w-[360px]
          max-sm:h-[43px]"
      />
      <footer
        className="absolute top-[2751px]
      max-sm:top-[2070px]"
      >
        <Footer />
      </footer>
    </>
  );
}

export default page;
