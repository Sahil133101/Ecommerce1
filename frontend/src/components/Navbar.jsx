import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
// import { assets } from './../assets/admin_assets/assets';
import Collection from './../pages/Collection';

const Navbar = () => {
    const [visible, setvisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.logo} className='w-36' alt =""/>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
           <NavLink to='/'  className='flex flex-col items-center gap-1 '>
            <p> Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            
          </NavLink>
          <NavLink to='/collection'  className='flex flex-col items-center gap-1'>
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            
          </NavLink>
          <NavLink to='/about'  className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
            
          </NavLink>
          <NavLink to='/contact'  className='flex flex-col items-center gap-1'>
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            
          </NavLink>


        </ul>
        <div className='flex items-center gap-6'>
            <img src= {assets.search_icon} className='w-5 cursor-pointer' alt='Search Image' />
            <div className='group relative'> 
                <img className='w-5 cursor-pointer ' src={assets.profile_icon} />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Order</p> 
                                                      <p className='cursor-pointer hover:text-black'>LogOut</p>

                    </div>

                </div>

            </div>
<Link to='/cart' className='relative'>
<img src = {assets.cart_icon} className=' w-5 min-w-5'/>
<p className='absolute right-[-6px] top-[-8px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'> 10</p>

</Link>
<img onClick ={()=> setvisible(true)}src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' />
        </div>
        {/* sidebar menu for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}> 
<div className='flex flex-col text-gray-600'>
    <div onClick={()=>setvisible(false)}className='flex items-center gap-4 p-3'>
        <img className='h-4 rotate-180 ' src={assets.dropdown_icon} />
<p className='cursor-pointer'>Back</p>
    </div>
    <NavLink onClick={()=> setvisible(false)} className='py-2 text-center pl-6 border'to="/">Home </NavLink>
    <NavLink onClick={()=> setvisible(false)} className='py-2 text-center pl-6 border'to="/collection">Collection </NavLink> 
    <NavLink onClick={()=> setvisible(false)}className='py-2 text-center pl-6 border' to="/About">About </NavLink>
    <NavLink  onClick={()=> setvisible(false)}className='py-2 text-center pl-6 border'to="/contact">Contact</NavLink>    

</div>
        </div>


    </div>
  )
}

export default Navbar