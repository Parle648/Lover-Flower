import styles from './styles/basket.module.scss';
import { useSelector } from 'react-redux';
import busketImg from '../../img/busket.svg';

const Basket = () => {
    const {value: count} = useSelector((state: any) => state.basket)

    return (
        <div className={styles.container}>
            <img src={busketImg} alt="busketImg" />
            <div className={`${styles.counter} ${count < 1 && styles.unvisible}`}>{count}</div>
        </div>
    );
};

export default Basket;