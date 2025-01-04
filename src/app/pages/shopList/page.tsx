import React from "react";
import Image from "next/image";
import sl1 from "@/images/sl1.jpeg";
import sl2 from "@/images/sl2.jpeg";
import sl3 from "@/images/sl3.jpeg";
import sl4 from "@/images/sl4.jpeg";
import sl5 from "@/images/sl5.jpeg";
import sl6 from "@/images/sl6.jpeg";
import sl7 from "@/images/sl7.jpeg";
import logo from "@/images/logo.png";
import Ecommerce from "@/components/Ecommerce";
import Footer from "@/components/Footer";

function shopList() {
  return (
    <>
      <div className="absolute top-[125px] w-[1920px] h-[286px] bg-[#F6F5FF]
      max-sm:w-[360px] max-sm:h-[166px]"></div>
      <h1
        className="absolute top-[221px] left-[374px] font-Jose
      text-[36px] text-[#101750] font-bold
      max-sm:left-[10px] max-sm:top-[180px] max-sm:text-[22px]"
      >
        Shop List
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
        . Shop List
      </p>

      <Ecommerce/>

      {/* sl1 */}
      <div
        className="w-[1141px] h-[254px] absolute top-[656px] left-[374px] 
      bg-[#FFFFFF] shadow
      max-sm:w-[340px] max-sm:h-[140px] max-sm:top-[470px] max-sm:left-[10px]"
      ></div>

      <Image
        src={sl1}
        alt="sl1"
        className="w-[314px] h-[218px] absolute top-[673px] left-[394px]
        max-sm:top-[485px] max-sm:left-[20px] max-sm:w-[120px] max-sm:h-[93px]"
      />

      <h2
        className="absolute top-[706px] left-[739px]
      font-Jose text-[#111C85] text-[20px] font-bold
      max-sm:top-[480px] max-sm:left-[150px] max-sm:text-[14px]"
      >
        Accumsan tincidunt
      </h2>
      <p className="absolute top-[710px] text-[12px] left-[942px] space-x-2
      max-sm:top-[482px] max-sm:left-[290px] max-sm:text-[10px]">
        <i className="fa-solid fa-circle text-[#DE9034]"></i>
        <i className="fa-solid fa-circle text-[#EC42A2]"></i>
        <i className="fa-solid fa-circle text-[#8568FF]"></i>
      </p>

      <p
        className="text-[15px] text-[#111C85] font-Jose absolute 
          top-[741px] left-[739px]
          max-sm:top-[500px] max-sm:left-[150px] max-sm:text-[12px]"
      >
        $26.00
      </p>
      <p
        className="text-[15px] line-through text-[#FF2AAA] font-Jose absolute 
          top-[741px] left-[796px]
          max-sm:top-[500px] max-sm:left-[195px] max-sm:text-[12px]"
      >
        $42.00
      </p>
      <div className="absolute top-[741px] left-[862px] text-xs space-x-1
      max-sm:top-[500px] max-sm:left-[245px] max-sm:text-[8px]">
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#B2B2B2]"></i>
      </div>
      <p className="text-[17px] text-[#9295AA] leading-7 font-lato absolute 
          top-[767px] left-[739px] w-[592px]
          max-sm:top-[520px] max-sm:left-[150px] max-sm:text-[10px] max-sm:w-[190px]
          max-sm:leading-4 max-sm:text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
        adipiscing in phasellus non in justo.
      </p>
      <div className="absolute top-[844px] left-[738px] w-[144px] h-[34px] 
       text-xl space-x-10 text-[#535399]
       max-sm:text-xs max-sm:top-[590px] max-sm:left-[150px] max-sm:space-x-5">
      <i className="fa-solid fa-cart-shopping"></i>
      <i className="fa-regular fa-heart"></i>
      <i className="fa-solid fa-magnifying-glass-plus"></i>
      </div>

      {/* sl2 */}
      <div
        className="w-[1141px] h-[254px] absolute top-[943px] left-[374px] 
      bg-[#FFFFFF] shadow
      max-sm:w-[340px] max-sm:h-[150px] max-sm:top-[650px] max-sm:left-[10px]"
      ></div>

      <Image
        src={sl2}
        alt="sl2"
        className="w-[313px] h-[217px] absolute top-[960px] left-[394px]
        max-sm:top-[665px] max-sm:left-[20px] max-sm:w-[120px] max-sm:h-[93px]"
      />

      <h2
        className="absolute top-[993px] left-[739px]
      font-Jose text-[#111C85] text-[20px] font-bold
      max-sm:top-[665px] max-sm:left-[150px] max-sm:text-[14px]"
      >
        In nulla
      </h2>
      <p className="absolute top-[997px] text-[12px] left-[942px] space-x-2
      max-sm:top-[665px] max-sm:left-[290px] max-sm:text-[10px]">
        <i className="fa-solid fa-circle text-[#DE9034]"></i>
        <i className="fa-solid fa-circle text-[#EC42A2]"></i>
        <i className="fa-solid fa-circle text-[#8568FF]"></i>
      </p>

      <p
        className="text-[15px] text-[#111C85] font-Jose absolute 
          top-[1028px] left-[739px]
          max-sm:top-[685px] max-sm:left-[150px] max-sm:text-[12px]"
      >
        $26.00
      </p>
      <p
        className="text-[15px] line-through text-[#FF2AAA] font-Jose absolute 
          top-[1028px] left-[796px]
          max-sm:top-[685px] max-sm:left-[195px] max-sm:text-[12px]"
      >
        $42.00
      </p>
      <div className="absolute top-[1028px] left-[862px] text-xs space-x-1
      max-sm:top-[685px] max-sm:left-[245px] max-sm:text-[8px]">
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#B2B2B2]"></i>
      </div>
      <p className="text-[17px] text-[#9295AA] leading-7 font-lato absolute 
          top-[1054px] left-[739px] w-[592px]
          max-sm:top-[705px] max-sm:left-[150px] max-sm:text-[10px] max-sm:w-[190px]
          max-sm:leading-4 max-sm:text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
        adipiscing in phasellus non in justo.
      </p>
      <div className="absolute top-[1131px] left-[738px] w-[144px] h-[34px] 
       text-xl space-x-10 text-[#535399]
       max-sm:text-xs max-sm:top-[775px] max-sm:left-[150px] max-sm:space-x-5">
      <i className="fa-solid fa-cart-shopping"></i>
      <i className="fa-regular fa-heart"></i>
      <i className="fa-solid fa-magnifying-glass-plus"></i>
      </div>

      {/* sl3 */}
      <div
        className="w-[1141px] h-[254px] absolute top-[1231px] left-[374px] 
      bg-[#FFFFFF] shadow
      max-sm:w-[340px] max-sm:h-[150px] max-sm:top-[830px] max-sm:left-[10px]"
      ></div>

      <Image
        src={sl3}
        alt="sl3"
        className="w-[313px] h-[217px] absolute top-[1248px] left-[394px]
        max-sm:top-[850px] max-sm:left-[20px] max-sm:w-[120px] max-sm:h-[93px]"
      />

      <h2
        className="absolute top-[1281px] left-[739px]
      font-Jose text-[#111C85] text-[20px] font-bold
      max-sm:top-[850px] max-sm:left-[150px] max-sm:text-[14px]"
      >
        Vel sem
      </h2>
      <p className="absolute top-[1285px] text-[12px] left-[942px] space-x-2
      max-sm:top-[850px] max-sm:left-[290px] max-sm:text-[10px]">
        <i className="fa-solid fa-circle text-[#DE9034]"></i>
        <i className="fa-solid fa-circle text-[#EC42A2]"></i>
        <i className="fa-solid fa-circle text-[#8568FF]"></i>
      </p>

      <p
        className="text-[15px] text-[#111C85] font-Jose absolute 
          top-[1316px] left-[739px]
          max-sm:top-[870px] max-sm:left-[150px] max-sm:text-[12px]"
      >
        $26.00
      </p>
      <p
        className="text-[15px] line-through text-[#FF2AAA] font-Jose absolute 
          top-[1316px] left-[796px]
          max-sm:top-[870px] max-sm:left-[195px] max-sm:text-[12px]"
      >
        $42.00
      </p>
      <div className="absolute top-[1316px] left-[862px] text-xs space-x-1
      max-sm:top-[870px] max-sm:left-[245px] max-sm:text-[8px]">
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#B2B2B2]"></i>
      </div>
      <p className="text-[17px] text-[#9295AA] leading-7 font-lato absolute 
          top-[1342px] left-[739px] w-[592px]
          max-sm:top-[890px] max-sm:left-[150px] max-sm:text-[10px] max-sm:w-[190px]
          max-sm:leading-4 max-sm:text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
        adipiscing in phasellus non in justo.
      </p>
      <div className="absolute top-[1419px] left-[738px] w-[144px] h-[34px] 
       text-xl space-x-10 text-[#535399]
       max-sm:text-xs max-sm:top-[960px] max-sm:left-[150px] max-sm:space-x-5">
      <i className="fa-solid fa-cart-shopping"></i>
      <i className="fa-regular fa-heart"></i>
      <i className="fa-solid fa-magnifying-glass-plus"></i>
      </div>

      {/* sl4 */}
      <div
        className="w-[1141px] h-[254px] absolute top-[1519px] left-[374px] 
      bg-[#FFFFFF] shadow
      max-sm:w-[340px] max-sm:h-[150px] max-sm:top-[1010px] max-sm:left-[10px]"
      ></div>

      <Image
        src={sl4}
        alt="sl4"
        className="w-[313px] h-[217px] absolute top-[1536px] left-[390px]
        max-sm:top-[1030px] max-sm:left-[20px] max-sm:w-[120px] max-sm:h-[93px]"
      />

      <h2
        className="absolute top-[1569px] left-[739px]
      font-Jose text-[#111C85] text-[20px] font-bold
      max-sm:top-[1030px] max-sm:left-[150px] max-sm:text-[14px]"
      >
        Porttitor cum
      </h2>
      <p className="absolute top-[1569px] text-[12px] left-[942px] space-x-2
      max-sm:top-[1030px] max-sm:left-[290px] max-sm:text-[10px]">
        <i className="fa-solid fa-circle text-[#DE9034]"></i>
        <i className="fa-solid fa-circle text-[#EC42A2]"></i>
        <i className="fa-solid fa-circle text-[#8568FF]"></i>
      </p>

      <p
        className="text-[15px] text-[#111C85] font-Jose absolute 
          top-[1604px] left-[739px]
          max-sm:top-[1050px] max-sm:left-[150px] max-sm:text-[12px]"
      >
        $26.00
      </p>
      <p
        className="text-[15px] line-through text-[#FF2AAA] font-Jose absolute 
          top-[1604px] left-[796px]
          max-sm:top-[1050px] max-sm:left-[195px] max-sm:text-[12px]"
      >
        $42.00
      </p>
      <div className="absolute top-[1604px] left-[862px] text-xs space-x-1
      max-sm:top-[1050px] max-sm:left-[245px] max-sm:text-[8px]">
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#B2B2B2]"></i>
      </div>
      <p className="text-[17px] text-[#9295AA] leading-7 font-lato absolute 
          top-[1630px] left-[739px] w-[592px]
          max-sm:top-[1070px] max-sm:left-[150px] max-sm:text-[10px] max-sm:w-[190px]
          max-sm:leading-4 max-sm:text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
        adipiscing in phasellus non in justo.
      </p>
      <div className="absolute top-[1707px] left-[738px] w-[144px] h-[34px] 
       text-xl space-x-10 text-[#535399]
       max-sm:text-xs max-sm:top-[1140px] max-sm:left-[150px] max-sm:space-x-5">
      <i className="fa-solid fa-cart-shopping"></i>
      <i className="fa-regular fa-heart"></i>
      <i className="fa-solid fa-magnifying-glass-plus"></i>
      </div>

      {/* sl5 */}
      <div
        className="w-[1141px] h-[254px] absolute top-[1806px] left-[374px] 
      bg-[#FFFFFF] shadow
      max-sm:w-[340px] max-sm:h-[150px] max-sm:top-[1190px] max-sm:left-[10px]"
      ></div>

      <Image
        src={sl5}
        alt="sl5"
        className="w-[313px] h-[217px] absolute top-[1823px] left-[390px]
        max-sm:top-[1210px] max-sm:left-[20px] max-sm:w-[120px] max-sm:h-[93px]"
      />

      <h2
        className="absolute top-[1856px] left-[739px]
      font-Jose text-[#111C85] text-[20px] font-bold
      max-sm:top-[1210px] max-sm:left-[150px] max-sm:text-[14px]"
      >
        Nunc in
      </h2>
      <p className="absolute top-[1860px] text-[12px] left-[942px] space-x-2
      max-sm:top-[1210px] max-sm:left-[290px] max-sm:text-[10px]">
        <i className="fa-solid fa-circle text-[#DE9034]"></i>
        <i className="fa-solid fa-circle text-[#EC42A2]"></i>
        <i className="fa-solid fa-circle text-[#8568FF]"></i>
      </p>

      <p
        className="text-[15px] text-[#111C85] font-Jose absolute 
          top-[1891px] left-[739px]
          max-sm:top-[1230px] max-sm:left-[150px] max-sm:text-[12px]"
      >
        $26.00
      </p>
      <p
        className="text-[15px] line-through text-[#FF2AAA] font-Jose absolute 
          top-[1891px] left-[796px]
          max-sm:top-[1230px] max-sm:left-[195px] max-sm:text-[12px]"
      >
        $42.00
      </p>
      <div className="absolute top-[1891px] left-[862px] text-xs space-x-1
      max-sm:top-[1230px] max-sm:left-[245px] max-sm:text-[8px]">
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#B2B2B2]"></i>
      </div>
      <p className="text-[17px] text-[#9295AA] leading-7 font-lato absolute 
          top-[1917px] left-[739px] w-[592px]
          max-sm:top-[1250px] max-sm:left-[150px] max-sm:text-[10px] max-sm:w-[190px]
          max-sm:leading-4 max-sm:text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
        adipiscing in phasellus non in justo.
      </p>
      <div className="absolute top-[1994px] left-[738px] w-[144px] h-[34px] 
       text-xl space-x-10 text-[#535399]
       max-sm:text-xs max-sm:top-[1320px] max-sm:left-[150px] max-sm:space-x-5">
      <i className="fa-solid fa-cart-shopping"></i>
      <i className="fa-regular fa-heart"></i>
      <i className="fa-solid fa-magnifying-glass-plus"></i>
      </div>

      {/* sl6 */}
      <div
        className="w-[1141px] h-[254px] absolute top-[2093px] left-[374px] 
      bg-[#FFFFFF] shadow
      max-sm:w-[340px] max-sm:h-[150px] max-sm:top-[1370px] max-sm:left-[10px]"
      ></div>

      <Image
        src={sl6}
        alt="sl6"
        className="w-[313px] h-[217px] absolute top-[2110px] left-[390px]
        max-sm:top-[1390px] max-sm:left-[20px] max-sm:w-[120px] max-sm:h-[93px]"
      />

      <h2
        className="absolute top-[2143px] left-[739px]
      font-Jose text-[#111C85] text-[20px] font-bold
      max-sm:top-[1390px] max-sm:left-[150px] max-sm:text-[14px]"
      >
        Vitae facilisis
      </h2>
      <p className="absolute top-[2147px] text-[12px] left-[942px] space-x-2
      max-sm:top-[1390px] max-sm:left-[290px] max-sm:text-[10px]">
        <i className="fa-solid fa-circle text-[#DE9034]"></i>
        <i className="fa-solid fa-circle text-[#EC42A2]"></i>
        <i className="fa-solid fa-circle text-[#8568FF]"></i>
      </p>

      <p
        className="text-[15px] text-[#111C85] font-Jose absolute 
          top-[2178px] left-[739px]
          max-sm:top-[1410px] max-sm:left-[150px] max-sm:text-[12px]"
      >
        $26.00
      </p>
      <p
        className="text-[15px] line-through text-[#FF2AAA] font-Jose absolute 
          top-[2178px] left-[796px]
          max-sm:top-[1410px] max-sm:left-[195px] max-sm:text-[12px]"
      >
        $42.00
      </p>
      <div className="absolute top-[2178px] left-[862px] text-xs space-x-1
      max-sm:top-[1410px] max-sm:left-[245px] max-sm:text-[8px]">
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#B2B2B2]"></i>
      </div>
      <p className="text-[17px] text-[#9295AA] leading-7 font-lato absolute 
          top-[2204px] left-[739px] w-[592px]
          max-sm:top-[1430px] max-sm:left-[150px] max-sm:text-[10px] max-sm:w-[190px]
          max-sm:leading-4 max-sm:text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
        adipiscing in phasellus non in justo.
      </p>
      <div className="absolute top-[2281px] left-[738px] w-[144px] h-[34px] 
       text-xl space-x-10 text-[#535399]
       max-sm:text-xs max-sm:top-[1500px] max-sm:left-[150px] max-sm:space-x-5">
      <i className="fa-solid fa-cart-shopping"></i>
      <i className="fa-regular fa-heart"></i>
      <i className="fa-solid fa-magnifying-glass-plus"></i>
      </div>

      {/* sl7 */}
      <div
        className="w-[1141px] h-[254px] absolute top-[2381px] left-[374px] 
      bg-[#FFFFFF] shadow
      max-sm:w-[340px] max-sm:h-[150px] max-sm:top-[1550px] max-sm:left-[10px]"
      ></div>

      <Image
        src={sl7}
        alt="sl7"
        className="w-[313px] h-[217px] absolute top-[2398px] left-[390px]
        max-sm:top-[1570px] max-sm:left-[20px] max-sm:w-[120px] max-sm:h-[93px]"
      />

      <h2
        className="absolute top-[2431px] left-[739px]
      font-Jose text-[#111C85] text-[20px] font-bold
      max-sm:top-[1570px] max-sm:left-[150px] max-sm:text-[14px]"
      >
        Curabitur lectus
      </h2>
      <p className="absolute top-[2435px] text-[12px] left-[942px] space-x-2
      max-sm:top-[1570px] max-sm:left-[290px] max-sm:text-[10px]">
        <i className="fa-solid fa-circle text-[#DE9034]"></i>
        <i className="fa-solid fa-circle text-[#EC42A2]"></i>
        <i className="fa-solid fa-circle text-[#8568FF]"></i>
      </p>

      <p
        className="text-[15px] text-[#111C85] font-Jose absolute 
          top-[2466px] left-[739px]
          max-sm:top-[1590px] max-sm:left-[150px] max-sm:text-[12px]"
      >
        $26.00
      </p>
      <p
        className="text-[15px] line-through text-[#FF2AAA] font-Jose absolute 
          top-[2466px] left-[796px]
          max-sm:top-[1590px] max-sm:left-[195px] max-sm:text-[12px]"
      >
        $42.00
      </p>
      <div className="absolute top-[2466px] left-[862px] text-xs space-x-1
      max-sm:top-[1590px] max-sm:left-[245px] max-sm:text-[8px]">
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#FFC416]"></i>
      <i className="fa-solid fa-star text-[#B2B2B2]"></i>
      </div>
      <p className="text-[17px] text-[#9295AA] leading-7 font-lato absolute 
          top-[2492px] left-[739px] w-[592px]
          max-sm:top-[1610px] max-sm:left-[150px] max-sm:text-[10px] max-sm:w-[190px]
          max-sm:leading-4 max-sm:text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
        adipiscing in phasellus non in justo.
      </p>
      <div className="absolute top-[2569px] left-[738px] w-[144px] h-[34px] 
       text-xl space-x-10 text-[#535399]
       max-sm:text-xs max-sm:top-[1680px] max-sm:left-[150px] max-sm:space-x-5">
      <i className="fa-solid fa-cart-shopping"></i>
      <i className="fa-regular fa-heart"></i>
      <i className="fa-solid fa-magnifying-glass-plus"></i>
      </div>

      <Image
        src={logo}
        alt="logo"
        className="absolute top-[2869px] left-[508px] w-[904px] h-[93px]
        max-sm:top-[1750px] max-sm:left-[0px] max-sm:w-[360px]
          max-sm:h-[43px]"
      />

<footer className="absolute top-[3094px]
max-sm:top-[1850px]">
        <Footer/>
      </footer>
    </>
  );
}

export default shopList;
