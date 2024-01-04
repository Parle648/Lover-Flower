import React from 'react';
import styles from './styles/CatalogRange.module.scss';
import SortBy from '../../features/SortBy/SortBy.tsx';
import SortByProps from '../../features/SortByProps/SortByProps.tsx';
import TypeOfFlower from '../../features/TypeOfFlower/TypeOfFlower';
import ProductsList from '../ProductsList/ProductsList';

const ArrowDown = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="#43FFD2" style={{marginLeft: '21px'}}>
            <path d="M4.58891 7.7845C4.63478 7.85112 4.69615 7.90559 4.76775 7.94323C4.83935 7.98086 4.91902 8.00052 4.99991 8.00052C5.08079 8.00052 5.16046 7.98086 5.23206 7.94323C5.30366 7.90559 5.36504 7.85112 5.41091 7.7845L9.91091 1.2845C9.963 1.20953 9.99354 1.12172 9.99922 1.0306C10.0049 0.93949 9.98552 0.848562 9.94315 0.767697C9.90079 0.686832 9.83707 0.619124 9.75893 0.571929C9.68078 0.524734 9.5912 0.499857 9.49991 0.500001H0.499907C0.408829 0.500377 0.319576 0.525574 0.241748 0.572882C0.163919 0.62019 0.100459 0.68782 0.0581917 0.768497C0.0159247 0.849175 -0.00355002 0.939848 0.00186196 1.03077C0.00727394 1.12168 0.0373678 1.20941 0.0889073 1.2845L4.58891 7.7845Z"/>
        </svg> 
    )
}

const CatalogRange = () => {
    function openFilter (event: React.MouseEvent<HTMLButtonElement>) {
        event.currentTarget.nextElementSibling?.classList.toggle(styles.filterOpened);
        event.currentTarget.classList.toggle(styles.filterActive)
        event.currentTarget.lastElementChild?.classList.toggle(styles.arrowActive)
    };
    return (
        <div>
            <div className={styles.mobile}>
                <div className={styles.openPropsSort}>
                    <span className={styles.toggleFilter} onClick={openFilter}>фильтр товаров <ArrowDown/></span>
                    <SortByProps />
                </div>
                <div className={styles.openSortBy}>
                    <span className={styles.toggleFilter} onClick={openFilter}>сортировка товаров <ArrowDown/></span>
                    <SortBy />
                </div>
                <div className={styles.openTypeFlower}>
                    <span className={styles.toggleFilter} onClick={openFilter}>Категории <ArrowDown/></span>
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