import React from 'react';
import styles from './styles/FlowerType.module.scss';
import getProducts from './api/getRequest.ts';

const TypeOfFlower = () => {
    function findExaxt() {
        console.log(getProducts());
    }
    return (
        <div className={styles.block}>
            <h2 className={styles.ttl}>каталог</h2>
            <h2 className={`${styles.ttl} ${styles.ttlSecond}`}>букетов</h2>
            <p className={styles.paragraph}>
                В нашем магазине самый большой выбор букетов для любых событий:
            </p>

            <div className={styles.topics}>
                <div className={styles.topic} onClick={findExaxt}>
                    Букеты из гипсофил
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Букеты из ромашек
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Букеты из хризантем
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Комнатные цветы в горшках
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Монобукеты
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Сборные букеты
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Букет на праздник
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Композиции из цветов
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Конверты
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Открытки
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Подарки
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Букеты из сухоцветов
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Шары
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Популярное
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Букеты роз
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Цветы на похороны
                </div>
                <div className={styles.topic} onClick={findExaxt}>
                    Упаковка подарков
                </div>
            </div>
        </div>
    );
};

export default TypeOfFlower;