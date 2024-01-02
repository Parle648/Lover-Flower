import TopHeader from '../../widgets/TopHeader/TopHeader.tsx';
import Footer from '../../widgets/Footer/index.tsx';
import styles from './styles/corporativClients.module.scss';
import CorporativeClientsMain from '../../widgets/CorporativeClientsMain/CorporativeClientsMain';

const CorporativeClients = () => {
    return (
        <div className={styles.block}>
            <TopHeader />
            <CorporativeClientsMain />
            <Footer />
        </div>
    );
};

export default CorporativeClients;