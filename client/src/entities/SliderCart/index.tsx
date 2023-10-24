import React from 'react';
import styles from './styles/slidercart.module.scss';

import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/slices/Busket';

type CartType = {
    id: number,
    img: string,
    ttl: string,
    cost: string,
}

const Index = ({id, img, ttl, cost}: CartType) => {
    const dispatch = useDispatch();

    function updateStore(event: React.MouseEvent<HTMLButtonElement>) {
        const el = {
            id: 5, 
            cost: 160, 
            count: 1
        }
        dispatch(addProduct(el))
    }

    return (
        <div className={styles.block} id={`${id}`}>
            <img className={styles.img} src={img} alt="img" />
            <h2 className={styles.ttl}>{ttl}</h2>
            <h2 className={styles.cost}>{cost}</h2>
            <button className='whiteBtn' onClick={updateStore}>В корзину</button>
        </div>
    );
};

export default Index;