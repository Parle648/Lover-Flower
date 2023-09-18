import React from 'react';

import Header from '../../widgets/Header/index.tsx';
import Footer from '../../widgets/Footer/index.tsx';
import CallOrder from '../../features/OrderCall';

import backgr from '../../img/catalog-hero-background.png';
import TopHeader from '../../widgets/TopHeader/TopHeader';

const Catalog = () => {
    return (
        <div className='Catalog'>
            <img src={backgr} alt="asdas" style={{minWidth: '100%', backgroundColor: '#000'}}/>
            <CallOrder />
            <TopHeader />
            <Header />
            <Footer />
        </div>
    );
};

export default Catalog;