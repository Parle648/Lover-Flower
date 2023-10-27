import React from 'react';
import styles from './styles/sroductSnippet.module.scss';
import img from '../../img/second-product-img.png';
import { useDispatch } from 'react-redux';
import { countPlus, countMinus, removeProduct, } from '../../redux/slices/Busket.js';

type Product = {
    id: number,
    cost: number,
    count: number,
    ttl: string,
};

const ProductSnippet = ({cost, count, ttl, id}: Product) => {
    const dispatch = useDispatch();
    let [choosedCount, setChoosedCount] = React.useState(count);

    function updateState() {
        const result = JSON.parse(localStorage.BusketInform).filter((obj: Product) => {
            if (id !== obj.id) {
                return obj;
            }
        });

        localStorage.setItem('BusketInform', JSON.stringify(result));
        dispatch(removeProduct(id));
    };

    function chooseCount(event: React.MouseEvent<HTMLButtonElement>) {
        if (event.currentTarget.innerText === '+') {
            setChoosedCount(choosedCount += 1);
            dispatch(countPlus(id));
        } else if (choosedCount > 1) { 
            setChoosedCount(choosedCount -= 1);
            dispatch(countMinus(id));
        };

        const choosedLocal = JSON.parse(localStorage.BusketInform).map((elem: Product) => {
            if (elem.id === id) {
                elem.count = choosedCount;
            };
            return elem;
        });

        localStorage.setItem('BusketInform', JSON.stringify(choosedLocal));
    }
    
    return (
        <div className={styles.block}>
            <div className={styles.firstBlock}>
                <img className={styles.img} src={img} alt="" />
                <div>
                    <h2 className={styles.productTtl}>{ttl}</h2>
                    <div className={styles.counter}>
                        <button className={styles.minus} onClick={chooseCount}>–</button>
                        <div className={styles.count}>{count}</div>
                        <button className={styles.plus} onClick={chooseCount}>+</button>
                    </div>
                </div>
            </div>

            <div className={styles.costBlokc}>
                <h2 className={styles.cost}>{cost} ₽</h2>
                <h2 className={styles.remove} onClick={updateState}>Удалить</h2>
            </div>
        </div>
    );
};

export default ProductSnippet;