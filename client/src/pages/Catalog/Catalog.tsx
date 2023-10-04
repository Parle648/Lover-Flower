import React from 'react';

import Footer from '../../widgets/Footer/index.tsx';
import CatalogHero from '../../widgets/CatalogHeroSection/CatalogHero';
import ProductsList from '../../widgets/ProductsList/ProductsList';
import SortBy from '../../features/SortBy/SortBy';
import SortByProps from '../../features/SortByProps/SortByProps';

const Catalog = () => {
    return (
        <div className='Catalog'>
            <CatalogHero />
            <Footer />
        </div>
    );
};

export default Catalog;