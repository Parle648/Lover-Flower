import React from 'react';

import styles from './styles/basket.module.scss';
import { useSelector } from 'react-redux';
import busketImg from '../../img/busket.svg';
import ProductSnippet from '../../entities/ProductSnippet/ProductSnippet';


type Product = {
    id: number,
    cost: number,
    ttl: string,
    count: number,
}


const Basket = () => {
    const [count, setCount] = React.useState(0);
    
    let [choosedProducts, setChoosedProducts] = React.useState(JSON.parse(localStorage.BusketInform))
    
    localStorage.onchange = () => console.log(8);
    
    React.useEffect(() => {
        window.addEventListener('storage', () => {
            console.log(0);
        });
    }, []);

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
                        {
                            choosedProducts.map((obj: Product) => {
                                return <ProductSnippet id={obj.id} ttl={obj.ttl} cost={obj.cost} count={obj.count} />
                            })
                        }
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