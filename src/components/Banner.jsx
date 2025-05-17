import React from 'react';
import banner from '../assets/more/3.png'
const Banner = () => {
    return (
      <div
  className="hero h-[500px] w-full relative"
  style={{
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="hero-overlay bg-opacity-60"></div>

  <div className="flex justify-end items-center h-full px-4 md:px-12 absolute lg:left-[40%] top-2">
    <div className="text-center lg:text-start">
      <h1 className="mb-3 text-3xl md:text-3xl font-bold font-rancho">
        Would you like a Cup of Delicious Coffee?
      </h1>
      <p className="mb-3 font-raleway text-sm lg:w-[620px]">
        It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your
        companion of every moment!!! Enjoy the beautiful moments and make them memorable.
      </p>
      <button  className="px-4 py-1 bg-[#E3B577] text-xl font-rancho  hover:border-2 hover:border-white hover:bg-black hover:text-white hover:cursor-pointer border-2 border-transparent">
  Learn More
</button>


    </div>
  </div>
</div>


    );
};

export default Banner;