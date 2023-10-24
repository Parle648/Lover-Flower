import React from 'react';
// Elements
import styles from './styles/ProdList.module.scss';
import SliderCart from '../../entities/SliderCart/index.tsx';
import background from '../../img/product-img.png';
// Hooks, Functions
import { getAllProducts } from './api/api.ts'; 
import { useSelector } from 'react-redux';

type CartType = {
    id: number,
    img: string,
    title: string,
    cost: string,
};

type State = {
    products: {
        value: [],
    }
};

const ProductsList = () => {
    let choosedTypes = useSelector((state: State) => state.products.value);
    const [allProducts, setAllProducts] = React.useState<CartType[]>([]);

    React.useEffect(() => {
        try {
            getAllProducts().then((res: any) => {
                setAllProducts(res);
            })
        } catch (error) {
            console.error(error);
        }
    }, [])

    return (
        <div className={styles.block}>
            { choosedTypes.length !== 0 
                ? choosedTypes.map((product: CartType) => {
                return (
                    <SliderCart id={product.id} img={background} ttl={product.title} cost={product.cost}/>
                    )
                }) 

                : allProducts.map((elem) => {
                    return (
                        <SliderCart id={elem.id} img={background} ttl={elem.title} cost={elem.cost}/>
                    )
                }) 
            }
        </div>
    );
};

export default ProductsList;