import React from 'react';
import { useSelector } from 'react-redux';

import styles from './styles/ProdList.module.scss';

import SliderCart from '../../entities/SliderCart/index.tsx';

import l from '../../img/inst1.png'

import { getAllProducts } from './api/api.ts'; 
import { update } from '../../redux/slices/Products';
import { useDispatch } from 'react-redux';

type CartType = {
    img: string,
    title: string,
    cost: string,
}

const ProductsList = () => {
    let prodList = useSelector((state: any) => state.products.value.payload)
    const dispatch = useDispatch();

    console.log(prodList);
    

    if (prodList === undefined) {
        const promise = getAllProducts();
        promise.then((res: {}) => dispatch(update(res)))
    }

    return (
        <div className={styles.block}>
            {prodList && prodList.map((product: CartType) => {
                return (
                    <SliderCart img={l} ttl={product.title} cost={product.cost}/>
                )
            })}
        </div>
    );
};

export default ProductsList;