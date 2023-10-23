import React from 'react';

import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';

import styles from './styles/payWrong.module.scss';

import background from '../../img/pay-wrong-background.png';
import backgroundMobile from '../../img/pay-wrong-mobile.png';

const PayWrong = () => {
    return (
        <div className={styles.block}>
            <TopHeader/>
            <img className={styles.background} src={document.body.clientWidth > 800 ? background : backgroundMobile} alt="" />
            <div className={`${styles.wrapper} wrapper`}>
                <h2 className={styles.ttl}>Ошибка</h2>
                <h2 className={styles.secondTtl}>платежа</h2>
                <p className={styles.paragraph}>
                    Произошла ошибка....
                </p>
                <p className={styles.paragraph}>
                    Попробуйте оплатить еще раз!
                </p>

                <button className='greenBtn'>Оплатить еще раз</button>
                <a className={styles.toMain} href="/">Вернуться на главную</a>
            </div>
            {document.body.clientWidth > 800 && <Footer />}
        </div>
    );
};

export default PayWrong;