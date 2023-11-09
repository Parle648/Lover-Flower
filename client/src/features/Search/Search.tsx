import React from 'react';
import styles from './style/Search.module.scss';
import search from '../../img/search.svg';
import SliderCart from '../../entities/SliderCart/index.tsx';
import img from '../../img/product-img.png';

const Search = () => {
    const [disabled, setDisabled] = React.useState(false);
    const [value, setValue] = React.useState('');
    const [products, setproducts] = React.useState([]);

    function openSearch(event: React.MouseEvent<HTMLElement>) {
        setDisabled(true);
        document.body.style.overflow = 'hidden';
    };
    
    function closeSearch(event: any) {
        event.preventDefault();
        setDisabled(false);
        setValue('');
        setproducts([]);
        document.body.style.overflow = '';
    };

    function inputString(event: any) {
        setValue(event.target.value);
    };

    function searchByString(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
        const string = value.toUpperCase().replaceAll(' ', '%20');

        try {
            fetch(`http://localhost:5000/api/products/:${string}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response: any) => response.json())
            .then((result: any) => setproducts(result))
        } catch (err) {
            console.error(err)
        };
    };

    return (
        <div className={styles.search}>
            <label className={`${styles.block} ${disabled && styles.blockActive}`}>
                <img src={search} alt="search" onClick={searchByString}/>
                <input className={styles.text} type="text" placeholder='ПОИСК' value={value} onClick={openSearch} onInput={inputString}/>
                <div className={`${styles.close} ${disabled && styles.closeActive}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" onClick={closeSearch}>
                        <path d="M13.4294 4.06152L13.9385 4.57056L4.57056 13.9378L4.06152 13.4291L13.4294 4.06152Z" fill="#7C7C7C"/>
                        <path d="M4.57056 4.06152L13.9385 13.4287L13.4294 13.9381L4.06152 4.57092L4.57056 4.06152Z" fill="#7C7C7C"/>
                    </svg>
                </div>
            </label>

            <div className={`${styles.ressultContainer} ${disabled && styles.ressultContainerActive}`}>
                    <h2 className={styles.serchTtl}>Результат поиска: розы</h2>
                    {products.length !== 0 ? 
                    <div className={styles.productWrapper}>
                        {products.map((obj: any) => {
                            return <SliderCart id={obj.id} img={img} ttl={obj.title} cost={obj.cost}/>
                        }) }
                    </div> :
                    <div className={styles.notFoundBlock}>
                        <p className={styles.notFound}>
                            По данному запросу ничего не найдено. <br />
                            Попробуйте еще раз или перейдите в каталог
                        </p>
                        <button className='greenBtn'>в каталог</button>
                    </div>
                    }
                </div>
        </div>
    );
};

export default Search;