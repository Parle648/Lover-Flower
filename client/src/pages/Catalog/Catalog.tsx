import React from 'react';

import Footer from '../../widgets/Footer/index.tsx';
import CatalogHero from '../../widgets/CatalogHeroSection/CatalogHero';

const Catalog = () => {
    return (
        <div className='Catalog'>
            <CatalogHero />
            <Footer />
        </div>
    );
};

export default Catalog;