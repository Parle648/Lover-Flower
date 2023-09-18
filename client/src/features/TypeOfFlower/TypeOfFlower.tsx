import React from 'react';
import styles from './styles/FlowerType.module.scss';

const TypeOfFlower = () => {
    return (
        <div className={styles.block}>
            <h2 className={styles.ttl}>каталог</h2>
            <h2 className={`${styles.ttl} ${styles.ttlSecond}`}>букетов</h2>
            <p className={styles.paragraph}>
                В нашем магазине самый большой выбор букетов для любых событий:
            </p>

            <div className={styles.topics}>
                <div className={styles.topic}>
                    Букеты из гипсофил
                </div>
                <div className={styles.topic}>
                    Букеты из ромашек
                </div>
                <div className={styles.topic}>
                    Букеты из хризантем
                </div>
                <div className={styles.topic}>
                    Комнатные цветы в горшках
                </div>
                <div className={styles.topic}>
                    Монобукеты
                </div>
                <div className={styles.topic}>
                    Сборные букеты
                </div>
                <div className={styles.topic}>
                    Букет на праздник
                </div>
                <div className={styles.topic}>
                    Композиции из цветов
                </div>
                <div className={styles.topic}>
                    Конверты
                </div>
                <div className={styles.topic}>
                    Открытки
                </div>
                <div className={styles.topic}>
                    Подарки
                </div>
                <div className={styles.topic}>
                    Букеты из сухоцветов
                </div>
                <div className={styles.topic}>
                    Шары
                </div>
                <div className={styles.topic}>
                    Популярное
                </div>
                <div className={styles.topic}>
                    Букеты роз
                </div>
                <div className={styles.topic}>
                    Цветы на похороны
                </div>
                <div className={styles.topic}>
                    Упаковка подарков
                </div>
            </div>
        </div>
    );
};

export default TypeOfFlower;