import React from 'react';
import styles from './style/catalog.module.scss';
import backgr from '../../img/catalog-hero-background.png';
import backgrModile from '../../img/catalog-background-modile.png';
import TopHeader from '../TopHeader/TopHeader';
import Header from '../../widgets/Header/index.tsx';
import CatalogRange from '../CatalogRange/CatalogRange';

const CatalogHero = () => {
    const [scroll, setScroll] = React.useState(0);

    document.addEventListener('scroll', () => {
        setScroll(window.scrollY);
    });

    React.useEffect(() => {
        document.querySelectorAll(`.${styles.toggleFilter}`).forEach((item: any) => {
            item?.currentTarget.nextElementSibling?.classList.toggle(styles.filterOpened);
        });
    }, []);

    return (
        <div className={styles.block}>
            <img className={styles.background} src={document.body.clientWidth >= 800 ? backgr : backgrModile} alt="asdas" />
            {document.body.clientWidth > 800 ? <Header /> : <TopHeader />}
            {scroll > 500 && <TopHeader />}
            <CatalogRange />
        </div>
    );
};

export default CatalogHero;