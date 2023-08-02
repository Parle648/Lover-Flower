import React from 'react';
import styles from './styles/slidercart.module.scss';

type CartType = {
    img: string,
    ttl: string,
    cost: string,
}

const index = ({img, ttl, cost}: CartType) => {
    return (
        <div className={styles.block}>
            <img className={styles.img} src={img} alt="img" />
            <h2 className={styles.ttl}>{ttl}</h2>
            <h2 className={styles.cost}>{cost}</h2>
            <button className='whiteBtn'>В корзину</button>
        </div>
    );
};

export default index;