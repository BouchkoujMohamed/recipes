import React from 'react'


function Header() {
  return (
    <div className=" h-[38vw] my-[30px] bg-[url('/header_img.png')] bg-no-repeat bg-contain relative animate-fadeIn  bg-[#ff6600] border md:h-[34vw]" >
      <div className='absolute bottom-[6%] left-[30.5vw] flex flex-col items-end
      gap-[1.5vw] max-w-[55%] md:max-w-[45%] text-white'>
        <div className='text-start ml-6'>
          <h2 className='text-xl sm:text-xl md:text-3xl text-start font-medium'>All your favorite foods are here. </h2>
          <p className='hidden text-[16px] mt-4 items-end lg:block'>
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
          </p>
        </div>
        
        <button className='border-none w-[50%] md:w-[30%] text-[2vw] text-[#747474] py-[2vw] px-[4vw]  font-medium md:py-[1vw] md:px-[2.3vw]  md:text-[1vw] bg-white rounded-[50px] text-center'>View Menu</button>
      </div>
      
    </div>
    
  )
}

export default Header
