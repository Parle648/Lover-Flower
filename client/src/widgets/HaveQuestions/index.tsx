import React from 'react';
import background from '../../img/haveaquestions-background.png';
import backgroundMobile from '../../img/havequestions-mobile.png';
import styles from './styles/haveQuestions.module.scss';
import { Link } from 'react-router-dom';

const index = () => {
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
                    <input className={`${styles.input} greenInput`} type="text" name="Name" placeholder='Ваше имя' id=''/>
                    <input className={`${styles.input} greenInput`} type="number" name="Name" placeholder='+7 (977) 777-77-77' id=''/>
                    <textarea  className={`${styles.input} greenInput ${styles.textField}`} name="Name" placeholder='Ваш комментарий' id=''/>
                    <button className='greenBtn'>отправить</button>
                    <p className={styles.policy}>
                        Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии c <Link className={styles.link} to='/'>Политикой конфиденциальности</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default index;