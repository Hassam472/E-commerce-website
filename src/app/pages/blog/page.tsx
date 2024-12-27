import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import bl1 from "@/images/bl1.jpeg";
import bl2 from "@/images/bl2.jpeg";
import bl3 from "@/images/bl3.jpeg";
import rc1 from "@/images/rc1.jpeg";
import rc2 from "@/images/rc2.jpeg";
import rc3 from "@/images/rc3.jpeg";
import rc4 from "@/images/rc4.jpeg";
import sp1 from "@/images/sp1.jpeg";
import sp2 from "@/images/sp2.jpeg";
import sp3 from "@/images/sp3.jpeg";
import pr2 from "@/images/pr2.jpeg";
import op1 from "@/images/op1.jpeg";
import op2 from "@/images/op2.jpeg";
import op3 from "@/images/op3.jpeg";
import icon from "@/images/icon.jpg";

function page() {
  return (
    <>
      <div className="absolute top-[125px] w-[1920px] h-[286px] bg-[#F6F5FF]"></div>
      <h1
        className="absolute top-[221px] left-[374px] font-Jose
      text-[36px] text-[#101750] font-bold"
      >
        Blog Page
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
        . Blog Page
      </p>

      <div
        className="absolute top-[536px] left-[371px] 
      w-[870px] h-[2453px] space-y-[278px]"
      >
        <Image src={bl1} alt="bl1" className="w-[870px] h-[453px] rounded-md" />
        <Image src={bl2} alt="bl2" className="w-[870px] h-[453px] rounded-md" />
        <Image src={bl3} alt="bl3" className="w-[870px] h-[453px] rounded-md" />
      </div>

      <div
        className="absolute top-[1067px] left-[371px] font-Jose
      text-[30px] text-[#151875] font-bold
       space-y-[700px]"
      >
        <h2>Mauris at orci non vulputate diam tincidunt nec.</h2>
        <h2>Aenean vitae in aliquam ultrices lectus. Etiam.</h2>
        <h2>Sit nam congue feugiat nisl, mauris amet nisi.</h2>
      </div>

      <div
        className="absolute top-[1016px] left-[371px]
      text-[14px] w-[360px] space-y-[705px] text-center"
      >
        <div className="flex justify-between">
          <i className="fa-solid fa-pen-nib text-[#FB2E86] text-[11px]"></i>
          <p className=" text-[#151875] font-Jose w-[160px] h-[23px] bg-[#FFE7F9] rounded-sm">
            Surfauxion
          </p>
          <i className="fa-solid fa-calendar-days text-[#FFA454] "></i>
          <p
            className="text-[#151875] font-semibold font-lato w-[160px] h-[23px]
         bg-[#FFECE2] rounded-sm"
          >
            21 August,2024
          </p>
        </div>

        <div className="flex justify-between">
          <i className="fa-solid fa-pen-nib text-[#FB2E86] text-[11px]"></i>
          <p className=" text-[#151875] font-Jose w-[160px] h-[23px] bg-[#FFE7F9] rounded-sm">
            Surfauxion
          </p>
          <i className="fa-solid fa-calendar-days text-[#FFA454] "></i>
          <p
            className="text-[#151875] font-semibold font-lato w-[160px] h-[23px]
         bg-[#FFECE2] rounded-sm"
          >
            21 August,2024
          </p>
        </div>

        <div className="flex justify-between">
          <i className="fa-solid fa-pen-nib text-[#FB2E86] text-[11px]"></i>
          <p className=" text-[#151875] font-Jose w-[160px] h-[23px] bg-[#FFE7F9] rounded-sm">
            Surfauxion
          </p>
          <i className="fa-solid fa-calendar-days text-[#FFA454] "></i>
          <p
            className="text-[#151875] font-semibold font-lato w-[160px] h-[23px]
         bg-[#FFECE2] rounded-sm"
          >
            21 August,2024
          </p>
        </div>
      </div>

      <div
        className="absolute top-[1125px] left-[371px] font-lato
      text-[16px] text-[#8A8FB9] w-[852px]
       space-y-[700px]"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
          facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
          malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
          purus, cursus vulputate id id dictum at.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
          facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
          malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
          purus, cursus vulputate id id dictum at.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
          facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
          malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
          purus, cursus vulputate id id dictum at.
        </p>
      </div>

      <div
        className="absolute top-[1210px] left-[371px] font-lato
      text-[18px] text-[#151875] font-semibold
       space-y-[714px]"
      >
        <p>Read More</p>
        <p>Read More</p>
        <p>Read More</p>
      </div>

      <div
        className="absolute top-[2763px] left-[688px] font-lato
      text-[16px] font-semibold text-center w-[236px] h-[24px] flex justify-between"
      >
        <p className="w-[32px] h-[24px] bg-[#FB2CA8] rounded-sm text-[#FFFFFF]">
          1
        </p>
        <p
          className="w-[32px] h-[24px] border-[1px] border-[#E0D3F5] text-[#E0D3F5]
         rounded-sm"
        >
          2
        </p>
        <p
          className="w-[32px] h-[24px] border-[1px] border-[#E0D3F5] text-[#E0D3F5]
         rounded-sm"
        >
          3
        </p>
        <p
          className="w-[32px] h-[24px] border-[1px] border-[#E0D3F5] text-[#E0D3F5]
         rounded-sm"
        >
          4
        </p>
      </div>

      <div
        className="absolute top-[536px] left-[1299px] font-Jose
      text-[22px] text-[#151875] font-semibold w-[236px] h-[24px]"
      >
        <h3>Search</h3>
        <input
          type="text"
          placeholder="Search For Posts"
          className="w-[270px] h-[40px] font-normal rounded-sm border-[1px] border-[#BDBDD8]
        bg-[#FFFFFF] font-lato text-[14px] text-[#1518751A] pl-2 mt-2"
        />
        <h3 className="pt-[70px]">Categories</h3>
        <h3 className="pt-[176px]">Recent Post</h3>
        <h3 className="pt-[344px]">Sale Product</h3>
        <h3 className="pt-[281px]">Offer product</h3>
        <h3 className="pt-[356px]">Follow</h3>
        <h3 className="pt-[94px]">Tags</h3>
      </div>
      <i
        className="fa-solid fa-magnifying-glass text-[14px]
        text-[#CBCBE0] absolute top-[592px] left-[1527px]"
      ></i>

      <div
        className="absolute top-[740px] left-[1297px] font-Jose text-center
      text-[14px] text-[#3F509E] w-[254px] h-[114px] grid grid-cols-2 grid-rows-3 gap-2"
      >
        <p className="text-[#FFFFFF] w-[122px] h-[30px] rounded-[3px] bg-[#F939BF] content-center">
          Hobbies (14)
        </p>
        <p className="w-[122px] h-[30px] content-center">Women (21)</p>
        <p className="w-[122px] h-[30px] content-center">Men (26)</p>
        <p className="w-[122px] h-[30px] content-center">Kids (15)</p>
        <p className="w-[122px] h-[30px] content-center">Old Age (60)</p>
        <p className="w-[122px] h-[30px] content-center">Girls (21)</p>
      </div>

      <div className="absolute top-[960px] left-[1297px] w-[250px] h-[51px] flex justify-between">
        <Image
          src={rc1}
          alt="rc1"
          className="w-[70px] h-[51px] rounded-sm border-[1px] border-green-400"
        />
        <div>
          <p className="text-[14px] text-[#3F509E] font-Jose">
            It is a long established fact
          </p>
          <p className="text-[11px] font-semibold text-[#8A8FB9] font-lato">
            Aug 09 2024
          </p>
        </div>
      </div>

      <div className="absolute top-[1035px] left-[1297px] w-[250px] h-[51px] flex justify-between">
        <Image
          src={rc2}
          alt="rc2"
          className="w-[70px] h-[51px] rounded-sm border-[1px] border-green-400"
        />
        <div>
          <p className="text-[14px] text-[#3F509E] font-Jose">
            It is a long established fact
          </p>
          <p className="text-[11px] font-semibold text-[#8A8FB9] font-lato">
            Aug 09 2024
          </p>
        </div>
      </div>

      <div className="absolute top-[1110px] left-[1297px] w-[250px] h-[51px] flex justify-between">
        <Image
          src={rc3}
          alt="rc3"
          className="w-[70px] h-[51px] rounded-sm border-[1px] border-green-400"
        />
        <div>
          <p className="text-[14px] text-[#3F509E] font-Jose">
            It is a long established fact
          </p>
          <p className="text-[11px] font-semibold text-[#8A8FB9] font-lato">
            Aug 09 2024
          </p>
        </div>
      </div>

      <div className="absolute top-[1185px] left-[1297px] w-[250px] h-[51px] flex justify-between">
        <Image
          src={rc4}
          alt="rc4"
          className="w-[70px] h-[51px] rounded-sm border-[1px] border-green-400"
        />
        <div>
          <p className="text-[14px] text-[#3F509E] font-Jose">
            It is a long established fact
          </p>
          <p className="text-[11px] font-semibold text-[#8A8FB9] font-lato">
            Aug 09 2024
          </p>
        </div>
      </div>

      {/* next */}
      <div className="absolute top-[1340px] left-[1297px] w-[250px] h-[51px] flex justify-between">
        <Image
          src={sp1}
          alt="sp1"
          className="w-[70px] h-[51px] rounded-sm border-[1px] border-green-400"
        />
        <div>
          <p className="text-[14px] text-[#3F509E] font-Jose">
            Elit ornare in enim mauris.
          </p>
          <p className="text-[11px] font-semibold text-[#8A8FB9] font-lato">
            Aug 09 2024
          </p>
        </div>
      </div>

      <div className="absolute top-[1412px] left-[1297px] w-[250px] h-[51px] flex justify-between">
        <Image
          src={sp2}
          alt="sp2"
          className="w-[70px] h-[51px] rounded-sm border-[1px] border-green-400"
        />
        <div>
          <p className="text-[14px] text-[#3F509E] font-Jose">
            Viverra pulvinar et enim.
          </p>
          <p className="text-[11px] font-semibold text-[#8A8FB9] font-lato">
            Aug 09 2024
          </p>
        </div>
      </div>

      <div className="absolute top-[1484px] left-[1297px] w-[250px] h-[57px] flex justify-between">
        <Image
          src={sp3}
          alt="sp3"
          className="w-[70px] h-[57px] rounded-sm border-[1px] border-green-400"
        />
        <div>
          <p className="text-[14px] text-[#3F509E] font-Jose">
            Mattis varius donec fdsfd
          </p>
          <p className="text-[11px] font-semibold text-[#8A8FB9] font-lato">
            Aug 09 2024
          </p>
        </div>
      </div>

      {/* offer product */}
      <div
        className="absolute top-[1665px] left-[1297px] w-[126px] h-[126px] 
      text-center font-lato font-semibold flex flex-col justify-between"
      >
        <Image
          src={op1}
          alt="op1"
          className="w-[126px] h-[80px] rounded-sm 
        border-[1px] border-green-400"
        />

        <p className="text-[14px] text-[#151875]">Duis lectus est.</p>
        <p className="text-[12px] text-[#8A8FB9]">$12.00 - $15.00</p>
      </div>

      <div
        className="absolute top-[1665px] left-[1438px] w-[126px] h-[126px] 
      text-center font-lato font-semibold flex flex-col justify-between"
      >
        <Image
          src={pr2}
          alt="pr2"
          className="w-[126px] h-[80px] rounded-sm 
        border-[1px] border-green-400"
        />

        <p className="text-[14px] text-[#151875]">Sed placerat.</p>
        <p className="text-[12px] text-[#8A8FB9]">$12.00 - $15.00</p>
      </div>

      <div
        className="absolute top-[1821px] left-[1297px] w-[126px] h-[126px] 
      text-center font-lato font-semibold flex flex-col justify-between"
      >
        <Image
          src={op2}
          alt="op2"
          className="w-[126px] h-[80px] rounded-sm 
        border-[1px] border-green-400"
        />

        <p className="text-[14px] text-[#151875]">Netus proin.</p>
        <p className="text-[12px] text-[#8A8FB9]">$12.00 - $15.00</p>
      </div>

      <div
        className="absolute top-[1821px] left-[1438px] w-[126px] h-[126px] 
      text-center font-lato font-semibold flex flex-col justify-between"
      >
        <Image
          src={op3}
          alt="op3"
          className="w-[126px] h-[80px] rounded-sm 
        border-[1px] border-green-400"
        />

        <p className="text-[14px] text-[#151875]">Netus proin.</p>
        <p className="text-[12px] text-[#8A8FB9]">$12.00 - $15.00</p>
      </div>

      <Image
        src={icon}
        alt="icon"
        className="absolute top-[2029px] left-[1308px] 
      w-[103px] h-[25px]"
      />

      <div
        className="absolute top-[2140px] left-[1297px] w-[228px] h-[64px]
        font-lato text-[#151875] text-[16px] grid grid-cols-3 grid-rows-2 underline"
      >
        <p>General</p>
        <p className="text-[#FB2E86] underline">Atsanil</p>
        <p>Insas.</p>
        <p>Bibsaas</p>
        <p>Nulla.</p>
      </div>

      <Image
        src={logo}
        alt="logo"
        className="absolute top-[2858px] left-[508px] 
      w-[904px] h-[93px]"
      />

      <footer className="absolute top-[3063px]">
        <Footer />
      </footer>
    </>
  );
}

export default page;
