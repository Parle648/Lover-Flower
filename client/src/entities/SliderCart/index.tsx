import React from 'react';
import styles from './styles/slidercart.module.scss';

type CartType = {
    id: number,
    img: string,
    ttl: string,
    cost: string,
}

const Index = ({id, img, ttl, cost}: CartType) => {

    const [disabled, setDisabled] = React.useState(false)

    // window.addEventListener('storage', () => {
    //     console.log(0);
    // });

    function updateStore(event: React.MouseEvent<HTMLButtonElement>) {
        const productData = {
            id, 
            cost, 
            ttl,
            count: 1
        }

        if (!event.currentTarget.classList.contains('btnDisabled')) {
            event.currentTarget.classList.add('btnDisabled')

            localStorage.BusketInform = JSON.stringify(JSON.parse(localStorage.BusketInform).concat(productData));
        }

    }

    return (
        <div className={styles.block} id={`${id}`}>
            <img className={styles.img} src={img} alt="img" />
            <h2 className={styles.ttl}>{ttl}</h2>
            <h2 className={styles.cost}>{cost}</h2>
            <button className={`whiteBtn ${disabled ? 'btnDisabled' : ''}`} onClick={updateStore}>В корзину</button>
        </div>
    );
};

export default Index;