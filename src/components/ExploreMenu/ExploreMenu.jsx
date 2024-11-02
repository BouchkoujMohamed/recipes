import React from 'react'
import {menu_list} from '../../assets/assets'
import './ExploreMenu.css'

function ExploreMenu({category,setCategory}){
  return (
    <div className='flex flex-col gap-[20px]  max-w-[100%]'>
      <h2 className='text-3xl text-[#262626] font-bold'>explore our menu</h2>
      <p className='max-w-[100%] text-[14px] md:text-[17px] md:max-w-[60%] text-[#808080]'>Choose from a diverse menu featuring a delicious array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className=' menu_list flex justify-between items-center gap-[30px] text-center my-[20px] overflow-x-scroll min-w-[50px]'>
        {menu_list.map((item,index)=>{
          return(
            <div key={index} className='listItems '
              onClick={()=>setCategory(prev=>prev===item.menu_name?"All Recipes":item.menu_name
              )}>
              <img 
                className={category===item.menu_name?"active":""}
                src={item.menu_image}
                alt="" />
              <p  className={category===item.menu_name?" mt-[10px] text-[#ff6600] text-[12px] lg:text-[16px] cursor-pointer":"mt-[10px] lg:text-[16px] text-[12px] md:text-[#747474]  cursor-pointer"}>{item.menu_name}</p>
            </div>
          )
          
        })}
      </div>
      <hr className='mt-[12px] h-[4px] bg-[#ffffff] border  border-[tomato] border-l-[0px] border-r-[0px]'/>

    </div>
  )
}

export default ExploreMenu
