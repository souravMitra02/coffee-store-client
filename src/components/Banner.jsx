import React from 'react';
import banner from '../assets/more/3.png'
import img1 from '../assets/icons/1.png'
import img2 from '../assets/icons/2.png'
import img3 from '../assets/icons/3.png'
import img4 from '../assets/icons/4.png'
const Banner = () => {
    return (
        <>
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
      <h1 className="mb-3 text-white text-3xl md:text-3xl font-bold font-rancho">
        Would you like a Cup of Delicious Coffee?
      </h1>
      <p className="mb-3 font-raleway text-white text-sm lg:w-[620px]">
        It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your
        companion of every moment!!! Enjoy the beautiful moments and make them memorable.
      </p>
      <button  className="px-4 py-1 bg-[#E3B577] text-xl font-rancho  hover:border-2 hover:border-white hover:bg-black hover:text-white hover:cursor-pointer border-2 border-transparent">
  Learn More
</button>


    </div>
  </div>
            </div>
           <div className="bg-[#ECEAE3] py-10 px-4 md:px-20">
  <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
    {/* Card 1 */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center space-y-2">
      <img className="w-16 mx-auto" src={img1} alt="Awesome Aroma" />
      <h2 className="font-rancho text-3xl text-[#331A15]">Awesome Aroma</h2>
      <p className="text-sm text-gray-700">
        You will definitely be a fan of the design & aroma of your coffee
      </p>
    </div>

    {/* Card 2 */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center space-y-2">
      <img className="w-16 mx-auto" src={img2} alt="Awesome Aroma" />
      <h2 className="font-rancho text-3xl text-[#331A15]">Awesome Aroma</h2>
      <p className="text-sm text-gray-700">
        You will definitely be a fan of the design & aroma of your coffee
      </p>
    </div>

    {/* Card 3 */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center space-y-2">
      <img className="w-16 mx-auto" src={img3} alt="Awesome Aroma" />
      <h2 className="font-rancho text-3xl text-[#331A15]">Awesome Aroma</h2>
      <p className="text-sm text-gray-700">
        You will definitely be a fan of the design & aroma of your coffee
      </p>
    </div>

    {/* Card 4 */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center space-y-2">
      <img className="w-16 mx-auto" src={img4} alt="Awesome Aroma" />
      <h2 className="font-rancho text-3xl text-[#331A15]">Awesome Aroma</h2>
      <p className="text-sm text-gray-700">
        You will definitely be a fan of the design & aroma of your coffee
      </p>
    </div>
  </div>
</div>

        </>


    );
};

export default Banner;