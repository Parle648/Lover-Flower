import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';
import styles from './styles/FAQ.module.scss';
import background from '../../img/faq-background.png';
import FAQBlock from '../../widgets/FAQBlock/FAQBlock';

const FAQPage = () => {
    return (
        <div className={styles.block}>
            <TopHeader />
            <img className={styles.background} src={background} alt="" />

            <div className={styles.wrapper}>
                <span className={styles.navLink}><a href='/'>Главная </a> / <a href='/questions'>faq</a></span>
                <h2 className={styles.ttl}>faq</h2>

                <FAQBlock />
            </div>

            <Footer />
        </div>
    );
};

export default FAQPage;