import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../../redux/slices/Busket.js';
import store from '../../redux/store';
import styles from './styles/slidercart.module.scss';

type CartType = {
    id: number,
    img: string,
    ttl: string,
    cost: string,
}

const Index = ({id, img, ttl, cost}: CartType) => {
    const dispatch = useDispatch();

    function updateStore(event: React.MouseEvent<HTMLButtonElement>) {
        const productInformData = { id, cost, ttl, count: 1 }

        if (!event.currentTarget.classList.contains('btnDisabled')) {
            event.currentTarget.classList.add('btnDisabled')

            localStorage.BusketInform = JSON.stringify(JSON.parse(localStorage.BusketInform).concat(productInformData));
            dispatch(addProduct(productInformData));
        }
    }

    const [disabled, setDisabled] = React.useState(false)

    store.subscribe(() => {
        if (store.getState().basket.value.some((obj: any) => obj.id === id)) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    })

    React.useEffect(() => {
        if (JSON.parse(localStorage.BusketInform).some((obj: any) => obj.id === id)) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
        window.addEventListener('storage', () => {
        })
    }, [])

    return (
        <div className={styles.block} id={`${id}`}>
            <a href={`/catalog/:${id}`}>
                <img className={styles.img} src={img} alt="img" />
                <h2 className={styles.ttl}>{ttl}</h2>
                <h2 className={styles.cost}>{cost}</h2>
            </a>    
            <button className={`whiteBtn ${disabled && 'btnDisabled'}`} onClick={updateStore}>В корзину</button>
        </div>
    );
};

export default Index;