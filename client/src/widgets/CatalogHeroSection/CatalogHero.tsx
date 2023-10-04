import React from 'react';
import styles from './style/catalog.module.scss';

import backgr from '../../img/catalog-hero-background.png';
import backgrModile from '../../img/catalog-background-modile.png';

import CallOrder from '../../features/OrderCall';
import TopHeader from '../TopHeader/TopHeader';
import Header from '../../widgets/Header/index.tsx';
import TypeOfFlower from '../../features/TypeOfFlower/TypeOfFlower';
import SortByProps from '../../features/SortByProps/SortByProps';
import ProductsList from '../ProductsList/ProductsList';
import SortBy from '../../features/SortBy/SortBy.tsx';

const CatalogHero = () => {
    const [scroll, setScroll] = React.useState(0);

    document.addEventListener('scroll', () => {
        setScroll(window.scrollY)}
    )

    return (
        <div className={styles.block}>
            <img className={styles.background} src={document.body.clientWidth >= 800 ? backgr : backgrModile} alt="asdas" />
            <CallOrder />
            {scroll > 500 && <TopHeader />}
            <Header />
            {document.body.clientWidth <= 800 &&
                <div>
                    <div className={styles.openPropsSort}>
                        openPropsSort
                        <SortByProps />
                    </div>
                    <div className={styles.openSortBy}>
                        openSortBy
                        <SortBy />
                    </div>
                    <div className={styles.openTypeFlower}>
                        openTypeFlower
                        <TypeOfFlower /> 
                    </div>
                    <ProductsList />
                </div>
            }
            {document.body.clientWidth >= 800 && 
            <div>
                <TypeOfFlower /> 
                <SortBy />
                <div className={styles.productBlock}>
                    {document.body.clientWidth >= 800 && <SortByProps />}
                    <ProductsList />
                </div>
            </div>
            }
        </div>
    );
};

export default CatalogHero;