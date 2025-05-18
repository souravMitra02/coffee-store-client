import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';

const Home = () => {
    const coffees = useLoaderData();
    console.log(coffees);
    return (
        <div>
             <Banner></Banner>
        </div>
    );
};

export default Home;