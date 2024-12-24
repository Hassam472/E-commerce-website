import Image from "next/image";
import lamp from "@/images/lamp.png";
import sofa from "@/images/sofa.png";
import chair1 from "@/images/chair1.png";
import chair2 from "@/images/chair2.png";
import chair3 from "@/images/chair3.png";
import chair4 from "@/images/chair4.png";
import chair5 from "@/images/chair5.png";
import lp1 from "@/images/lp1.png";
import lp2 from "@/images/lp2.png";
import lp3 from "@/images/lp3.png";
import lp4 from "@/images/lp4.png";
import lp5 from "@/images/lp5.png";
import lp6 from "@/images/lp6.png";
import lp7 from "@/images/lp7.png";
import lp8 from "@/images/lp8.png";
import draz from "@/images/draz.png";
import mini1 from "@/images/mini1.png";
import mini2 from "@/images/mini2.png";
import mini3 from "@/images/mini3.png";
import clock from "@/images/clock.png";
import sofa1 from "@/images/sofa1.png";
import sofa2 from "@/images/sofa2.png";
import news from "@/images/news.jpeg";
import logo from "@/images/logo.png";
import lb1 from "@/images/lb1.jpeg";
import lb2 from "@/images/lb2.jpeg";
import lb3 from "@/images/lb3.jpeg";
import React from "react";
import Footer from "@/components/Footer";


