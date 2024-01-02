import React from 'react';
import styles from './styles/slider.module.scss';
import arrow from '../../img/sliderarrow.svg';
import arrowSecond from '../../img/sliderrightarrow.svg';
import img1 from '../../img/slider1.png';
import Cart from '../../entities/SliderCart/index';

const Slider = () => {
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
        <div>
            <div className={styles.prodPageBtns}>
                <img className={styles.prodPageSliderArrow} src={arrow} alt="" onClick={moveLeft}/>
                <img className={styles.prodPageSliderArrow} src={arrowSecond} alt="" onClick={moveRight}/>
            </div>
            <div className={styles.prodPageSlider}>
                <div className={styles.sliderLine} style={{marginLeft: `${margin}px`}}>
                    <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                    <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                    <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                    <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                    <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                    <Cart id={5} img={img1} ttl='лучший день' cost='167.000 ₽' />
                </div>
            </div>
        </div>
    );
};

export default Slider;