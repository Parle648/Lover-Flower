import React from 'react';
import styles from './styles/CatalogRange.module.scss';
import SortBy from '../../features/SortBy/SortBy.tsx';
import SortByProps from '../../features/SortByProps/SortByProps.tsx';
import TypeOfFlower from '../../features/TypeOfFlower/TypeOfFlower';
import ProductsList from '../ProductsList/ProductsList';

const CatalogRange = () => {
    function openFilter (event: React.MouseEvent<HTMLButtonElement>) {
        event.currentTarget.nextElementSibling?.classList.toggle(styles.filterOpened);
    };
    return (
        <div>
            <div className={styles.mobile}>
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
            <div className={styles.desctop}>
                <TypeOfFlower /> 
                <div className={styles.sortBycontainer}>
                    <SortBy />
                </div>
                <div className={styles.productBlock}>
                    <SortByProps />
                    <ProductsList />
                </div>
            </div>
        </div>
    );
};

export default CatalogRange;