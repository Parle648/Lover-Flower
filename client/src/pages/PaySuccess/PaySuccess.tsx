import React from 'react';
import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';

import background from '../../img/pay-success-background.png';
import backgroundMobile from '../../img/payment-success-mobile.png';

import styles from './styles/paySuccess.module.scss';

const PaySuccess = () => {
    return (
        <div className={styles.block}>
            <TopHeader/>
            <img className={styles.background} src={document.body.clientWidth > 800 ? background : backgroundMobile} alt="" />
            <div className={`${styles.wrapper} wrapper`}>
                <h2 className={styles.ttl}>Оплата прошла</h2>
                <h2 className={styles.secondTtl}>успешно!</h2>
                <p className={styles.paragraph}>
                    Ваш номер заказа – 395808599
                </p>
                <p className={styles.paragraph}>
                    Спасибо за заказ! <br />
                    Вы получите уведомление о статусе вашего заказа
                </p>

                <a className={styles.toMain} href="/">на главную</a>
            </div>
            {document.body.clientWidth > 800 && <Footer />}
        </div>
    );
};

export default PaySuccess;