function page() {
  return (
    <>
    <main>
      <div className="relative max-w-[1920px] h-[764px] bg-[#F2F0FF]">
        <Image src={lamp} alt="lamp" className="h-[387px] w-[387px]" />

        <div className="w-[640px] h-[248px] space-y-2 absolute top-[170px] left-[300px]">
          <h1 className="font-lato font-bold text-[16px] text-[#FB2E86]">
            Best Furniture For Your Castle....
          </h1>

          <h1 className="font-Jose text-[53px] font-bold text-[#000000]">
            New Furniture Collection Trends in 2024
          </h1>

          <p className="font-lato font-bold text-[16px] text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
        </div>

        <Image
          src={sofa}
          alt="sofa"
          className="h-[629px] w-[629px] absolute top-[90px] z-10 left-[1051px]"
        />

        <div
          className="h-[689px] absolute top-[50px] left-[1096px] 
      rounded-full w-[706px] bg-[#ECD2FA59]"
        ></div>
        <div
          className="h-[689px] absolute top-[20px] left-[1041px] 
      rounded-full w-[706px] bg-[#ECD2FA59]"
        ></div>
        <div
          className="h-[138px] absolute top-[60px] left-[1598px] rounded-full 
      w-[136px] bg-[#00C1FE] text-center content-center text-[35px] 
      text-[#FFFFFF] font-Jose"
        >
          50% off
        </div>

        <button
          className="font-Jose absolute top-[440px] left-[300px] 
      text-[17px] bg-[#FB2E86] text-[#FFFFFF] h-[50px] w-[163px] rounded-[2px]"
        >
          Shop Now
        </button>
      </div>

      <h1
        className="font-Jose text-[42px] text-[#1A0B5B] mt-20 
   ml-[777px] font-bold"
      >
        Featured Products
      </h1>

      <div className="flex relative max-w-[1920px]">
        {/* chair1 */}
        <div
          className="w-[270px] h-[361px] absolute left-[376px] 
  text-center shadow-md cursor-pointer hover:bg-[#2F1AC4] hover:text-[#FFFFFF]"
        >
          <div className="h-[236px] relative bg-[#F6F7FB]">
            <Image
              src={chair1}
              alt="chair1"
              className="h-[178px] w-[178px] absolute left-[40px] top-[46px]"
            />
          </div>
          <p
            className="font-lato font-bold absolute top-[251px] 
    left-[71px] text-[18px] text-[#FB2E86]"
          >
            Cantilever chair
          </p>
          <p className="absolute top-[285px] text-xl left-[110px]">
            <i className="fa-solid fa-minus text-[#05E6B7]"></i>
            <i className="fa-solid fa-minus text-[#F701A8]"></i>
            <i className="fa-solid fa-minus text-[#00009D]"></i>
          </p>
          <p className="font-Jose absolute top-[310px] left-[77px]">
            Code - Y523201
          </p>
          <p className="text-[14px] font-lato absolute top-[335px] left-[115px]">
            $42.00
          </p>
        </div>

        {/* chair2 */}
        <div
          className="w-[270px] h-[361px] cursor-pointer absolute left-[675px] 
  text-center shadow-md hover:bg-[#2F1AC4] hover:text-[#FFFFFF]"
        >
          <div className="h-[236px] relative bg-[#F6F7FB]">
            <Image
              src={chair2}
              alt="chair2"
              className="h-[150px] w-[130px] absolute left-[79px] top-[48px]"
            />
          </div>
          <p
            className="font-lato font-bold text-[18px] absolute top-[251px] 
    left-[71px] text-[#FB2E86]"
          >
            Cantilever chair
          </p>
          <p className="absolute top-[285px] text-xl left-[110px]">
            <i className="fa-solid fa-minus text-[#05E6B7]"></i>
            <i className="fa-solid fa-minus text-[#F701A8]"></i>
            <i className="fa-solid fa-minus text-[#00009D]"></i>
          </p>
          <p className="font-Jose absolute top-[310px] left-[77px]">
            Code - Y523201
          </p>
          <p className="text-[14px] font-lato absolute top-[335px] left-[115px]">
            $42.00
          </p>
        </div>

        {/* chair3 */}
        <div
          className="w-[270px] h-[361px] cursor-pointer absolute left-[975px] 
  text-center shadow-md hover:bg-[#2F1AC4] hover:text-[#FFFFFF]"
        >
          <div className="h-[236px] relative bg-[#F6F7FB]">
            <Image
              src={chair3}
              alt="chair3"
              className="h-[175px] w-[175px] absolute left-[41px] top-[41px]"
            />
          </div>
          <p
            className="font-lato font-bold text-[18px] absolute top-[251px] 
    left-[71px] text-[#FB2E86]"
          >
            Cantilever chair
          </p>
          <p className="absolute top-[285px] text-xl left-[110px]">
            <i className="fa-solid fa-minus text-[#05E6B7]"></i>
            <i className="fa-solid fa-minus text-[#F701A8]"></i>
            <i className="fa-solid fa-minus text-[#00009D]"></i>
          </p>
          <p className="font-Jose absolute top-[310px] left-[77px]">
            Code - Y523201
          </p>
          <p className="text-[14px] font-lato absolute top-[335px] left-[115px]">
            $42.00
          </p>
        </div>
        {/* chair4 */}
        <div
          className="w-[270px] h-[361px] cursor-pointer absolute left-[1274px] 
  text-center shadow-md hover:bg-[#2F1AC4] hover:text-[#FFFFFF]"
        >
          <div className="h-[236px] relative bg-[#F6F7FB]">
            <Image
              src={chair4}
              alt="chair4"
              className="h-[151px] w-[216px] absolute left-[26px] top-[53px]"
            />
          </div>
          <p
            className="font-lato font-bold text-[18px] absolute top-[251px] 
    left-[71px] text-[#FB2E86]"
          >
            Cantilever chair
          </p>
          <p className="absolute top-[285px] text-xl left-[110px]">
            <i className="fa-solid fa-minus text-[#05E6B7]"></i>
            <i className="fa-solid fa-minus text-[#F701A8]"></i>
            <i className="fa-solid fa-minus text-[#00009D]"></i>
          </p>
          <p className="font-Jose absolute top-[310px] left-[77px]">
            Code - Y523201
          </p>
          <p className="text-[14px] font-lato absolute top-[335px] left-[115px]">
            $42.00
          </p>
        </div>
      </div>
      {/* Featured product end */}

      <p className="absolute top-[1519px] left-[915px] space-x-1">
        <i className="fa-solid fa-minus text-[#FB2E86] text-[20px]"></i>
        <i className="fa-solid fa-minus text-[#FEBAD7] text-[16px]"></i>
        <i className="fa-solid fa-minus text-[#FEBAD7] text-[16px]"></i>
        <i className="fa-solid fa-minus text-[#FEBAD7] text-[16px]"></i>
      </p>

      <h1 className="font-Jose text-[42px] text-[#1A0B5B] font-bold absolute top-[1594px] left-[791px]">
        Latest Products
      </h1>

      <p
        className="absolute top-[1655px] left-[697px] text-[#FB2E86] 
      underline text-[18px] font-lato cursor-pointer"
      >
        New Arrival
      </p>
      <p
        className="absolute top-[1655px] left-[848px] text-[#151875] 
      text-[18px] font-lato cursor-pointer"
      >
        Best Seller
      </p>
      <p
        className="absolute top-[1655px] left-[992px] text-[#151875] 
      text-[18px] font-lato cursor-pointer"
      >
        Featured
      </p>
      <p
        className="absolute top-[1655px] left-[1122px] text-[#151875] 
      text-[18px] font-lato cursor-pointer"
      >
        Special Offer
      </p>

      <div className="w-[365px] h-[306px] font-Jose absolute top-[1739px] left-[378px]">
        <div className="bg-[#F7F7F7] relative h-[270px] w-[360px]">
          <Image
            src={lp1}
            alt="lp1"
            className="w-[223px] h-[229px] absolute top-[33px] left-[73px]"
          />
        </div>

        <p className="absolute top-[285.55px] text-[#151875] text-[16px]">
          Comfort Handy Craft
        </p>
        <p className="absolute top-[285.55px] left-[255.89px] text-[#151875] text-[14px]">
          $42.00
        </p>
        <p className="absolute top-[288.48px] line-through text-[#FB2448] left-[307.46px] text-[12px]">
          $65.00
        </p>
      </div>

      <div className="w-[365px] h-[306px] font-Jose absolute top-[1739px] left-[775px]">
        <div className="bg-[#F7F7F7] relative h-[270px] w-[360px]">
          <Image
            src={lp2}
            alt="lp2"
            className="w-[245px] h-[245px] absolute top-[33px] left-[73px]"
          />
        </div>

        <p className="absolute top-[285.55px] text-[#151875] text-[16px]">
          Comfort Handy Craft
        </p>
        <p className="absolute top-[285.55px] left-[255.89px] text-[#151875] text-[14px]">
          $42.00
        </p>
        <p className="absolute top-[288.48px] line-through text-[#FB2448] left-[307.46px] text-[12px]">
          $65.00
        </p>
      </div>

      <div className="w-[365px] h-[306px] font-Jose absolute top-[1739px] left-[1182px]">
        <div className="bg-[#F7F7F7] relative h-[270px] w-[360px]">
          <Image
            src={chair1}
            alt="chair1"
            className="w-[221px] h-[222px] absolute top-[33px] left-[73px]"
          />
        </div>

        <p className="absolute top-[285.55px] text-[#151875] text-[16px]">
          Comfort Handy Craft
        </p>
        <p className="absolute top-[285.55px] left-[255.89px] text-[#151875] text-[14px]">
          $42.00
        </p>
        <p className="absolute top-[288.48px] line-through text-[#FB2448] left-[307.46px] text-[12px]">
          $65.00
        </p>
      </div>

      <div className="w-[365px] h-[306px] font-Jose absolute top-[2165px] left-[378px]">
        <div className="bg-[#F7F7F7] relative h-[270px] w-[360px]">
          <Image
            src={lp3}
            alt="lp3"
            className="w-[267px] h-[277px] absolute top-[10px] left-[54px]"
          />
        </div>

        <p className="absolute top-[285.55px] text-[#151875] text-[16px]">
          Comfort Handy Craft
        </p>
        <p className="absolute top-[285.55px] left-[255.89px] text-[#151875] text-[14px]">
          $42.00
        </p>
        <p className="absolute top-[288.48px] line-through text-[#FB2448] left-[307.46px] text-[12px]">
          $65.00
        </p>
      </div>

      <div className="w-[365px] h-[306px] font-Jose absolute top-[2165px] left-[775px]">
        <div className="bg-[#F7F7F7] relative h-[270px] w-[360px]">
          <Image
            src={lp4}
            alt="lp4"
            className="w-[303px] h-[264px] absolute top-[13px] left-[36px]"
          />
        </div>

        <p className="absolute top-[285.55px] text-[#151875] text-[16px]">
          Comfort Handy Craft
        </p>
        <p className="absolute top-[285.55px] left-[255.89px] text-[#151875] text-[14px]">
          $42.00
        </p>
        <p className="absolute top-[288.48px] line-through text-[#FB2448] left-[307.46px] text-[12px]">
          $65.00
        </p>
      </div>

      <div className="w-[365px] h-[306px] font-Jose absolute top-[2165px] left-[1172px]">
        <div className="bg-[#F7F7F7] relative h-[270px] w-[360px]">
          <Image
            src={lp5}
            alt="lp5"
            className="w-[360px] h-[261px] absolute top-[16px] left-[5px]"
          />
        </div>

        <p className="absolute top-[285.55px] text-[#151875] text-[16px]">
          Comfort Handy Craft
        </p>
        <p className="absolute top-[285.55px] left-[255.89px] text-[#151875] text-[14px]">
          $42.00
        </p>
        <p className="absolute top-[288.48px] line-through text-[#FB2448] left-[307.46px] text-[12px]">
          $65.00
        </p>
      </div>
      {/* latest products end */}

      <h1 className="font-Jose text-[42px] text-[#1A0B5B] font-bold absolute top-[2529px] left-[761px]">
        What Shopex Offer!
      </h1>

      <div className="absolute w-[270px] h-[320px] top-[2631px] left-[375px] shadow bg-[#FFFFFF]">
        <p className="font-Jose text-[22px] text-[#151875] absolute top-[148px] left-[69px]">
          Free Delivery
        </p>
        <p className="font-lato text-[16px] text-[#1A0B5B4D] absolute top-[190px] font-bold text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida.
        </p>
      </div>

      <div className="absolute w-[270px] h-[320px] top-[2631px] left-[673px] shadow bg-[#FFFFFF]">
        <p className="font-Jose text-[22px] text-[#151875] absolute top-[148px] left-[80px]">
          Cashback
        </p>
        <p className="font-lato text-[16px] text-[#1A0B5B4D] absolute top-[190px] font-bold text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida.
        </p>
      </div>

      <div className="absolute w-[270px] h-[320px] top-[2631px] left-[971px] shadow bg-[#FFFFFF]">
        <p className="font-Jose text-[22px] text-[#151875] absolute top-[148px] left-[85px]">
          Rewards
        </p>
        <p className="font-lato text-[16px] text-[#1A0B5B4D] absolute top-[190px] font-bold text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida.
        </p>
      </div>

      <div className="absolute w-[270px] h-[320px] top-[2631px] left-[1269px] shadow bg-[#FFFFFF]">
        <p className="font-Jose text-[22px] text-[#151875] absolute top-[148px] left-[69px]">
          24/7 Support
        </p>
        <p className="font-lato text-[16px] text-[#1A0B5B4D] absolute top-[190px] font-bold text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida.
        </p>
      </div>
      {/* shopex end */}

      <div className="w-[1920px] h-[579px] bg-[#F1F0FF] absolute top-[3081px] left-[-1px]">
        <div className="w-[1050px] h-[550px] relative left-[434px] top-[15px]">
          <div className="absolute w-[481px] h-[449.62px] bg-[#F5E1FC] top-[21.38px] left-[-9px] rounded-full">
            <Image
              src={sofa1}
              alt="sofa1"
              className="w-[509px] h-[550px] absolute left-[40px]"
            />
          </div>
          <h1 className="absolute top-[82px] left-[543px] text-[#151875] text-[35px] font-Jose font-bold">
            Unique Features Of latest & Trending Poducts
          </h1>

          <p className="absolute top-[203px] left-[566px] font-lato text-[#ACABC3] font-medium">
            All frames constructed with hardwood solids and laminates
          </p>
          <p className="absolute top-[237px] left-[566px] font-lato text-[#ACABC3] font-medium">
            Reinforced with double wood dowels, glue, screw - nails corner
            blocks and machine nails
          </p>
          <p className="absolute top-[306px] left-[566px] font-lato text-[#ACABC3] font-medium">
            Arms, backs and seats are structurally reinforced
          </p>
          <i className="fa-solid fa-circle absolute text-[11px] text-[#F52B70] top-[209px] left-[543px]"></i>
          <i className="fa-solid fa-circle absolute text-[11px] text-[#2B2BF5] top-[246px] left-[543px]"></i>
          <i className="fa-solid fa-circle absolute text-[11px] text-[#2BF5CC] top-[312px] left-[543px]"></i>
          <button
            className="bg-[#FB2E86] absolute left-[543px] top-[365px] text-[17px] 
          text-[#FFFFFF] font-Jose w-[157px] h-[45px] rounded-sm"
          >
            Add To Cart
          </button>
          <p className="font-Jose text-[#151875] text-[14px] absolute top-[371px] left-[719px] font-bold">
            B&B Italian Sofa
          </p>
          <p className="font-lato text-[#151875] text-[14px] absolute top-[388px] left-[719px]">
            $32.00
          </p>
        </div>
      </div>
      {/* unique features end */}

      <h1 className="font-Jose text-[42px] text-[#1A0B5B] font-bold absolute top-[3792px] left-[778px]">
        Trending Products
      </h1>

      <div className="w-[270px] h-[350px] shadow absolute top-[3873px] left-[377px]">
        <div className="bg-[#F5F6F8] relative top-[11px] left-[11px] border-2 border-green-400 h-[244px] w-[247px]">
          <Image
            src={lp6}
            alt="lp6"
            className="w-[171px] h-[171px] absolute top-[41px] left-[41px]"
          />
        </div>

        <p className="absolute top-[270px] left-[79px] text-[#151875] font-bold font-lato text-[16px]">
          Cantilever chair
        </p>
        <p className="absolute font-Jose top-[304px] text-[#151875] left-[91px] text-[14px]">
          $26.00
        </p>
        <p className="absolute font-Jose top-[305px] line-through text-[#1518754D] left-[146px] text-[12px]">
          $42.00
        </p>
      </div>

      <div className="w-[270px] h-[350px] shadow absolute top-[3873px] left-[673px]">
        <div className="bg-[#F5F6F8] relative top-[11px] left-[11px] border-2 border-green-400 h-[244px] w-[247px]">
          <Image
            src={lp7}
            alt="lp7"
            className="w-[187px] h-[187px] absolute top-[28px] left-[30px]"
          />
        </div>

        <p className="absolute top-[270px] left-[79px] text-[#151875] font-bold font-lato text-[16px]">
          Cantilever chair
        </p>
        <p className="absolute font-Jose top-[304px] text-[#151875] left-[91px] text-[14px]">
          $26.00
        </p>
        <p className="absolute font-Jose top-[305px] line-through text-[#1518754D] left-[146px] text-[12px]">
          $42.00
        </p>
      </div>

      <div className="w-[270px] h-[350px] shadow absolute top-[3873px] left-[975px]">
        <div className="bg-[#F5F6F8] relative top-[11px] left-[11px] border-2 border-green-400 h-[244px] w-[247px]">
          <Image
            src={lp8}
            alt="lp8"
            className="w-[197px] h-[189px] absolute top-[27px] left-[25px]"
          />
        </div>

        <p className="absolute top-[270px] left-[79px] text-[#151875] font-bold font-lato text-[16px]">
          Cantilever chair
        </p>
        <p className="absolute font-Jose top-[304px] text-[#151875] left-[91px] text-[14px]">
          $26.00
        </p>
        <p className="absolute font-Jose top-[305px] line-through text-[#1518754D] left-[146px] text-[12px]">
          $42.00
        </p>
      </div>

      <div className="w-[270px] h-[350px] shadow absolute top-[3873px] left-[1274px]">
        <div className="bg-[#F5F6F8] relative top-[11px] left-[11px] border-2 border-green-400 h-[244px] w-[247px]">
          <Image
            src={lp4}
            alt="lp4"
            className="w-[253px] h-[211px] absolute top-[15px]"
          />
        </div>

        <p className="absolute top-[270px] left-[79px] text-[#151875] font-bold font-lato text-[16px]">
          Cantilever chair
        </p>
        <p className="absolute font-Jose top-[304px] text-[#151875] left-[91px] text-[14px]">
          $26.00
        </p>
        <p className="absolute font-Jose top-[305px] line-through text-[#1518754D] left-[146px] text-[12px]">
          $42.00
        </p>
      </div>

      <div className="absolute bg-[#FFF6FB] shadow top-[4262px] left-[375px] w-[420px] h-[270px]"></div>
      <p className="absolute top-[4296px] left-[400px] font-Jose text-[26px] text-[#151875] font-semibold">
        23% off in all products
      </p>
      <p className="cursor-pointer absolute top-[4333px] underline left-[400px] font-lato text-[16px] text-[#FB2E86] font-semibold">
        Shop Now
      </p>

      <Image
        src={clock}
        alt="clock"
        className="absolute w-[213px] h-[207px] top-[4323px] left-[576px]"
      />

      <div className="absolute bg-[#EEEFFB] shadow top-[4262px] left-[824px] w-[420px] h-[270px]"></div>
      <p className="absolute top-[4296px] left-[849px] font-Jose text-[26px] text-[#151875] font-semibold">
        23% off in all products
      </p>
      <p className="cursor-pointer absolute top-[4333px] underline left-[849px] font-lato text-[16px] text-[#FB2E86] font-semibold">
        View Collection
      </p>

      <Image
        src={draz}
        alt="draz"
        className="absolute w-[312px] h-[173px] top-[4357px] left-[926px]"
      />

      <div className="absolute w-[267px] h-[74px] top-[4267px] left-[1268px]">
        <div className="w-[107px] h-[74px] bg-[#F5F6F8] relative">
          <Image
            src={mini1}
            alt="mini1"
            className="w-[64px] h-[71px] absolute top-[2px] left-[21px]"
          />
        </div>
        <p className="absolute top-[21px] left-[116px] font-Jose text-[16px] text-[#151875]">
          Executive Seat chair
        </p>
        <p className="absolute top-[42px] left-[116px] font-Jose text-[12px] line-through text-[#151875]">
          $32.00
        </p>
      </div>

      <div className="absolute w-[267px] h-[74px] top-[4361px] left-[1268px]">
        <div className="w-[107px] h-[74px] bg-[#F5F6F8] relative">
          <Image
            src={mini2}
            alt="mini2"
            className="w-[67px] h-[67px] absolute top-[3px] left-[19px]"
          />
        </div>
        <p className="absolute top-[21px] left-[116px] font-Jose text-[16px] text-[#151875]">
          Executive Seat chair
        </p>
        <p className="absolute top-[42px] left-[116px] font-Jose text-[12px] line-through text-[#151875]">
          $32.00
        </p>
      </div>

      <div className="absolute w-[267px] h-[74px] top-[4455px] left-[1268px]">
        <div className="w-[107px] h-[74px] bg-[#F5F6F8] relative">
          <Image
            src={mini3}
            alt="mini3"
            className="w-[67px] h-[67px] absolute top-[3px] left-[17px]"
          />
        </div>
        <p className="absolute top-[21px] left-[116px] font-Jose text-[16px] text-[#151875]">
          Executive Seat chair
        </p>
        <p className="absolute top-[42px] left-[116px] font-Jose text-[12px] line-through text-[#151875]">
          $32.00
        </p>
      </div>
      {/* trending products end */}

      <h1 className="font-Jose text-[42px] text-[#1A0B5B] font-bold absolute top-[4658px] left-[822px]">
        Discount Item
      </h1>

      <p
        className="absolute top-[4733px] left-[780px] text-[#FB2E86] 
      underline text-[18px] font-lato cursor-pointer"
      >
        Wood Chair
      </p>
      <p
        className="absolute top-[4733px] left-[905px] text-[#151875] 
      text-[18px] font-lato cursor-pointer"
      >
        Plastic Chair
      </p>
      <p
        className="absolute top-[4733px] left-[1029px] text-[#151875] 
      text-[18px] font-lato cursor-pointer"
      >
        Sofa Colletion
      </p>

      <div className="absolute w-[1214px] h-[597px] top-[4726px] left-[389px]">
        <h1 className="absolute top-[140px] left-[1px] text-[#151875] text-[35px] font-Jose font-bold">
          20% Discount Of All Products
        </h1>
        <p className="absolute top-[202px] left-[1px] text-[#FB2E86] text-[21px] font-Jose">
          Eams Sofa Compact
        </p>
        <p
          className="absolute top-[250px] left-[1px] text-[#B7BACB] text-[17px] 
          font-lato w-[523px] leading-[30px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
        </p>
        <i className="fa-solid fa-check absolute top-[331px] left-[1px] text-[#7569B2]"></i>
        <p className="absolute font-lato text-[#B8B8DC] text-[16px] top-[327px] left-[23px]">
          Material expose like metals
        </p>
        <i className="fa-solid fa-check absolute top-[370px] left-[1px] text-[#7569B2]"></i>
        <p className="absolute font-lato text-[#B8B8DC] text-[16px] top-[367px] left-[23px]">
          Simple neutral colours
        </p>
        <i className="fa-solid fa-check absolute top-[331px] left-[275px] text-[#7569B2]"></i>
        <p className="absolute font-lato text-[#B8B8DC] text-[16px] top-[327px] left-[295px]">
          Clear lines and geomatric figures
        </p>
        <i className="fa-solid fa-check absolute top-[370px] left-[275px] text-[#7569B2]"></i>
        <p className="absolute font-lato text-[#B8B8DC] text-[16px] top-[367px] left-[295px]">
          Material expose like metals
        </p>
        <button
          className="absolute top-[434px] left-[1px] w-[200px] h-[57px] bg-[#FB2E86] 
        text-[17px] font-Jose text-[#FFFFFF] rounded-[2px]"
        >
          Shop Now
        </button>

        <div className="absolute left-[615px] top-[100px] w-[481px] h-[450px] rounded-full bg-[#FFF6FB]"></div>
        <Image
          src={sofa2}
          alt="sofa2"
          className="w-[699px] h-[597px] absolute left-[515px]"
        />
      </div>
      {/* discount item end */}

      <h1 className="font-Jose text-[42px] text-[#1A0B5B] font-bold absolute top-[5402px] left-[810px]">
        Top Catogaries
      </h1>
      {/* 1 */}
      <div className="absolute top-[5500px] left-[364px] w-[269px] h-[345px]">
        <div className="h-[275px] w-[275px] relative rounded-full bg-[#9877E7]">
          <div className="h-[269px] w-[269px] absolute right-0 top-[-3px] rounded-full bg-[#F6F7FB]">
            <Image
              src={chair5}
              alt="chair5"
              className="absolute top-[46px] left-[41px] w-[178px] h-[178px]"
            />
            <button
              className="text-[#FFFFFF] bg-[#08D15F] font-Jose text-[12px]
             w-[94px] h-[29px] absolute top-[219px] left-[88px] rounded-[2px]"
            >
              View Shop
            </button>
          </div>
          <p className="absolute top-[296px] left-[69px] font-Jose text-[20px] text-[#151875]">
            Mini LCW Chair
          </p>
          <p className="absolute top-[329px] left-[110px] font-Jose text-[16px] text-[#151875]">
            $56.00
          </p>
        </div>
      </div>

      {/* 2 */}

      <div className="absolute top-[5500px] left-[672px] w-[269px] h-[345px]">
        <div className="h-[275px] w-[275px] relative rounded-full">
          <div className="h-[269px] w-[269px] absolute right-0 top-[-3px] rounded-full bg-[#F6F7FB]">
            <Image
              src={lp3}
              alt="lp3"
              className="absolute top-[60px] left-[51px] w-[158px] h-[157px]"
            />
          </div>
          <p className="absolute top-[296px] left-[69px] font-Jose text-[20px] text-[#151875]">
            Mini LCW Chair
          </p>
          <p className="absolute top-[329px] left-[110px] font-Jose text-[16px] text-[#151875]">
            $56.00
          </p>
        </div>
      </div>
      {/* 3 */}

      <div className="absolute top-[5500px] left-[980px] w-[269px] h-[345px]">
        <div className="h-[275px] w-[275px] relative rounded-full">
          <div className="h-[269px] w-[269px] absolute right-0 top-[-3px] rounded-full bg-[#F6F7FB]">
            <Image
              src={lp6}
              alt="lp6"
              className="absolute top-[71px] left-[60px] w-[149px] h-[149px]"
            />
          </div>
          <p className="absolute top-[296px] left-[69px] font-Jose text-[20px] text-[#151875]">
            Mini LCW Chair
          </p>
          <p className="absolute top-[329px] left-[110px] font-Jose text-[16px] text-[#151875]">
            $56.00
          </p>
        </div>
      </div>
      {/* 4 */}

      <div className="absolute top-[5500px] left-[1288px] w-[269px] h-[345px]">
        <div className="h-[275px] w-[275px] relative rounded-full">
          <div className="h-[269px] w-[269px] absolute right-0 top-[-3px] rounded-full bg-[#F6F7FB]">
            <Image
              src={chair5}
              alt="chair5"
              className="absolute top-[46px] left-[41px] w-[178px] h-[178px]"
            />
          </div>
          <p className="absolute top-[296px] left-[69px] font-Jose text-[20px] text-[#151875]">
            Mini LCW Chair
          </p>
          <p className="absolute top-[329px] left-[110px] font-Jose text-[16px] text-[#151875]">
            $56.00
          </p>
        </div>
      </div>

      <div className="absolute top-[5883px] space-x-4 left-[927px] w-[66px] h-[14px]">
        <i className="fa-solid fa-circle text-[11px] text-[#FB2E86]"></i>
        <i className="fa-regular fa-circle text-[11px] text-[#FB2E86]"></i>
        <i className="fa-regular fa-circle text-[11px] text-[#FB2E86]"></i>
      </div>
      {/* top Catogaries end */}

      <Image
        src={news}
        alt="news"
        className="absolute top-[6023px] max-w-[1920px] h-[462px]"
      />
      <h1 className="absolute top-[6197px] text-center left-[673px] text-[#151875] text-[35px] font-Jose font-bold">
        Get Leatest Update By Subscribe
        <br />
        0ur Newslater
      </h1>
      <button
        className="absolute top-[6333px] left-[873px] w-[173px] h-[49px] bg-[#FB2E86] 
        text-[17px] font-Jose text-[#FFFFFF] rounded-[2px]"
      >
        Shop Now
      </button>

      <Image
        src={logo}
        alt="logo"
        className="absolute top-[6581px] left-[508px] w-[904px] h-[93pxpx]"
      />

      {/* newslater end */}

      <h1 className="font-Jose text-[42px] text-[#1A0B5B] font-bold absolute top-[6770px] left-[833px]">
        Leatest Blog
      </h1>

      {/* lb1 */}
      <div
        className="absolute top-[6892px] left-[349px] w-[370px] h-[493px] 
      rounded-[5px] shadow-lg"
      >
        <Image
          src={lb1}
          alt="lb1"
          className="w-[370px] h-[255px] rounded-[5px] cursor-pointer"
        />
        <i className="fa-solid fa-pen-nib absolute top-[274px] left-[13px] text-[#FB2E86]"></i>
        <p
          className="absolute top-[274px] left-[33px] text-[#151875] 
        text-[14px] font-Jose"
        >
          SaberAli
        </p>

        <i
          className="fa-solid fa-calendar-days absolute top-[274px] left-[113px] 
          text-[#FFA454]"
        ></i>
        <p
          className="absolute top-[274px] left-[132px] text-[#151875] 
        text-[14px] font-Jose"
        >
          21 August,2024
        </p>

        <h2
          className="absolute top-[319px] left-[19px] text-[18px] 
          text-[#151875] font-Jose font-bold "
        >
          Top esssential Trends in 2024
        </h2>
        <p
          className="absolute w-[297px] top-[354px] left-[19px] font-lato text-[16px]
          text-[#72718F]"
        >
          More off this less hello samlande lied much over tightly circa horse
          taped mightly
        </p>
        <p
          className="absolute w-[297px] top-[428px] underline left-[19px] font-lato 
          text-[16px]
          text-[#151875]"
        >
          Read More
        </p>
      </div>

      {/* lb2 */}
      <div
        className="absolute top-[6892px] left-[775px] w-[370px] h-[493px] 
      rounded-[5px] shadow-lg"
      >
        <Image
          src={lb2}
          alt="lb2"
          className="w-[370px] h-[255px] rounded-[5px] cursor-pointer"
        />
        <i className="fa-solid fa-pen-nib absolute top-[274px] left-[13px] 
        text-[#FB2E86]"></i>
        <p
          className="absolute top-[274px] left-[33px] text-[#151875] 
        text-[14px] font-Jose"
        >
          Surfauxion
        </p>

        <i
          className="fa-solid fa-calendar-days absolute top-[274px] left-[113px] 
          text-[#FFA454]"
        ></i>
        <p
          className="absolute top-[274px] left-[132px] text-[#151875] 
        text-[14px] font-Jose"
        >
          21 August,2024
        </p>

        <h2
          className="absolute top-[319px] left-[19px] text-[18px] 
          text-[#FB2E86] font-Jose font-bold "
        >
          Top esssential Trends in 2024
        </h2>
        <p
          className="absolute w-[297px] top-[354px] left-[19px] font-lato text-[16px]
          text-[#72718F]"
        >
          More off this less hello samlande lied much over tightly circa horse
          taped mightly
        </p>
        <p
          className="absolute w-[297px] top-[428px] underline left-[19px] font-lato 
          text-[16px]
          text-[#FB2E86]"
        >
          Read More
        </p>
      </div>

      {/* lb3 */}
      <div
        className="absolute top-[6892px] left-[1201px] w-[370px] h-[493px] 
      rounded-[5px] shadow-lg"
      >
        <Image
          src={lb3}
          alt="lb3"
          className="w-[370px] h-[255px] rounded-[5px] cursor-pointer"
        />
        <i className="fa-solid fa-pen-nib absolute top-[274px] left-[13px] text-[#FB2E86]"></i>
        <p
          className="absolute top-[274px] left-[33px] text-[#151875] 
        text-[14px] font-Jose"
        >
          SaberAli
        </p>

        <i
          className="fa-solid fa-calendar-days absolute top-[274px] left-[113px] 
          text-[#FFA454]"
        ></i>
        <p
          className="absolute top-[274px] left-[132px] text-[#151875] 
        text-[14px] font-Jose"
        >
          21 August,2024
        </p>

        <h2
          className="absolute top-[319px] left-[19px] text-[18px] 
          text-[#151875] font-Jose font-bold "
        >
          Top esssential Trends in 2024
        </h2>
        <p
          className="absolute w-[297px] top-[354px] left-[19px] font-lato text-[16px]
          text-[#72718F]"
        >
          More off this less hello samlande lied much over tightly circa horse
          taped mightly
        </p>
        <p
          className="absolute w-[297px] top-[428px] underline left-[19px] font-lato 
          text-[16px]
          text-[#151875]"
        >
          Read More
        </p>
      </div>
      </main>

      <footer className="absolute top-[7600px]">
        <Footer/>
      </footer>

      
    </>
    
  );
}

export default page;
