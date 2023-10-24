import React from 'react';
import { Link } from 'react-router-dom';

import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';

import background from '../../img/contacts-background.png';

import styles from './styles/contactPage.module.scss';

const ContactsPage = () => {
    return (
        <div className={styles.block}>
            <TopHeader />
                <img className={styles.background} src={background} alt="background" />

                <div className={styles.wrapper}>
                    <h2 className={styles.mainTtl}>контакты</h2>

                    <div className={styles.aditionalOptions}>
                        <div className={styles.option}>
                            <h2 className={styles.ttlOption}>время работы</h2>
                            <p className={styles.paragraphOption}>
                                с 10:00 до 21:00 без выходных
                            </p>
                        </div>
                        <div className={styles.option}>
                            <h2 className={styles.ttlOption}>Адрес</h2>
                            <p className={styles.paragraphOption}>
                                г. Минск, ул. Тимирязева 67, комн. 112
                            </p>
                        </div>
                        <div className={styles.option}>
                            <h2 className={styles.ttlOption}>Телефон</h2>
                            <p className={styles.paragraphOption}>
                                +375 (29) 113-69-69
                            </p>
                        </div>
                        <div className={styles.option}>
                            <h2 className={styles.ttlOption}>E-mail</h2>
                            <p className={styles.paragraphOption}>
                                zakaz@loverflower.by
                            </p>
                        </div>
                    </div>

                    <div className={styles.sendUsBlock}>
                        <div className={styles.ttls}>
                            <h2 className={styles.sendUsFirstTtl}>напишите</h2>
                            <h2 className={styles.sendUsSecondTtl}>нам</h2>
                        </div>
                        <div className={styles.sendRequestBlock}>
                            <p className={styles.sendRequestParagraph}>
                                Отправьте ваш вопрос, заказ, предложение или жалобу через форму обратной 
                                связи, и наш специалист свяжется с вами в течение 15 минут.
                            </p>
                        </div>
                    </div>

                    <div className={styles.form}>
                        <input className={`${styles.input} greenInput`} type="text" name="Name" placeholder='Ваше имя' id=''/>
                        <input className={`${styles.input} greenInput`} type="number" name="Name" placeholder='+7 (977) 777-77-77' id=''/>
                        <textarea  className={`${styles.input} greenInput ${styles.textField}`} name="Name" placeholder='Ваш комментарий' id=''/>
                        <button className='greenBtn'>отправить</button>
                        <p className={styles.policy}>
                            Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии c <Link className={styles.link} to='/'>Политикой конфиденциальности</Link>
                        </p>
                    </div>

                </div>

            <Footer />
        </div>
    );
};

export default ContactsPage;