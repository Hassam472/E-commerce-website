import React from 'react'
import Link from 'next/link'

function Ecommerce() {
  return (
    <>
    <div className="absolute top-[535px] left-[374px] w-[1171px] h-[44px]
    max-sm:w-[360px] max-sm:left-[10px] max-sm:top-[350px]">
        <h2 className="font-Jose text-[22px] text-[#151875] font-bold
        max-sm:w-[340px] max-sm:text-[16px]">
          Ecommerce Accessories & Fashion item
        </h2>
        <p className="font-lato text-[#8A8FB9] text-[12px] absolute top-[30px]
        max-sm:top-[20px]">
          About 9,620 results (0.62 seconds)
        </p>

        <p className="font-lato text-[#3F509E] text-[16px] absolute top-[12px] 
        left-[569px]
        max-sm:text-[12px] max-sm:left-0 max-sm:top-[60px]">
          Per Page:
        </p>
        <input
          type="text"
          className="w-[55px] h-[25px] border-[#E7E6EF]
          absolute top-[12px] left-[643px] border-[2px]
          max-sm:top-[60px] max-sm:left-[56px] max-sm:h-[20px]"
        />

        <p className="font-lato text-[#3F509E] text-[16px] absolute top-[12px] 
        left-[725px]
        max-sm:text-[12px] max-sm:left-[123px] max-sm:top-[60px]">
          Sort By:
        </p>
        <input
          type="text"
          placeholder="Best Match"
          className="w-[96px] h-[28px]
          absolute top-[12px] left-[789px] border-[2px] border-[#E7E6EF] text-center
          text-[#8A8FB9] font-lato text-xs
          max-sm:top-[60px] max-sm:left-[171px] max-sm:w-[70px] max-sm:h-[20px]"
        />

        <p className="font-lato text-[#3F509E] text-[16px] absolute top-[12px] 
        left-[909px]
        max-sm:text-[12px] max-sm:left-[255px] max-sm:top-[60px]">
          View:
        </p>
        <Link href="/pages/shopGrid">
          <i
            className="fa-solid fa-border-all absolute top-[18px]
        left-[953px] cursor-pointer text-[#000000]
        max-sm:left-[295px] max-sm:top-[60px]"
          ></i>
        </Link>

        <Link href="/pages/shopList">
          <i
            className="fa-solid fa-list absolute top-[18px]
        left-[975px] cursor-pointer text-[#151875]
        max-sm:left-[320px] max-sm:top-[60px]"
          ></i>
        </Link>
        <input
          type="text"
          className="w-[162px] h-[30px]
          absolute top-[11px] left-[1009px] border-[2px] border-[#E7E6EF] text-center
          text-[#8A8FB9] font-lato text-[16px]
          max-sm:hidden"
        />
      </div>
    </>
  )
}

export default Ecommerce
