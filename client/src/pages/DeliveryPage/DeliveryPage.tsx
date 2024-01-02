import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';
import styles from './styles/delivery.module.scss';
import DeliveryMain from '../../widgets/DeliveryPageMain/DeliveryMain';

const DeliveryPage = () => {
    return (
        <div className={styles.block}>
            <TopHeader/>
            <DeliveryMain />
            {document.body.clientWidth > 800 && <Footer />}
        </div>
    );
};

export default DeliveryPage;