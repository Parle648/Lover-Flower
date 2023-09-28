import React from 'react';
import styles from './styles/FlowerType.module.scss';
import getProducts from './api/getRequest.ts';

import { pushType, popType } from '../../redux/slices/ProductTypes';
import { useDispatch } from 'react-redux';

const TypeOfFlower = () => {
    const dispatch = useDispatch();
    const buttons: string[] = [
        'Букеты из гипсофил', 'Букеты из ромашек', 'Букеты из хризантем','Комнатные цветы в горшках','Монобукеты','Сборные букеты','Букет на праздник',
        'Композиции из цветов','Конверты','Открытки','Подарки','Букеты из сухоцветов','Шары','Популярное','Букеты роз','Цветы на похороны','Упаковка подарков',
    ];

    function FindExaxts(event: React.MouseEvent<HTMLButtonElement>) {
        const type = event?.currentTarget.innerText;
        const typedProducts = getProducts(type);
       
        if (event?.currentTarget.classList.contains(`${styles.active}`)) {
            dispatch(popType(type))
        } else {
            dispatch(pushType(type))
        }
       
        event?.currentTarget.classList.toggle(styles.active);
    }

    return (
        <div className={styles.block}>
            <h2 className={styles.ttl}>каталог</h2>
            <h2 className={`${styles.ttl} ${styles.ttlSecond}`}>букетов</h2>
            <p className={styles.paragraph}>
                В нашем магазине самый большой выбор букетов для любых событий:
            </p>
            <div className={styles.topics}>
                {buttons.map(string => {
                    return (
                        <button className={styles.topic} onClick={FindExaxts}>
                            {string}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default TypeOfFlower;