import React from 'react';
import styles from './styles/FlowerType.module.scss';
import getProducts from './api/getRequest.ts';

import { update } from '../../redux/slices/Products';
import { useDispatch } from 'react-redux';

const TypeOfFlower = () => {

    const dispatch = useDispatch();

    function FindExaxts(event: any) {
        const string = event?.target.innerText;
        const promise = getProducts(string);
        promise.then((res: Promise<[]>) => dispatch(update(res)))
    }

    return (
        <div className={styles.block}>
            <h2 className={styles.ttl}>каталог</h2>
            <h2 className={`${styles.ttl} ${styles.ttlSecond}`}>букетов</h2>
            <p className={styles.paragraph}>
                В нашем магазине самый большой выбор букетов для любых событий:
            </p>

            <div className={styles.topics}>
                <button className={styles.topic} onClick={FindExaxts}>
                    Букеты из гипсофил
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Букеты из ромашек
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Букеты из хризантем
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Комнатные цветы в горшках
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Монобукеты
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Сборные букеты
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Букет на праздник
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Композиции из цветов
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Конверты
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Открытки
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Подарки
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Букеты из сухоцветов
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Шары
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Популярное
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Букеты роз
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Цветы на похороны
                </button>
                <button className={styles.topic} onClick={FindExaxts}>
                    Упаковка подарков
                </button>
            </div>
        </div>
    );
};

export default TypeOfFlower;