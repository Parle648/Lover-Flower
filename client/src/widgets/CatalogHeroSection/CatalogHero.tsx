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
        setScroll(window.scrollY);
    });

    React.useEffect(() => {
        document.querySelectorAll(`.${styles.toggleFilter}`).forEach((item: any) => {
            item?.currentTarget.nextElementSibling?.classList.toggle(styles.filterOpened);
        });
    }, []);

    function openFilter (event: React.MouseEvent<HTMLButtonElement>) {
        event.currentTarget.nextElementSibling?.classList.toggle(styles.filterOpened);
    };

    return (
        <div className={styles.block}>
            <img className={styles.background} src={document.body.clientWidth >= 800 ? backgr : backgrModile} alt="asdas" />
            <CallOrder />
            {scroll > 500 && <TopHeader />}
            {document.body.clientWidth > 800 ? <Header /> : <TopHeader />}
            {document.body.clientWidth <= 800 &&
                <div>
                    <div className={styles.openPropsSort}>
                        <span className={styles.toggleFilter} onClick={openFilter}>фильтр товаров</span>
                        <SortByProps />
                    </div>
                    <div className={styles.openSortBy}>
                        <span className={styles.toggleFilter} onClick={openFilter}>сортировка товаров</span>
                        <SortBy />
                    </div>
                    <div className={styles.openTypeFlower}>
                        <span className={styles.toggleFilter} onClick={openFilter}>Категории</span>
                        <TypeOfFlower /> 
                    </div>
                    <ProductsList />
                </div>
            }
            {document.body.clientWidth >= 800 && 
            <div>
                <TypeOfFlower /> 
                <div className={styles.sortBycontainer}>
                    <SortBy />
                </div>
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