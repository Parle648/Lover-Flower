import React from 'react';
import background from '../../img/howmakeorder.png';
import styles from './styles/order.module.scss';

const HowMakeOrder = () => {
    return (
        <div className={styles.block}>
            <img className={styles.background} src={background} alt="" />
            <div className={styles.wrapper}>
                <h2 className={styles.ttl}>Как сделать</h2>
                <h2 className={styles.subttl}>заказ</h2>
                <div className={styles.steps}>
                    <div className={`${styles.step} ${styles.firstStep}`}>
                        <h2 className={styles.stepTtl}>1 шаг</h2>
                        <p className={`${styles.stepDescription} ${styles.firstDescription}`}>
                            Выберите какие цветы или подарки вы хотите купить
                        </p>
                    </div>
                    <div className={`${styles.step} ${styles.secontStep}`}>
                        <h2 className={styles.stepTtl}>2 шаг</h2>
                        <p className={`${styles.stepDescription} ${styles.secontDescription}`}>
                            Оформите заказ, и мы отправим вам подтверждение на электронную почту, а так же менеджер свяжется с вами по телефону или в WhatsApp
                        </p>
                    </div>
                    <div className={styles.step}>
                        <h2 className={styles.stepTtl}>3 шаг</h2>
                        <p className={styles.stepDescription}>
                            Наши флористы бережно подойдут к созданию букета цветов в самом начале дня или накануне
                        </p>
                    </div>
                    <div className={styles.step}>
                        <h2 className={styles.stepTtl}>4 шаг</h2>
                        <p className={styles.stepDescription}>
                            Один из наших курьеров или партнёров доставит ваш заказ по указанному адресу. Мы отправим вам сообщение в Whats App как только заказ будет доставлен
                        </p>
                    </div>
                    <div className={styles.step}>
                        <h2 className={styles.stepTtl}>5 шаг</h2>
                        <p className={styles.stepDescription}>
                           Наслаждайтесь цветами , если вы заказали их для дома или любовью, которой поделились, если вы заказали для друга
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowMakeOrder;