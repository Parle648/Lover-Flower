import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStore } from '../../redux/slices/Busket';
import ProductSnippet from '../../entities/ProductSnippet/ProductSnippet';
import styles from './styles/orderedProducts.module.scss';

const OrderedProducts = () => {
    const dispatch = useDispatch();

    const products = useSelector((state: any) => state.basket.value);
    const amount = products.reduce((sum: number, obj: any) => sum + obj.cost * obj.count, 0)

    React.useEffect(() => {
        dispatch(updateStore(JSON.parse(localStorage.BusketInform)));
    }, [])
    
    return (
        <div className={styles.products}>
            <h2 className={styles.orderSubttl}>Ваш заказ:</h2>
            {products.map((product: any) => {
                return (
                    <ProductSnippet id={product.id} cost={product.cost} count={product.count} ttl={product.ttl}/>
                );
            })}
            <h2 className={styles.orderSubttl}>Предварительный итог: {amount} руб.</h2>
        </div>
    );
};

export default OrderedProducts;