import Footer from '@/components/Footer'
import React from 'react'
import Image from 'next/image'
import not from "@/images/not.png";
import Link from 'next/link';
import logo from "@/images/logo.png";

function page() {
  return (
    <>
    <div className="absolute top-[125px] w-[1920px] h-[286px] bg-[#F6F5FF]"></div>
      <h1
        className="absolute top-[221px] left-[374px] font-Jose
      text-[36px] text-[#101750] font-bold"
      >
        404 Not Found
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
        . 404 Not Found
      </p>

      <Image src={not} alt='not' className='absolute top-[439px] left-[504px]'/>

      <Link href="/"><button
          className="rounded-sm font-Jose text-[16px] text-[#FFFFFF] bg-[#FB2E86] 
        font-semibold w-[165px] h-[44px] absolute top-[1072px] left-[878px]"
        >
          Back To Home
        </button>
        </Link>

        <Image
        src={logo}
        alt="logo"
        className="absolute top-[1240px] left-[340px] 
      w-[1246px] h-[128px]"
      />

      <footer className="absolute top-[1427px]">
          <Footer />
        </footer>
    </>
  )
}

export default page
