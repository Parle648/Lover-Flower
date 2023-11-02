import React from 'react';
import { Link } from 'react-router-dom';

import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';

import background from '../../img/contacts-background.png';
import backgroundMobile from '../../img/contacts-mobile-background.png';

import styles from './styles/contactPage.module.scss';

const ContactsPage = () => {
    return (
        <div className={styles.block}>
            <TopHeader />
                <img className={styles.background} src={document.body.clientWidth > 800 ? background : backgroundMobile} alt="background" />

                <div className={styles.wrapper}>
                    <span className={styles.navLink}><a href='/'>Главная </a> / <a href='/contacts'>контакты</a></span>
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
                    
                    <h2 className={styles.mapTtl}>Мы на карте</h2>
                    <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.351187614965!2d27.509104182623993!3d53.92550442900918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc56c6ea920cb%3A0x8c0a1b9140de5cd8!2sTeachMeSkills!5e0!3m2!1sru!2sfr!4v1698740900591!5m2!1sru!2sfr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            <Footer />
        </div>
    );
};

export default ContactsPage;