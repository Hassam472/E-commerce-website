import React from 'react'
import Link from 'next/link'

function HeadingBar() {
  return (
    <>
    <div className='h-[44px] max-w-[1920px] flex bg-[#7E33E0] relative text-[16px] 
    justify-evenly items-center text-[#F1F1F1] font-Jose'>

      <div className='relative flex space-x-7'>
        
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
        <ul className='flex space-x-7'>
          <li>English <i className="fa-solid fa-v text-[8px]"></i></li>
          <li>USD <i className="fa-solid fa-v text-[8px]"></i></li>
          <li>Login <i className="fa-regular fa-user text-[12px]"></i></li>
          <li>Wishlist <i className="fa-regular fa-heart text-[12px]"></i></li>
          <Link href="/pages/cart"><i className="fa-solid fa-cart-shopping text-xl"></i></Link>
        </ul>
      </div>

      
    </div>
    
    </>
  )
}

export default HeadingBar
