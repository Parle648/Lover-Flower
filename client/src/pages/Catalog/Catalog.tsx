import React from 'react';

import Footer from '../../widgets/Footer/index.tsx';
import CatalogHero from '../../widgets/CatalogHeroSection/CatalogHero';
import ProductsList from '../../widgets/ProductsList/ProductsList';

const Catalog = () => {
    return (
        <div className='Catalog'>
            <CatalogHero />
            <ProductsList />
            <Footer />
        </div>
    );
};

export default Catalog;