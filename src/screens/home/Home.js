import React from 'react';
import '../../App.css';
import Cards from '../../components/cards/Cards';
import HeroSection from '../../components/herosection';

const Home = () => {
    return (
        <>
            <HeroSection/>
            <Cards />
        </>
    );
};

export default Home;