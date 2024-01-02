import { useParams } from 'react-router-dom';
import styles from './styles/prodPage.module.scss';
import TopHeader from '../../widgets/TopHeader/TopHeader.tsx';
import Footer from '../../widgets/Footer/index.tsx';
import background from '../../img/product-page-background.png';
import ProductAbout from '../../widgets/ProductAbout/ProductAbout';
import ProductSwitch from '../../widgets/ProductSwitchOptions/ProductSwitch';
import Slider from '../../features/Slider/Slider';
import AditionalToOrder from '../../widgets/AdditionalToOrder/AditionalToOrder';

const ProductPage = () => {
    const {id} = useParams();

    return (
        <div className={styles.page}>
            <img className={styles.background} src={background} alt="background" />
            <TopHeader />
            <ProductAbout id={`${id}`} />
            <AditionalToOrder />
            <ProductSwitch id={`${id}`} />
            <Slider />
            <Footer />
        </div>
    );
};

export default ProductPage;