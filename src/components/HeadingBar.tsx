import React from 'react'
import Link from 'next/link'

function HeadingBar() {
  return (
    <>
    <div className='h-[44px] max-w-[1920px] flex bg-[#7E33E0] relative text-[16px] 
    justify-evenly items-center text-[#F1F1F1] font-Jose
    
    max-sm:w-[360px] max-sm:h-[50px] max-sm:text-[8px] max-sm:justify-evenly'>

      <div className='relative flex space-x-7
      
      max-sm:space-x-0 max-sm:block'>
        
          <p>
          <i className="fa-regular fa-envelope pr-2"></i>      
            syedhassamshah287@gmail.com
          </p>
        
          
        <p>
        <i className="fa-solid fa-phone-volume -rotate-12 pr-2"></i>
          +92 347 0238450
          </p>
      </div>

      <div className='relative'>
        <ul className='flex space-x-7
        
        max-sm:space-x-2 max-sm:text-[9px]'>
        <Link href="/pages/404"><li>English <i className="fa-solid fa-v text-[8px]"></i></li></Link>
        <Link href="/pages/404"><li>USD <i className="fa-solid fa-v text-[8px]"></i></li></Link>
          <Link href="/pages/login"><li>Login <i className="fa-regular fa-user text-[12px]"></i></li></Link>
          <Link href="/pages/404"><li>Wishlist <i className="fa-regular fa-heart text-[12px]"></i></li></Link>
          <Link href="/pages/cart"><i className="fa-solid fa-cart-shopping text-xl"></i></Link>
        </ul>
      </div>

      
    </div>
    
    </>
  )
}

export default HeadingBar
