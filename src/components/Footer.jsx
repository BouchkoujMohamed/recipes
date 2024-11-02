import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='mt-[100px] w-[100%]  bg-[#f5e0c9] text-gray-600 '>
        <div className='flex flex-col   w-[100%] mx-auto py-[10px] md:w-[80%]'>
        <img className='w-[260px] pt-[20px] mx-auto md:mx-0' src={assets.logo} alt="" />
            <div className='black justify-between md:m-0 m-auto md:flex'>
                <div className='justify-center md:justify-start'>
                    <p className='mt-3 text-lg'>Delicious Family-Inspired Dishes for Every Occasion.</p>
                    <h2 className='mt-2 text-xl text-[tomato]'>Ready to cook?</h2>
                    <p className='mt-1 w-[400px]'>Sign up for our weekly newsletters!</p>
                    <form action="" className='flex flex-col mt-2 gap-3'>
                        <input className='p-2 w-[360px] rounded-[6px] bg-slate-100 focus:outline-none focus:border-[tomato] focus:ring-1' type="text" name="" placeholder='your name' id="" required/>
                        <input className='p-2 text-[tomato] w-[360px] rounded-[6px] bg-slate-100 focus:outline-none focus:border-[tomato] focus:ring-1 ' type="email" name="" placeholder='your email adress' id="" required />

                        <input className='p-2 font-[400px] outline-none w-[360px] rounded-[6px] bg-slate-100 hover:bg-slate-200 hover:text-[tomato] cursor-pointer  hover:border-[tomato]  '  type="submit" value="SIGN UP" />
                    </form>
                </div>
                <div className='flex justify-between gap-[100px] mt-5 md:mt-0'>
                    <div>
                        <h2 className='text-xl text-[tomato]' >COMPANY</h2>
                        <ul className='flex flex-col mt-6 gap-3'>
                            <li className='text-base' ><Link to='/'>Home</Link> </li>
                            <li className='text-base' ><Link to='/About-Us'>About Us</Link> </li>
                            <li className='text-base' ><Link to='/Privacy-Policy'>Privacy Policy</Link> </li>
                            <li className='text-base' ><Link to='/Terms-Of-Use'>Terms Of Use</Link> </li>
                            <li className='text-base' ><Link to='/DMCA'>DMCA</Link> </li>
                        </ul>
                    </div>
                    <div>
                    <h2 className='text-xl text-[tomato]' >GET IN TOUCH</h2>
                    <ul className='mt-6 flex flex-col gap-3'>
                        <li className='text-base'><a href='#'>Email</a> </li>
                        <li className='text-base'><a href='#'>Facebook</a> </li>
                        <li className='text-base'><a href='#'>Instagram</a> </li>
                        <li className='text-base'><a href='#'>Pinterest</a> </li>
                        <li className='text-base'><a href='#'>Youtube</a> </li>
                        <li className='text-base'><a href='#'>Subscribe</a> </li>
                        <a href=""></a>
                    </ul>
                </div>
                </div>
            </div>
            <hr className='mt-[12px] h-[4px] bg-[#ffffff] border  border-[tomato] border-l-[0px] border-r-[0px] '/>
            <p className='text-center p-4 '>copyright 2042 © sister'srecipes.com - all right resereved</p>
        </div>
        
    </div>
    )
}

export default Footer
