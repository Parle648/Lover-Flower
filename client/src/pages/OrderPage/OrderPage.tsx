import styles from './styles/orderPage.module.scss';
import background from '../../img/order-page-background.png';
import backgroundMobile from '../../img/order-mobile.png';
import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';
import OrderForm from '../../features/OrderForm/OrderForm';
import OrderedProducts from '../../widgets/OrderedProducts/OrderedProducts';

const OrderPage = () => {
    return (
        <div className={styles.block}>
            <TopHeader />
            <img className={styles.background} src={document.body.clientWidth > 800 ? background : backgroundMobile} alt="" />

            <div className={styles.wrapper}>
                <div>
                    <span className={styles.navLink}><a href='/'>Главная </a> / <a href='/order'>оформление заказа</a></span>
                    <h2 className={styles.ttl}>оформление</h2>
                    <h2 className={styles.secondTtl}>заказа</h2>

                    <h2 className={styles.orderTtl}>Оформление заказа</h2>
                    <h2 className={styles.orderSubttl}>Контактные данные</h2>

                    <OrderForm />
                </div>
                <OrderedProducts />
            </div>


            <Footer />
        </div>
    );
};

export default OrderPage;