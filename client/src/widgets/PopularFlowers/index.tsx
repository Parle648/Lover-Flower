import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../img/popularbackground.png';
import styles from './styles/Popular.module.scss';
import Cart from '../../entities/SliderCart/index';

import arrow from '../../img/sliderarrow.svg';
import arrowSecond from '../../img/sliderrightarrow.svg';
import img1 from '../../img/slider1.png';

const Index = () => {
    let [margin, setMargin] = React.useState(0);

    const moveRight = () => {
        if (margin > -1100) {
            setMargin(margin -= 380)
        } else {
            setMargin(0)
        }
    }
    
    const moveLeft = () => {
        if (margin >= 0) {
            setMargin(-1140)
        } else {
            setMargin(margin += 380)
        }
    }

    return (
        <div className={styles.block}>
            <img className={styles.background} src={background} alt="background" />
            <div className={styles.wrapper}>
                <h2 className={`${styles.ttl}`}>популярные</h2>
                <h2 className={`${styles.ttl} ${styles.secondTtl}`}>букеты</h2>
                <h2 className={styles.subttl}>Самые любимые композиции наших клиентов</h2>
                <div className={styles.slider}>
                    <div className={styles.btns}>
                        <img className={styles.sliderArrow} src={arrow} alt="" onClick={moveLeft}/>
                        <img className={styles.sliderArrow} src={arrowSecond} alt="" onClick={moveRight}/>
                    </div>
                    <div className={styles.sliderLine} style={{marginLeft: `${margin}px`}}>
                        <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                        <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                        <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                        <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                        <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                        <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                    </div>
                </div>
                <Link className={styles.link} to='/catalog'>смотреть весь каталог
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                        <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="#D978AC"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Index;