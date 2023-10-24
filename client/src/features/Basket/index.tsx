import React from 'react';

import styles from './styles/basket.module.scss';
import { useSelector } from 'react-redux';
import busketImg from '../../img/busket.svg';
import ProductSnippet from '../../entities/ProductSnippet/ProductSnippet';

const Basket = () => {
    // const {value: count} = useSelector((state: any) => state.basket)
    const count = 0;

    const [scroll, setScroll] = React.useState(0)
    document.addEventListener('scroll', () => {
        setScroll(window.pageYOffset)
    })

    return (
        <div className={styles.block}>
            <div className={styles.container}>
                <img src={busketImg} alt="busketImg" />
                <div className={`${styles.counter} ${count < 1 && styles.unvisible}`}>{count}</div>
            </div>
            <div className={styles.busketAside} style={{top: `${scroll}px`}}>
                <div className="">
                    <h2 className={styles.asideTtl}>Ваша корзина</h2>
                    <ProductSnippet />
                    <ProductSnippet />
                    <ProductSnippet />
                </div>
                <div className="">
                    <p className={styles.asideParagraph}>
                        <span className={styles.green}>Предварительный итог: 315.00 руб.</span> <br />
                        Чтобы узнать стоимость доставки, перейдите к оформлению заказа.
                    </p>
                    <button className={styles.btn}>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
};

export default Basket;