import React from 'react'
import Image from 'next/image'
import icon from '@/images/icon.jpg';
import Link from 'next/link';

function Footer() {
  return (
    <>
    <div className='w-[1920px] h-[479px]
     bg-[#EEEFFB]'>
    <Link href="/pages/demo">
    <h2 className='absolute top-[95px] left-[310px] text-[38px] text-[#000000]
    font-Jose font-bold cursor-pointer'>Hekto</h2>
    </Link>
    <input type="text" placeholder='Enter Email Address' className='font-lato
    absolute top-[164px] left-[309px] w-[377px] h-[44px] rounded-[3px] bg-[#FFFFFF]
    text-[16px] text-[#8A8FB9] pl-3' />
    <button className='absolute top-[167px] left-[549px] w-[135px] h-[39px] rounded-[3px]
     bg-[#FB2E86] text-[16px] text-[#EEEFFB] font-medium font-roboto'>Sign Up</button>

     <p className='absolute top-[233px] left-[308px] text-[#8A8FB9]
     font-lato text-[16px]'>Contact Info</p>

<p className='absolute top-[262px] left-[308px] text-[#8A8FB9]
     font-lato text-[16px]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>

<p className='absolute top-[158px] left-[780px] text-[#8A8FB9]
     font-lato text-[16px]'>Laptops & Computers</p>

<p className='absolute top-[198px] left-[780px] text-[#8A8FB9]
     font-lato text-[16px]'>Cameras & Photography</p>

<p className='absolute top-[238px] left-[780px] text-[#8A8FB9]
     font-lato text-[16px]'>Smart Phones & Tablets</p>

<p className='absolute top-[278px] left-[780px] text-[#8A8FB9]
     font-lato text-[16px]'>Video Games & Consoles</p>

<p className='absolute top-[318px] left-[780px] text-[#8A8FB9]
     font-lato text-[16px]'>Waterproof Headphones</p>

<p className='absolute top-[157px] left-[1046px] text-[#8A8FB9]
     font-lato text-[16px]'>My Account</p>

<p className='absolute top-[197px] left-[1046px] text-[#8A8FB9]
     font-lato text-[16px]'>Discount</p>

<p className='absolute top-[237px] left-[1046px] text-[#8A8FB9]
     font-lato text-[16px]'>Returns</p>

<p className='absolute top-[277px] left-[1046px] text-[#8A8FB9]
     font-lato text-[16px]'>Orders History</p>

<p className='absolute top-[317px] left-[1046px] text-[#8A8FB9]
     font-lato text-[16px]'>Order Tracking</p>

<p className='absolute top-[159px] left-[1287px] text-[#8A8FB9]
     font-lato text-[16px]'>Blog</p>

<p className='absolute top-[199px] left-[1287px] text-[#8A8FB9]
     font-lato text-[16px]'>Browse the Shop</p>

<p className='absolute top-[239px] left-[1287px] text-[#8A8FB9]
     font-lato text-[16px]'>Category</p>

<p className='absolute top-[279px] left-[1287px] text-[#8A8FB9]
     font-lato text-[16px]'>Pre-Built Pages</p>

<p className='absolute top-[319px] left-[1287px] text-[#8A8FB9]
     font-lato text-[16px]'>Visual Composer Elements</p>

<p className='absolute top-[359px] left-[1287px] text-[#8A8FB9]
     font-lato text-[16px]'>WooCommerce Pages</p>

     <p className='absolute top-[94px] left-[780px] text-[22px] font-Jose font-bold 
     text-[#000000]'>Catagories</p>

<p className='absolute top-[94px] left-[1047px] text-[22px] font-Jose font-bold 
     text-[#000000]'>Customer Care</p>

<p className='absolute top-[94px] left-[1287px] text-[22px] font-Jose font-bold 
     text-[#000000]'>Pages</p>
    </div>
    <div className='max-w-[1920px] h-[53px] flex justify-evenly items-center bg-[#E7E4F8]'>
      <p className='font-lato font-semibold text-[16px]
      text-[#9DA0AE]'>©Muhammad Hassam Uddin - All Rights Reserved</p>
      <Image src={icon} alt='icon' className='w-[80px] h-[20px]'/>
    </div>
    </>
  )
}

export default Footer
