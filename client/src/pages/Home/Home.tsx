import React from 'react';
import HeroSection from '../../widgets/Header/HeroSection';
import CatalogAbout from '../../widgets/CatalogAbout/index';
import Populars from '../../widgets/PopularFlowers/index';

const Home = () => {
    return (
        <div className='Home'>
            <HeroSection />
            <CatalogAbout />
            <Populars />
        </div>
    );
};

export default Home;