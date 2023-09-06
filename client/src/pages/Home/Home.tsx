import React from 'react';
import HeroSection from '../../widgets/Header/HeroSection';
import CatalogAbout from '../../widgets/CatalogAbout/index';
import Populars from '../../widgets/PopularFlowers/index';
import HowMakeOrder from '../../widgets/HowMakeOrder/HowMakeOrder';
import SpecialOccassion from '../../widgets/SpecialOccassion/index';
import Footer from '../../widgets/Footer/index';

const Home = () => {
    return (
        <div className='Home'>
            <HeroSection />
            <CatalogAbout />
            <Populars />
            <HowMakeOrder />
            <SpecialOccassion />
            <Footer />
        </div>
    );
};

export default Home;