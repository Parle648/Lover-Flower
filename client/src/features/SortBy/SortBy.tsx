import React from 'react';
import styles from './styles/SortBy.module.scss';
import arrow from '../../img/arrow-sort-by.svg';

import { useDispatch, useSelector } from 'react-redux';
import { updateValue } from '../../redux/slices/SortBy'; 
import { update } from '../../redux/slices/Products';
import getCurrentproducts from './api/api.ts';

const SortBy = () => {
    const dispatch = useDispatch();

    const types = useSelector((state: any) => state.prodTypes);
    const props = useSelector((state: any) => state.Params);

    function handle (event: React.MouseEvent<HTMLButtonElement>) {
        dispatch(updateValue(event.currentTarget.innerText));

        const string = event.currentTarget.innerText;
        const obj = { types, sortBy: {
            value: string
        }, props }

        try {
            console.log(obj.sortBy)
            getCurrentproducts(obj)
            .then((res: any) => {
                dispatch(update(res));
            })
        } catch (err) {
            console.error(err)
        }
    };
   
    return (
        <div className={styles.block}>
            <div className={styles.head}>
                <span className={styles.headTtl} datatype='rating'>По популярности</span>
                <img className={styles.arrow} src={arrow} alt="arrow" />
            </div>
            <div className={styles.body}>
                <span className={styles.headTtl} datatype='Increasing' onClick={handle}>По возростанию</span><br />
                <span className={styles.headTtl} datatype='Decreasing' onClick={handle}>По убыванию</span>
            </div>
        </div>
    );
};

export default SortBy;