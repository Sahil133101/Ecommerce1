import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { Shopcontext } from '../context/Shopcontext';

const Navbar = () => {
    const [visible, setvisible] = useState(false);
    const { setshowsearch, getCartCount } = useContext(Shopcontext);
    const [cartCount, setCartCount] = useState(0);

    // Update cart count whenever cart changes
    useEffect(() => {
        setCartCount(getCartCount());
    }, [getCartCount]); // Listen to changes in getCartCount (which relies on cartItems)

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to="/"><img src={assets.logo} className='w-36' alt="" /></Link>
            
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
                {['Home', 'Collection', 'About', 'Contact'].map((page) => (
                    <NavLink key={page} to={`/${page.toLowerCase()}`} className='flex flex-col items-center gap-1'>
                        <p>{page}</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                ))}
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => setshowsearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt='Search' />
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' />
                    {cartCount > 0 && (
                        <p className='absolute right-[-6px] top-[-8px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                            {cartCount}
                        </p>
                    )}
                </Link>
                <img onClick={() => setvisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' />
            </div>

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setvisible(false)} className='flex items-center gap-4 p-3'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} />
                        <p className='cursor-pointer'>Back</p>
                    </div>
                    {['Home', 'Collection', 'About', 'Contact'].map((page) => (
                        <NavLink 
                            key={page} 
                            onClick={() => setvisible(false)} 
                            to={`/${page.toLowerCase()}`} 
                            className='py-2 text-center pl-6 border hover:bg-black hover:text-white transition-colors'
                        >
                            {page}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
