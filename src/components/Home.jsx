import React, { useState } from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import { GiCoffeeCup } from 'react-icons/gi';
import cardBanner from '../assets/more/1.png'

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        <div>
            <Banner></Banner>
               
           <div 
  style={{ 
    backgroundImage: `url(${cardBanner})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '400px',
   
  }}
  className=''
>
  <div className='text-center mt-20 space-y-3'>
    <h2 className='font-rancho text-[#331A15] text-4xl font-bold'>
      Our Popular Products
    </h2>
   <Link
  to="/addCoffee"
  className="flex items-center mx-auto gap-2 bg-[#E3B577] border-2 border-[#331A15] text-white px-6 py-2 font-rancho text-2xl rounded-md w-max"
>
  Add Coffee
  <GiCoffeeCup className="text-[#331A15] text-3xl" />
</Link>

  </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto'>
                     {
    coffees.map(coffee => 
        <CoffeeCard
            coffees={coffees}
            setCoffees ={setCoffees}
            key={coffee._id}
            coffee={coffee} />
    )
  }
 </div>
</div>

        </div>
    );
};

export default Home;