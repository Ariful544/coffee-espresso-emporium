import React from 'react';
import logo from '../assets/images/more/logo1.png'

const Navbar = () => {
    return (
        <div className="min-h-[120px] max-w-screen-2xl bg-[url('./assets/images/more/15.jpg')] bg-cover bg-no-repeat ">
            <div className='flex justify-center items-center py-4 gap-4'>
                <img className='w-20 h-24' src={logo} alt="" />
                <h2 className='md:text-6xl text-4xl text-white'>Espresso Emporium</h2>
            </div>
        </div>
    );
};

export default Navbar;