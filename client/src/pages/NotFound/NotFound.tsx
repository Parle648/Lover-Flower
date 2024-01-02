import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';
import notFound from '../../img/not-found-background.png';
import notFoundMobile from '../../img/not-found-mobile.png';
import styles from './styles/notFound.module.scss';

const NotFound = () => {
    return (
        <div>
            <TopHeader />
            {document.body.clientWidth > 800 && <img className={styles.img} src={notFound} alt="notFound" />}
            {document.body.clientWidth < 800 && <img className={styles.img} src={notFoundMobile} alt="notFound" />}
            {document.body.clientWidth > 800 && <Footer />}
        </div>
    );
};

export default NotFound;