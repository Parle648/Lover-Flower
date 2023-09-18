import React from 'react';

import backgr from '../../img/catalog-hero-background.png';

import CallOrder from '../../features/OrderCall';
import TopHeader from '../TopHeader/TopHeader';
import Header from '../../widgets/Header/index.tsx';
import TypeOfFlower from '../../features/TypeOfFlower/TypeOfFlower';

const CatalogHero = () => {
    const [scroll, setScroll] = React.useState(0);

    document.addEventListener('scroll', () => {
        setScroll(window.scrollY)}
    )

    return (
        <div>
            <img src={backgr} alt="asdas" style={{minWidth: '100%', backgroundColor: '#000'}}/>
            <CallOrder />
            {scroll > 500 && <TopHeader />}
            <Header />
            <TypeOfFlower />
        </div>
    );
};

export default CatalogHero;