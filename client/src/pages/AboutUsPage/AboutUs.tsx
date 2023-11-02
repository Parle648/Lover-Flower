import React from 'react';
import TopHeader from '../../widgets/TopHeader/TopHeader';
import Footer from '../../widgets/Footer/index.tsx';

import background from '../../img/about-us-background.png';
import backgroundModile from '../../img/about-us-background-mobile.png';

import styles from './styles/aboutPage.module.scss';

const AboutUs = () => {
    return (
        <div className={styles.block}>

        <TopHeader />

        <img className={styles.background} src={document.body.clientWidth > 800 ? background : backgroundModile} alt="background" />

        <div className={styles.wrapper}>
            <span className={styles.navLink}><a href='/'>главная</a> / <a href='/aboutUs'>о нас</a></span>
            <h2 className={styles.mainTtl}>о нас</h2>
            <h2 className={styles.shopTtl}>Lover <br /> flower</h2>

            <div className={styles.ourOpinionBlock}>
                <h2 className={styles.ourOpinionTtl}>молодая команда разных людей с одинаковыми ценностями.</h2>
                <p className={styles.ourOpinionParagraph}>
                    Мы считаем, что удовольствие от качества длится дольше, чем удовольствие 
                    от низкой цены. И поэтому в создание нашей букетерии мы вложили все, 
                    чем располагаем: душу, сердце, время и мечты! Мы готовы обещать вам только то, что можем сделать. А делаем мы только самое качественное, самое интересное 
                    и обязательно уникальное. Мы всегда честны со своими клиентами во всем – 
                    в нашем каталоге только те букеты, которые вы действительно сможете купить.
                </p>
            </div>

            <h2 className={styles.articlettl}>гарантии</h2>

            <p className={styles.guaranteeParagraph}>
                Каждый цветок уникален и чтобы вы были уверены в качестве, мы пришлем вам фотографию именно вашего букета до его отправки получателю. 
                Вся предоставленная Вами информация конфиденциальна и будет известна только нам и курьеру для осуществления доставки.
            </p>

            <h2 className={styles.articlettl}>Заказ букетов на сайте компании Lower Flower – это:</h2>

            <ul className={styles.deliveryList}>
                <li className={styles.deliveryListItem}>
                    выбор оттенков и сортов цветков в любое время года;
                </li>
                <li className={styles.deliveryListItem}>
                    отправка фото готовой композиции перед отправкой;
                </li>
                <li className={styles.deliveryListItem}>
                    возможность заказать цветы с доставкой в течение часа;
                </li>
                <li className={styles.deliveryListItem}>
                    выгодные цены – на сайте только те варианты, что Вы сможете купить;
                </li>
                <li className={styles.deliveryListItem}>
                    полная конфиденциальность по заказу;
                </li>
                <li className={styles.deliveryListItem}>
                    мы подбираем открытку, воздушные шар, подарок по Вашему желанию;
                </li>
                <li className={styles.deliveryListItem}>
                    в нашем уютном цветочном магазине цветы, которые приятно дарить.
                </li>
            </ul>

            <h2 className={styles.callToActionTtl}>
                Природная гармония цвета, неповторимость бутонов <br /> 
                и Ваши чувства <br />
                в нежных лепестках <br /> не оставят никого равнодушным.
            </h2>
            <p className={styles.callToActionParagraph}>
                Вы выбираете и заказываете цветочный сюрприз, а мы вкладываем в него душу!
            </p>

        </div>

        <Footer />

        </div>
    );
};

export default AboutUs;