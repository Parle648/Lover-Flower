import React from 'react';
import ProductSnippet from '../../entities/ProductSnippet/ProductSnippet';
import styles from './styles/basket.module.scss';
import busketImg from '../../img/busket.svg';
import close from '../../img/busket-close.png';
import { useSelector, useDispatch } from 'react-redux';
import { updateStore } from '../../redux/slices/Busket.js';

type Product = {
    id: number,
    cost: number,
    ttl: string,
    count: number,
};

const Basket = () => {
    const dispatch = useDispatch();
    
    let addedPeoducts = useSelector((state: any) => state.basket.value);
    const productCount = addedPeoducts.reduce((amount: number, obj: Product) => {return amount + obj.count}, 0);
    const productAmount = addedPeoducts.reduce((amount: number, obj: Product) => {return amount + (obj.count * obj.cost)}, 0);

    // updating the store after a reload
    React.useEffect(() => {
        dispatch(updateStore(JSON.parse(localStorage.BusketInform)));
        addedPeoducts = JSON.parse(localStorage.BusketInform);
    }, []);

    // toggle busket block
    const [busketOpened, setBusketOpened] = React.useState(false);

    function toggleBusket() {
        setBusketOpened(!busketOpened);
    };
    
    return (
        <div className={styles.block}>
            <div className={styles.container} onClick={toggleBusket}>
                <img src={busketImg} alt="busketImg" />
                <div className={`${styles.counter} ${productCount < 1 && styles.unvisible}`}>{productCount}</div>
            </div>
            <div className={`${styles.busketAside} ${busketOpened && styles.busketOpened}`} >
                <div>
                    <h2 className={styles.asideTtl}>Ваша корзина <img className={styles.closeBtn} src={close} alt="close" onClick={toggleBusket}/></h2>
                    <div className={busketOpened && styles.blackBackround}></div>
                    <div className={styles.products}>
                        {addedPeoducts.map((obj: Product) => {
                            return <ProductSnippet id={obj.id} ttl={obj.ttl} cost={obj.cost} count={obj.count} />
                        })}
                    </div>
                </div>
                <div>
                    <p className={styles.asideParagraph}>
                        <span className={styles.green}>Предварительный итог: {productAmount} руб.</span> <br />
                        Чтобы узнать стоимость доставки, перейдите к оформлению заказа.
                    </p>
                    <a href="/order"><button className={styles.btn}>Оформить заказ</button></a>
                </div>
            </div>
        </div>
    );
};

export default Basket;