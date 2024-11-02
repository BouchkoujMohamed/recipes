import React from 'react'
import { Link } from 'react-router-dom';


import { useState } from 'react';
import {assets} from '../assets/assets';

function Navbar() {
    const [menu , setMenu]=useState("Home")
    const [showModul , setShowModul]=useState(false);

  return (
    <div className='flex flex-col gap-3'>
        <div className='flex  justify-between items-center gap-6 py-[20px]'>
        <img src={assets.logo} alt="" className='w-[140px] lg:w-[200px] ' />
        <ul className='hidden list-none gap:[10px] text-[15px]  text-[#49557e]  cursor-pointer lg:gap-[20px] lg:text-[20px] lg:flex'>
            <Link to='/' onClick={()=>setMenu("Home")} 
                className={menu==="Home"?
            "text-[tomato] pb-[2px] border-b-[2px] border-[tomato]":" "}>Home</Link>
            <Link to="/Privacy-Policy" onClick={()=>setMenu("Privacy-Policy")}
                className={menu==="Privacy-Policy"?
            "text-[tomato] pb-[2px] border-b-[2px] border-[tomato]":""}>Privacy Policy</Link>
            <Link to="/About-Us" onClick={()=>setMenu('About-Us')}
                className={menu==="About-Us"?
            "text-[tomato] pb-[2px] border-b-[2px] border-[tomato]":""}>About Us</Link>
            <Link to="/Terms-Of-Use" onClick={()=>setMenu('Terms-Of-Use')}
                className={menu==="Terms-Of-Use"?
            "text-[tomato] pb-[2px] border-b-[2px] border-[tomato]":""}>Terms Of Use</Link>
            <Link to="/DMCA" onClick={()=>setMenu('DMCA')}
                className={menu==="DMCA"?
            "text-[tomato] pb-[2px] border-b-[2px] border-[tomato]":""}>DMCA</Link>
            <Link to="/Contact-Us" onClick={()=>setMenu('Contact-Us')}
                className={menu==="Contact-Us"?
            "text-[tomato] pb-[2px] border-b-[2px] border-[tomato]":""}>Contact Us</Link>
        </ul>

        <div className="flex gap-[40px] items-center">
            <img src={assets.search_icon} alt="" />
            <img src={assets.menu_header} alt="" onClick={()=>{showModul?setShowModul(false):setShowModul(true)}} className='w-[35px] cursor-pointer lg:hidden  flex ' />
        </div>
        </div>
        {showModul &&(
                <div className="gap-5 z-10  flex justify-end">
                    <ul className='fixed flex flex-col mt-[-16px] rounded-lg justify-center gap-6 w-[60%] pb-2  bg-gray-300 opacity-[0.98] pl-2 pt-4'>
                    <img src={assets.cross_icon} alt="" onClick={()=>{
                    setShowModul(false)}} className='w-[25px] mt-3 cursor-pointer  ml-[80%]' />
                        <Link to='/' onClick={()=>setMenu("Home")} 
                            className={menu==="Home"?
                        "bg-[tomato] p-2 text-white text-lg mt-4":"p-2  text-[tomato] text-lg  mt-4"}>Home</Link>
                        <Link to="/Privacy-Policy" onClick={()=>setMenu("Privacy-Policy")}
                            className={menu==="Privacy-Policy"?
                        "bg-[tomato] p-2 text-white text-lg":"p-2 text-[tomato] text-lg"}>Privacy Policy</Link>
                        <Link to="/About-Us" onClick={()=>setMenu('About-Us')}
                            className={menu==="About-Us"?
                        "bg-[tomato] p-2 text-white text-lg":"p-2 text-[tomato] text-lg"}>About Us</Link>
                        <Link to="/Terms-Of-Use" onClick={()=>setMenu('Terms-Of-Use')}
                            className={menu==="Terms-Of-Use"?
                        "bg-[tomato] p-2 text-white text-lg":"p-2 text-[tomato] text-lg"}>Terms Of Use</Link>
                        <Link to="/DMCA" onClick={()=>setMenu('DMCA')}
                            className={menu==="DMCA"?
                        "bg-[tomato] p-2 text-white text-lg":"p-2 text-[tomato] text-lg"}>DMCA</Link>
                        <Link to="/Contact-Us" onClick={()=>setMenu('Contact-Us')}
                            className={menu==="Contact-Us"?
                        "bg-[tomato] p-2 text-white text-lg":"p-2 text-[tomato] text-lg"}>Contact Us</Link>
                    </ul>
            </div>
            )}
    </div>
    
    )
}

export default Navbar
