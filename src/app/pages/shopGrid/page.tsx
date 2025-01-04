import React from "react";
import Image from "next/image";
import sg1 from "@/images/sg1.png";
import sg2 from "@/images/sg2.png";
import sg3 from "@/images/sg3.png";
import sg4 from "@/images/sg4.png";
import sg5 from "@/images/sg5.png";
import sg6 from "@/images/sg6.png";
import sg7 from "@/images/sg7.png";
import sg8 from "@/images/sg8.png";
import sg9 from "@/images/sg9.png";
import sg10 from "@/images/sg10.png";
import sg11 from "@/images/sg11.png";
import logo from "@/images/logo.png";
import Ecommerce from "@/components/Ecommerce";
import Footer from "@/components/Footer";

function shopGrid() {
  return (
    <>
      <main className="max-sm:max-w-[360px]">
        <div
          className="absolute top-[125px] w-[1920px] h-[286px] bg-[#F6F5FF]
      max-sm:w-[360px] max-sm:h-[166px]"
        ></div>
        <h1
          className="absolute top-[221px] left-[374px] font-Jose
      text-[36px] text-[#101750] font-bold
      max-sm:left-[10px] max-sm:top-[180px] max-sm:text-[22px]"
        >
          Shop Grid Default
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
          . Shop Grid Default
        </p>

        <Ecommerce />

        {/* sg1 */}
        <div
          className="w-[270px] h-[363px] cursor-pointer absolute top-[723px] left-[374px] 
  text-center
  max-sm:top-[480px] max-sm:left-[40px]"
        >
          <div className="h-[280px] relative bg-[#F6F7FB] hover:bg-[#EBF4F3]">
            <Image
              src={sg1}
              alt="sg1"
              className="h-[201px] w-[201px] absolute left-[28px] top-[50px]"
            />
          </div>
          <p
            className="font-Jose font-bold text-[18px] absolute top-[298px] 
    left-[65px] text-[#151875]
    max-sm:text-[14px] max-sm:left-[80px]"
          >
            Vel elit euismod
          </p>
          <p className="absolute top-[324px] text-[10px] left-[114px] space-x-2">
            <i className="fa-solid fa-circle text-[#DE9034]"></i>
            <i className="fa-solid fa-circle text-[#EC42A2]"></i>
            <i className="fa-solid fa-circle text-[#8568FF]"></i>
          </p>
          <p
            className="text-[12px] text-[#151875] font-Jose absolute 
          top-[349px] left-[87px]"
          >
            $26.00
          </p>
          <p
            className="text-[12px] line-through text-[#FB2E86] font-Jose absolute 
          top-[349px] left-[140px]"
          >
            $42.00
          </p>
        </div>

        {/* sg2 */}
        <div
          className="w-[270px] h-[363px] cursor-pointer absolute top-[723px] left-[697px] 
  text-center
  max-sm:top-[893px] max-sm:left-[40px]"
        >
          <div className="h-[280px] relative bg-[#EBF4F3]">
            <Image
              src={sg2}
              alt="sg2"
              className="h-[169px] w-[169px] absolute left-[46px] top-[71px]"
            />
          </div>
          <p
            className="font-Jose w-[280px] font-bold text-[18px] absolute top-[298px] 
     text-[#151875]
     max-sm:text-[14px]"
          >
            Ultricies condimentum imperdiet
          </p>
          <p className="absolute top-[324px] text-[10px] left-[114px] space-x-2">
            <i className="fa-solid fa-circle text-[#DE9034]"></i>
            <i className="fa-solid fa-circle text-[#EC42A2]"></i>
            <i className="fa-solid fa-circle text-[#8568FF]"></i>
          </p>
          <p
            className="text-[12px] text-[#151875] font-Jose absolute 
          top-[349px] left-[87px]"
          >
            $26.00
          </p>
          <p
            className="text-[12px] line-through text-[#FB2E86] font-Jose absolute 
          top-[349px] left-[140px]"
          >
            $42.00
          </p>
        </div>

        {/* sg3 */}
        <div
          className="w-[270px] h-[363px] cursor-pointer absolute top-[723px] left-[1020px] 
  text-center
  max-sm:top-[1306px] max-sm:left-[40px]"
        >
          <div className="h-[280px] relative bg-[#F6F7FB] hover:bg-[#EBF4F3]">
            <Image
              src={sg3}
              alt="sg3"
              className="h-[201px] w-[201px] absolute left-[30px] top-[50px]"
            />
          </div>
          <p
            className="font-Jose font-bold text-[18px] absolute top-[298px] 
    left-[45px] text-[#151875]
    max-sm:text-[14px] max-sm:left-[55px]"
          >
            Vitae suspendisse sed
          </p>
          <p className="absolute top-[324px] text-[10px] left-[114px] space-x-2">
            <i className="fa-solid fa-circle text-[#DE9034]"></i>
            <i className="fa-solid fa-circle text-[#EC42A2]"></i>
            <i className="fa-solid fa-circle text-[#8568FF]"></i>
          </p>
          <p
            className="text-[12px] text-[#151875] font-Jose absolute 
          top-[349px] left-[87px]"
          >
            $26.00
          </p>
          <p
            className="text-[12px] line-through text-[#FB2E86] font-Jose absolute 
          top-[349px] left-[140px]"
          >
            $42.00
          </p>
        </div>

        {/* sg4 */}
        <div
          className="w-[270px] h-[363px] cursor-pointer absolute top-[723px] left-[1343px] 
  text-center
  max-sm:top-[1719px] max-sm:left-[40px]"
        >
          <div className="h-[280px] relative bg-[#F6F7FB] hover:bg-[#EBF4F3]">
            <Image
              src={sg4}
              alt="sg4"
              className="h-[188px] w-[188px] absolute left-[36px] top-[63px]"
            />
          </div>
          <p
            className="font-Jose font-bold text-[18px] absolute top-[298px] 
    left-[55px] text-[#151875]
    max-sm:text-[14px] max-sm:left-[70px]"
          >
            Sed at fermentum
          </p>
          <p className="absolute top-[324px] text-[10px] left-[114px] space-x-2">
            <i className="fa-solid fa-circle text-[#DE9034]"></i>
            <i className="fa-solid fa-circle text-[#EC42A2]"></i>
            <i className="fa-solid fa-circle text-[#8568FF]"></i>
          </p>
          <p
            className="text-[12px] text-[#151875] font-Jose absolute 
          top-[349px] left-[87px]"
          >
            $26.00
          </p>
          <p
            className="text-[12px] line-through text-[#FB2E86] font-Jose absolute 
          top-[349px] left-[140px]"
          >
            $42.00
          </p>
        </div>

        {/* sg5 */}
        <div
          className="w-[270px] h-[363px] cursor-pointer absolute top-[1167px] left-[374px] 
  text-center
  max-sm:top-[2132px] max-sm:left-[40px]"
        >
          <div className="h-[280px] relative bg-[#F6F7FB] hover:bg-[#EBF4F3]">
            <Image
              src={sg5}
              alt="sg5"
              className="h-[139px] w-[128px] absolute left-[76px] top-[86px]"
            />
          </div>
          <p
            className="font-Jose font-bold text-[18px] absolute top-[298px] 
    left-[46px] text-[#151875]
    max-sm:text-[14px] max-sm:left-[58px]"
          >
            Fusce pellentesque at
          </p>
          <p className="absolute top-[324px] text-[10px] left-[114px] space-x-2">
            <i className="fa-solid fa-circle text-[#DE9034]"></i>
            <i className="fa-solid fa-circle text-[#EC42A2]"></i>
            <i className="fa-solid fa-circle text-[#8568FF]"></i>
          </p>
          <p
            className="text-[12px] text-[#151875] font-Jose absolute 
          top-[349px] left-[87px]"
          >
            $26.00
          </p>
          <p
            className="text-[12px] line-through text-[#FB2E86] font-Jose absolute 
          top-[349px] left-[140px]"
          >
            $42.00
          </p>
        </div>

        {/* sg6 */}
        <div
          className="w-[270px] h-[363px] cursor-pointer absolute top-[1167px] left-[697px] 
  text-center
  max-sm:top-[2545px] max-sm:left-[40px]"
        >
          <div className="h-[280px] relative bg-[#F6F7FB] hover:bg-[#EBF4F3]">
            <Image
              src={sg6}
              alt="sg6"
              className="h-[158px] w-[154px] absolute left-[61px] top-[74px]"
            />
          </div>
          <p
            className="font-Jose font-bold text-[18px] absolute top-[298px] 
    left-[27px] text-[#151875]
    max-sm:text-[14px] max-sm:left-[46px]"
          >
            Vestibulum magna laoreet
          </p>
          <p className="absolute top-[324px] text-[10px] left-[114px] space-x-2">
            <i className="fa-solid fa-circle text-[#DE9034]"></i>
            <i className="fa-solid fa-circle text-[#EC42A2]"></i>
            <i className="fa-solid fa-circle text-[#8568FF]"></i>
          </p>
          <p
            className="text-[12px] text-[#151875] font-Jose absolute 
          top-[349px] left-[87px]"
          >
            $26.00
          </p>
          <p
            className="text-[12px] line-through text-[#FB2E86] font-Jose absolute 
          top-[349px] left-[140px]"
          >
            $42.00
          </p>
        </div>

        {/* sg7 */}
        <div
          className="w-[270px] h-[363px] cursor-pointer absolute top-[1167px] left-[1020px] 
  text-center
  max-sm:top-[2958px] max-sm:left-[40px]"
        >
          <div className="h-[280px] relative bg-[#F6F7FB] hover:bg-[#EBF4F3]">
            <Image
              src={sg7}
              alt="sg7"
              className="h-[144px] w-[114px] absolute left-[73px] top-[68px]"
            />
          </div>
          <p
            className="font-Jose font-bold text-[18px] absolute top-[298px] 
    left-[47px] text-[#151875]
    max-sm:text-[14px] max-sm:left-[60px]"
          >
            Sollicitudin amet orci
          </p>
          <p className="absolute top-[324px] text-[10px] left-[114px] space-x-2">
            <i className="fa-solid fa-circle text-[#DE9034]"></i>
            <i className="fa-solid fa-circle text-[#EC42A2]"></i>
            <i className="fa-solid fa-circle text-[#8568FF]"></i>
          </p>
          <p
            className="text-[12px] text-[#151875] font-Jose absolute 
          top-[349px] left-[87px]"
          >
            $26.00
          </p>
          <p
            className="text-[12px] line-through text-[#FB2E86] font-Jose absolute 
          top-[349px] left-[140px]"
          >
            $42.00
          </p>
        </div>

        {/* sg8 */}
        <div
          className="w-[270px] h-[363px] cursor-pointer absolute top-[1167px] left-[1343px] 
  text-center
  max-sm:top-[3371px] max-sm:left-[40px]"
        >
          <div className="h-[280px] relative bg-[#F6F7FB] hover:bg-[#EBF4F3]">
            <Image
              src={sg8}
              alt="sg8"
              className="h-[167px] w-[167px] absolute left-[47px] top-[71px]"
            />
          </div>
          <p
            className="font-Jose font-bold text-[18px] absolute top-[298px] 
    left-[60px] text-[#151875]
    max-sm:text-[14px] max-sm:left-[73px]"
          >
            Ultrices mauris sit
          </p>
          <p className="absolute top-[324px] text-[10px] left-[114px] space-x-2">
            <i className="fa-solid fa-circle text-[#DE9034]"></i>
            <i className="fa-solid fa-circle text-[#EC42A2]"></i>
            <i className="fa-solid fa-circle text-[#8568FF]"></i>
          </p>
          <p
            className="text-[12px] text-[#151875] font-Jose absolute 
          top-[349px] left-[87px]"
          >
            $26.00
          </p>
          <p
            className="text-[12px] line-through text-[#FB2E86] font-Jose absolute 
          top-[349px] left-[140px]"
          >
            $42.00
          </p>
        </div>

        {/* sg9 */}
        <div
          className="w-[270px] h-[363px] cursor-pointer absolute top-[1611px] left-[374px] 
  text-center
  max-sm:top-[3784px] max-sm:left-[40px]"
        >
          <div className="h-[280px] relative bg-[#F6F7FB] hover:bg-[#EBF4F3]">
            <Image
              src={sg9}
              alt="sg9"
              className="h-[151px] w-[170px] absolute left-[50px] top-[74px]"
            />
          </div>
          <p
            className="font-Jose font-bold text-[18px] absolute top-[298px] 
    left-[8px] text-[#151875]
    max-sm:text-[14px] max-sm:left-[36px]"
          >
            Pellentesque condimentum ac
          </p>
          <p className="absolute top-[324px] text-[10px] left-[114px] space-x-2">
            <i className="fa-solid fa-circle text-[#DE9034]"></i>
            <i className="fa-solid fa-circle text-[#EC42A2]"></i>
            <i className="fa-solid fa-circle text-[#8568FF]"></i>
          </p>
          <p
            className="text-[12px] text-[#151875] font-Jose absolute 
          top-[349px] left-[87px]"
          >
            $26.00
          </p>
          <p
            className="text-[12px] line-through text-[#FB2E86] font-Jose absolute 
          top-[349px] left-[140px]"
          >
            $42.00
          </p>
        </div>

        {/* sg10 */}
        <div
          className="w-[270px] h-[363px] cursor-pointer absolute top-[1611px] left-[697px] 
  text-center
  max-sm:top-[4197px] max-sm:left-[40px]"
        >
          <div className="h-[280px] relative bg-[#F6F7FB] hover:bg-[#EBF4F3]">
            <Image
              src={sg10}
              alt="sg10"
              className="h-[158px] w-[169px] absolute left-[55px] top-[67px]"
            />
          </div>
          <p
            className="font-Jose font-bold text-[18px] absolute top-[298px] 
    left-[52px] text-[#151875]
    max-sm:text-[14px] max-sm:left-[62px]"
          >
            Cras scelerisque velit
          </p>
          <p className="absolute top-[324px] text-[10px] left-[114px] space-x-2">
            <i className="fa-solid fa-circle text-[#DE9034]"></i>
            <i className="fa-solid fa-circle text-[#EC42A2]"></i>
            <i className="fa-solid fa-circle text-[#8568FF]"></i>
          </p>
          <p
            className="text-[12px] text-[#151875] font-Jose absolute 
          top-[349px] left-[87px]"
          >
            $26.00
          </p>
          <p
            className="text-[12px] line-through text-[#FB2E86] font-Jose absolute 
          top-[349px] left-[140px]"
          >
            $42.00
          </p>
        </div>

        {/* sg11 */}
        <div
          className="w-[270px] h-[363px] cursor-pointer absolute top-[1611px] left-[1020px] 
  text-center
  max-sm:top-[4610px] max-sm:left-[40px]"
        >
          <div className="h-[280px] relative bg-[#F6F7FB] hover:bg-[#EBF4F3]">
            <Image
              src={sg11}
              alt="sg11"
              className="h-[176px] w-[176px] absolute left-[42px] top-[62px]"
            />
          </div>
          <p
            className="font-Jose font-bold text-[18px] absolute top-[298px] 
    left-[28px] text-[#151875]
    max-sm:text-[14px] max-sm:left-[48px]"
          >
            Lectus vulputate faucibus
          </p>
          <p className="absolute top-[324px] text-[10px] left-[114px] space-x-2">
            <i className="fa-solid fa-circle text-[#DE9034]"></i>
            <i className="fa-solid fa-circle text-[#EC42A2]"></i>
            <i className="fa-solid fa-circle text-[#8568FF]"></i>
          </p>
          <p
            className="text-[12px] text-[#151875] font-Jose absolute 
          top-[349px] left-[87px]"
          >
            $26.00
          </p>
          <p
            className="text-[12px] line-through text-[#FB2E86] font-Jose absolute 
          top-[349px] left-[140px]"
          >
            $42.00
          </p>
        </div>

        {/* sg12 */}
        <div
          className="w-[270px] h-[363px] cursor-pointer absolute top-[1611px] left-[1343px] 
  text-center
  max-sm:top-[5023px] max-sm:left-[40px]"
        >
          <div className="h-[280px] relative bg-[#F6F7FB] hover:bg-[#EBF4F3]">
            <Image
              src={sg4}
              alt="sg4"
              className="h-[188px] w-[188px] absolute left-[36px] top-[63px]"
            />
          </div>
          <p
            className="font-Jose font-bold text-[18px] absolute top-[298px] 
    left-[76px] text-[#151875]
    max-sm:text-[14px] max-sm:left-[86px]"
          >
            Purus risus, ut
          </p>
          <p className="absolute top-[324px] text-[10px] left-[114px] space-x-2">
            <i className="fa-solid fa-circle text-[#DE9034]"></i>
            <i className="fa-solid fa-circle text-[#EC42A2]"></i>
            <i className="fa-solid fa-circle text-[#8568FF]"></i>
          </p>
          <p
            className="text-[12px] text-[#151875] font-Jose absolute 
          top-[349px] left-[87px]"
          >
            $26.00
          </p>
          <p
            className="text-[12px] line-through text-[#FB2E86] font-Jose absolute 
          top-[349px] left-[140px]"
          >
            $42.00
          </p>
        </div>
        <Image
          src={logo}
          alt="logo"
          className="absolute top-[2057px] left-[508px] w-[904px] h-[93px]
        max-sm:top-[5450px] max-sm:left-[0px] max-sm:w-[360px]
          max-sm:h-[43px]"
        />
        <footer
          className="absolute top-[2233px]
      max-sm:top-[5550px]"
        >
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default shopGrid;
