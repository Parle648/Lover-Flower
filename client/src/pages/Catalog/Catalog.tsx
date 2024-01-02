import Footer from '../../widgets/Footer/index.tsx';
import CatalogHero from '../../widgets/CatalogHeroSection/CatalogHero';
import CallOrder from '../../features/OrderCall';

const Catalog = () => {
    return (
        <div className='Catalog'>
            <CatalogHero />
            <CallOrder />
            <Footer />
        </div>
    );
};

export default Catalog;