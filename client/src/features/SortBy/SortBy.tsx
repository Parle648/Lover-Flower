import React from 'react';
import styles from './styles/SortBy.module.scss';
import arrow from '../../img/arrow-sort-by.svg';

import { useDispatch, useSelector } from 'react-redux';
import { updateValue } from '../../redux/slices/SortBy'; 

const SortBy = () => {
    const dispatch = useDispatch();
    const types = useSelector((state: any) => state.prodTypes);
    const params = useSelector((state: any) => state.Params);
    let [products, setProducts] = React.useState([]);

    function sortBy (event: React.MouseEvent<HTMLButtonElement>) {
        dispatch(updateValue(event.currentTarget.innerText))
    };

    return (
        <div className={styles.block}>
            <div className={styles.head}>
                <span className={styles.headTtl} datatype='rating'>По популярности</span>
                <img className={styles.arrow} src={arrow} alt="arrow" />
            </div>
            <div className={styles.body}>
                <span className={styles.headTtl} datatype='Increasing' onClick={sortBy}>По возростанию</span>
                <span className={styles.headTtl} datatype='Decreasing' onClick={sortBy}>По убыванию</span>
            </div>
        </div>
    );
};

export default SortBy;