import React from 'react';
import background from '../../img/haveaquestions-background.png';
import backgroundMobile from '../../img/havequestions-mobile.png';
import styles from './styles/haveQuestions.module.scss';
import HaveQuestionForm from '../../features/HaveQuestionForm/HaveQuestionForm';

const HaveQuestions = () => {
    return (
        <div className={styles.block}>
            <img className={styles.background} src={background} alt="haveaquestions-background" />
            <img className={styles.backgroundMobile} src={backgroundMobile} alt="haveaquestions-background" />
            <div className={styles.wrapper}>
                <div className={styles.ttls}>
                    <h2 className={styles.ttl}>ОСТАЛЬСЬ</h2>
                    <h2 className={`${styles.ttl} ${styles.secondTtl}`}>ВОПРОСЫ?</h2>
                </div>
                <div className={styles.form}>
                    <p className={styles.description}>
                        Отправьте ваш вопрос, заказ, предложение или жалобу через форму обратной связи, и наш специалист свяжется с вами в течение 15 минут.
                    </p>
                    <HaveQuestionForm />
                </div>
            </div>
        </div>
    );
};

export default HaveQuestions;