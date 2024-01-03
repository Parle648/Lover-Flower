import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../img/hero-section.png';
import backgroundMobile from '../../img/heromobile.png';
import styles from './styles/hero.module.scss';
import '../../Scss/styles.scss';
import TopHeader from '../TopHeader/TopHeader.tsx';
import Header from '../Header/index.tsx';
 
const HeroSection = () => {
    const [scroll, setScroll] = React.useState(false);

    document.addEventListener('scroll', () => {
        window.scrollY <= 500 ? setScroll(false) : setScroll(true);
    });
    
    return (
        <div className={styles.heroSection}>
            <img className={styles.background} src={document.body.clientWidth > 800 ? background : backgroundMobile} alt="background" />
            <Header />
            <TopHeader />
            {(scroll && document.body.clientWidth > 800) && <TopHeader visible='true' />}
            <h2 className={`${styles.btnTtl} Oswald400`}>Создаём для тех, кто ценит свежесть и изящество цветка</h2>
            <Link to='/catalog'><button className={`${styles.btn} greenBtn`}>смотреть каталог</button></Link>
        </div>
    );
};

export default HeroSection;