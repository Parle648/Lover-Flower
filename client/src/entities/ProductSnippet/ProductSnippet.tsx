import React from 'react';
import styles from './styles/sroductSnippet.module.scss';

import img from '../../img/second-product-img.png';

const ProductSnippet = () => {
    return (
        <div className={styles.block}>
            <div className={styles.firstBlock}>
                <img className={styles.img} src={img} alt="" />
                <div>
                    <h2 className={styles.productTtl}>рубиновые искры</h2>
                    <div className={styles.counter}>
                        <button className={styles.minus}>–</button>
                        <div className={styles.count}>1</div>
                        <button className={styles.plus}>+</button>
                    </div>
                </div>
            </div>

            <div className={styles.costBlokc}>
                <h2 className={styles.cost}>167.00 ₽</h2>
                <h2 className={styles.remove}>Удалить</h2>
            </div>
        </div>
    );
};

export default ProductSnippet;