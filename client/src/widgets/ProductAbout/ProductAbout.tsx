import React from 'react';
import styles from './styles/productAbout.module.scss';
import main from '../../img/main-product-img.png';
import first from '../../img/first-product-img.png';
import second from '../../img/second-product-img.png';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/slices/Busket';
import { useSelector } from 'react-redux';

type Product = {
    id: string;
    cost: number;
    title: string;
    imgs: string[];
    colors: string[];
    light: string;
    format: string;
    flowers: string[];
    description: string;
    categories: string[];
    topics: string[];
    createdAt: string;
    updatedAt: string;
};

const ProductAbout = ({id}: {id: string}) => {
    const dispatch = useDispatch();
    const [data, setData] = React.useState<Product>();
    const [disabled, setDisabled] = React.useState(false);
    let [count, setCount] = React.useState(1);
    const basket = useSelector((state: any) => state.basket.value)

    React.useEffect(() => {
        fetch(`http://localhost:5000/api/products/getproduct/${id}`).then((res: any) => res.json())
        .then((res: any) => setData(res))
        .then((res: any) => {
            console.log(Number(id.slice(1)));
            
            if (JSON.parse(localStorage.BusketInform).some((obj: any) => obj.id === Number(id.slice(1)))) {
                setDisabled(true)
            } else {
                setDisabled(false)
            }
            console.log(disabled);
        })
    }, []);

    // React.useEffect(() => {
    //     if (JSON.parse(localStorage.BusketInform).some((obj: any) => obj.id === Number(data?.id?.slice(1)))) {
    //         setDisabled(true)
    //     }
    // }, []);
    
    function addToBusket(event: React.MouseEvent<HTMLButtonElement>) {
        const productInformData = { id: data?.id, cost: data?.cost, ttl: data?.title, count }

        if (!event.currentTarget.classList.contains('btnDisabled')) {
            event.currentTarget.classList.add('btnDisabled')

            localStorage.BusketInform = JSON.stringify(JSON.parse(localStorage.BusketInform).concat(productInformData));
            dispatch(addProduct(productInformData));
        }
    };

    function chooseCount(event: React.MouseEvent<HTMLButtonElement>) {
        if (event.currentTarget.innerText === '+') {
            setCount(count += 1);
        } else if (count > 1) { 
            setCount(count -= 1);
        };
    };
    return (
        <div className={styles.productAbout}>
            <div className={styles.galary}>
                <img src={first} alt="galary" />
                <img src={main} alt="galary" />
                <img src={second} alt="galary" />
            </div>
            <div className={styles.description}>
                <a className={styles.goBack} href="/catalog">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10.2713 12.1045L6.5 8.33316L10.2713 4.56183L10.7427 5.03316L7.44267 8.33316L10.7427 11.6332L10.2713 12.1045Z" fill="white"/>
                    </svg>
                    назад
                </a>
                <h2 className={styles.descriptionTtl}>{data?.title}</h2>
                <h2 className={styles.cost}>{data?.cost} p</h2>
                <p className={styles.structure}>
                    <strong>Состав:</strong> Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза
                </p>
                <p className={styles.productDescription}>
                    Завораживающая глубина ваших чувств передана огненными красками этого букета
                </p>
                <p className={styles.category}>
                    <strong>Категории:</strong>  8 марта, Букет на 14 февраля, Букет на праздник, Букеты цветов на День рождения, Композиции из цветов, Композиции из цветов в коробке
                </p>
                <p className={styles.types}>
                    <strong>Метки:</strong> Для начальника, Мужские букеты
                </p>

                <div className={styles.buyInterface}>
                    <button className={`whiteBtn ${disabled && 'btnDisabled'}`} onClick={addToBusket}>В корзину</button>

                    <div className={styles.counter}>
                        <button className={styles.minus} onClick={chooseCount}>–</button>
                        <div className={styles.count}>{count}</div>
                        <button className={styles.plus} onClick={chooseCount}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductAbout;