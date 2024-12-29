import React from 'react'
import Image from 'next/image'
import icon from '@/images/icon.jpg';
import Link from 'next/link';

function Footer() {
  return (
    <>
    <div className='w-[1920px] h-[479px] bg-[#EEEFFB]
    max-sm:w-[360px] max-sm:h-[900px]'>

    <Link href="/pages/demo">
    <h2 className='absolute top-[95px] left-[310px] text-[38px] text-[#000000]
    font-Jose font-bold cursor-pointer
    max-sm:text-[28px] max-sm:top-[30px] max-sm:left-[130px]'>Hekto</h2>
    </Link>

    <input type="text" placeholder='Enter Email Address' className='font-lato
    absolute top-[164px] left-[309px] w-[377px] h-[44px] rounded-[3px] bg-[#FFFFFF]
    text-[16px] text-[#8A8FB9] pl-3
    max-sm:text-[14px] max-sm:top-[80px] max-sm:left-[70px] max-sm:w-[220px] max-sm:h-[34px]
    ' 
    />

    <button className='absolute top-[167px] left-[549px] w-[135px] h-[39px] rounded-[3px]
     bg-[#FB2E86] text-[16px] text-[#EEEFFB] font-medium font-roboto
     max-sm:text-[14px] max-sm:top-[82px] max-sm:left-[215px] max-sm:w-[75px] max-sm:h-[29px]'>
          Sign Up</button>

     <p className='absolute top-[233px] left-[308px] text-[#8A8FB9]
     font-lato text-[16px]
     
     max-sm:text-[14px] max-sm:top-[122px] max-sm:left-[133px]'>
          Contact Info</p>

<p className='absolute top-[262px] left-[308px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:top-[147px] max-sm:text-center max-sm:w-[220px] max-sm:left-[70px]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
{/* responsive */}
<p className='absolute top-[158px] left-[780px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[260px]'>Laptops & Computers</p>

<p className='absolute top-[198px] left-[780px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[290px]'>Smart Phones & Tablets</p>

<p className='absolute top-[238px] left-[780px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[320px]'>Cameras & Photography</p>

<p className='absolute top-[278px] left-[780px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[350px]'>Video Games & Consoles</p>

<p className='absolute top-[318px] left-[780px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[380px]'>Waterproof Headphones</p>
{/* 1st */}
<p className='absolute top-[157px] left-[1046px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[463px]'>My Account</p>

<p className='absolute top-[197px] left-[1046px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[493px]'>Discount</p>

<p className='absolute top-[237px] left-[1046px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[523px]'>Returns</p>

<p className='absolute top-[277px] left-[1046px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[553px]'>Orders History</p>

<p className='absolute top-[317px] left-[1046px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[583px]'>Order Tracking</p>
     {/* 2nd */}

<p className='absolute top-[159px] left-[1287px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[683px]'>Blog</p>

<p className='absolute top-[199px] left-[1287px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[713px]'>Browse the Shop</p>

<p className='absolute top-[239px] left-[1287px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[743px]'>Category</p>

<p className='absolute top-[279px] left-[1287px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[773px]'>Pre-Built Pages</p>

<p className='absolute top-[319px] left-[1287px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[803px]'>Visual Composer Elements</p>

<p className='absolute top-[359px] left-[1287px] text-[#8A8FB9]
     font-lato text-[16px]
     max-sm:text-[14px] max-sm:left-[70px] max-sm:top-[833px]'>WooCommerce Pages</p>

     <p className='absolute top-[94px] left-[780px] text-[22px] font-Jose font-bold 
     text-[#000000]
     max-sm:top-[220px] max-sm:left-[70px]'>Catagories</p>

<p className='absolute top-[94px] left-[1047px] text-[22px] font-Jose font-bold 
     text-[#000000]
     max-sm:top-[433px] max-sm:left-[70px]'>Customer Care</p>

<p className='absolute top-[94px] left-[1287px] text-[22px] font-Jose font-bold 
     text-[#000000]
     max-sm:top-[653px] max-sm:left-[70px]'>Pages</p>
    </div>
    <div className='max-w-[1920px] h-[53px] flex justify-evenly items-center 
    bg-[#E7E4F8] max-sm:w-[360px] max-sm:flex-col-reverse'>
      <p className='font-lato font-semibold text-[16px]
      text-[#9DA0AE] max-sm:text-[12px]'>©Muhammad Hassam Uddin - All Rights Reserved</p>
      <Image src={icon} alt='icon' className='w-[80px] h-[20px]
      max-sm:w-[60px] max-sm:h-[15px]'/>
    </div>
    </>
  )
}

export default Footer
