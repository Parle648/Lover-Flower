import React from 'react';
import HeroSection from '../../widgets/Header/HeroSection';
import CatalogAbout from '../../widgets/CatalogAbout/index';
import Populars from '../../widgets/PopularFlowers/index';
import HowMakeOrder from '../../widgets/HowMakeOrder/HowMakeOrder';
import HaveQuestions from '../../widgets/HaveQuestions/index';
import SpecialOccassion from '../../widgets/SpecialOccassion/index';
import Insta from '../../widgets/InstaBlock/index';
import Footer from '../../widgets/Footer/index';

import OrderCall from '../../features/OrderCall/index.tsx';

const Home = () => {

    return (
        <div className='Home'>
            <OrderCall />
            <HeroSection />
            <CatalogAbout />
            <Populars />
            <HowMakeOrder />
            <SpecialOccassion />
            <HaveQuestions />
            <Insta />
            <Footer />
        </div>
    );
};

export default Home;