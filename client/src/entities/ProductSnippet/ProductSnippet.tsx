import React from 'react';
import styles from './styles/sroductSnippet.module.scss';

import img from '../../img/second-product-img.png';

type Product = {
    id: number,
    cost: number,
    count: number,
    ttl: string,
}

const ProductSnippet = ({cost, count, ttl, id}: Product) => {

    let [choosedCount, setChoosedCount] = React.useState(count);

    function removeProduct() {
        const result = JSON.parse(localStorage.BusketInform).filter((obj: Product) => {
            console.log(id, choosedCount, obj.id)
            if (id !== obj.id) {
                return obj
            }
        });

        localStorage.setItem('BusketInform', JSON.stringify(result))
    }

    function chooseCount(event: React.MouseEvent<HTMLButtonElement>) {
        if (event.currentTarget.innerText === '+') {
            setChoosedCount(choosedCount += 1);
        } else if (choosedCount > 1) (
            setChoosedCount(choosedCount -= 1)
        )

        const choosedLocal = JSON.parse(localStorage.BusketInform).map((elem: Product) => {
            if (elem.id === id) {
                elem.count = choosedCount;
            };

            return elem;
        })

        localStorage.setItem('BusketInform', JSON.stringify(choosedLocal))
    }
    
    return (
        <div className={styles.block}>
            <div className={styles.firstBlock}>
                <img className={styles.img} src={img} alt="" />
                <div>
                    <h2 className={styles.productTtl}>{ttl}</h2>
                    <div className={styles.counter}>
                        <button className={styles.minus} onClick={chooseCount}>–</button>
                        <div className={styles.count}>{choosedCount}</div>
                        <button className={styles.plus} onClick={chooseCount}>+</button>
                    </div>
                </div>
            </div>

            <div className={styles.costBlokc}>
                <h2 className={styles.cost}>{cost} ₽</h2>
                <h2 className={styles.remove} onClick={removeProduct}>Удалить</h2>
            </div>
        </div>
    );
};

export default ProductSnippet;