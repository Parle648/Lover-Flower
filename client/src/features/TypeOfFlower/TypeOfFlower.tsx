import React from 'react';
import styles from './styles/FlowerType.module.scss';
import getProducts from './api/getRequest.ts';

import { pushType, popType } from '../../redux/slices/ProductTypes';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../redux/slices/Products';
import getCurrentProducts from './api/getRequest.ts';

const TypeOfFlower = () => {
    const dispatch = useDispatch();
    const buttons: string[] = [
        'Букеты из гипсофил', 'Букеты из ромашек', 'Букеты из хризантем','Комнатные цветы в горшках','Монобукеты','Сборные букеты','Букет на праздник',
        'Композиции из цветов','Конверты','Открытки','Подарки','Букеты из сухоцветов','Шары','Популярное','Букеты роз','Цветы на похороны','Упаковка подарков',
    ];

    const types = useSelector((state: any) => state.prodTypes);
    const sortBy = useSelector((state: any) => state.sortby);
    const props = useSelector((state: any) => state.Params);

    React.useEffect(() => {
        const obj = { types, sortBy, props };

        console.log(types);
        

        try {
            getCurrentProducts(obj)
            .then((res: any) => {
                console.log(new Set(res))
                dispatch(update(res));
            })
        } catch (err) {
            console.error(err)
        }
    }, [types])
    
    function FindExaxts(event: React.MouseEvent<HTMLButtonElement>) {
        event?.currentTarget.classList.toggle(styles.active);
        const type = event?.currentTarget.innerText;
        
        // console.log(types ,
        //     sortBy,
        //     props 
        // );

        
        // const obj = { types: {
        //     value: types.value.concat(type),
        // }, sortBy, props };
       
        if (event?.currentTarget.classList.contains(`${styles.active}`)) {
            dispatch(pushType(type))
        } else {
            dispatch(popType(type))
        }


        // try {
        //     getCurrentProducts(obj)
        //     .then((res: any) => {
        //         console.log(new Set(res))
        //         dispatch(update(res));
        //     })
        // } catch (err) {
        //     console.error(err)
        // }
    }

    return (
        <div className={styles.block}>
            <h2 className={styles.ttl}>каталог</h2>
            <h2 className={`${styles.ttl} ${styles.ttlSecond}`}>букетов</h2>
            <p className={styles.paragraph}>
                В нашем магазине самый большой выбор букетов для любых событий:
            </p>
            <div className={styles.topics}>
                {buttons.map(string => {
                    return (
                        <button className={styles.topic} onClick={FindExaxts}>
                            {string}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default TypeOfFlower;