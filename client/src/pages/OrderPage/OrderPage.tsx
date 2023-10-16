import React from 'react';

import styles from './styles/orderPage.module.scss';

import background from '../../img/order-page-background.png';
import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';

const OrderPage = () => {
    return (
        <div className={styles.block}>
            <TopHeader />
            <img className={styles.background} src={background} alt="" />

            <div className="wrapper">
                <h2 className={styles.ttl}>оформление</h2>
                <h2 className={styles.secondTtl}>заказа</h2>

                <h2 className={styles.orderTtl}>Оформление заказа</h2>
                <h2 className={styles.orderSubttl}>Контактные данные</h2>


                <form>
                    <h2 className={styles.inputTtl}>Ваше имя*</h2>
                    <input className={styles.input} type="text" placeholder='Введите ваше имя'/>
                    <h2 className={styles.inputTtl}>Ваш телефон*</h2>
                    <input className={styles.input} type="text" placeholder='+7 (977) 777-77-77'/>
                    <h2 className={styles.inputTtl}>Ваш e-mail*</h2>
                    <input className={styles.input} type="text" placeholder='Введите вашу почту'/>
                    <h2 className={styles.inputTtl}>Телефон получателя (необязательно)</h2>
                    <input className={styles.input} type="text" placeholder='+7 (977) 777-77-77'/>
                    <h2 className={styles.inputTtl}>Имя получателя (необязательно)</h2>
                    <input className={styles.input} type="text" placeholder='Введите имя получателя'/>
                    <h2 className={styles.inputTtl}>Комментарий к заказу</h2>
                    <input className={styles.input} type="text" placeholder='Примечания к вашеу заказу,  особые пожелания отделу доставки'/>

                    <h2 className={styles.orderSubttl}>Доставка</h2>
                </form>
            </div>


            <Footer />
        </div>
    );
};

export default OrderPage;