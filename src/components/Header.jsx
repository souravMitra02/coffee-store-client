import React from 'react';
import bgImg from '../assets/more/15.jpg'
import logo from '../assets/more/logo1.png'
import Banner from './Banner';
const Header = () => {
    return (
            <div
            className="h-[80px] text-white"
            style={{ backgroundImage: `url(${bgImg})` }}
            >
                <div className='flex items-center justify-center gap-2'>
                <img className='w-12' src={logo} alt="" />
                <h2 className='font-rancho text-3xl'>Espresso Emporium</h2>
                </div>    
          
        </div> 
    );
};

export default Header;