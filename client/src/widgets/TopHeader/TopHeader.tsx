import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../shared/Logo/Logo';
import Busket from '../../features/Basket/index.tsx';
import Medias from '../../widgets/Medias/index.tsx';

import text from '../../img/header-text.png';
import cross from '../../img/cross.svg';
import burgerTrigger from '../../img/burger.svg';

import styles from './style/TopHeader.module.scss';
import Search from '../../features/Search/Search';


const TopHeader = () => {
    const [disabled, setDisabled] = React.useState(false);

    const toggleMenu = () => {
        setDisabled(!disabled)
    }
    return (
        <div className={styles.header}>
            {document.body.clientWidth > 800 && <Logo></Logo>}
            {document.body.clientWidth < 800 && 
                <div className={styles.mobileNav}>
                    <img className={styles.trigger} src={burgerTrigger} alt="burgerTrigger" onClick={toggleMenu}/>
                    <div className={`${styles.mobileBlock} ${disabled && styles.mobileBlockActive}`}>
                        <img className={styles.cross} src={cross} alt="cross" onClick={toggleMenu}/>
                        
                        <Logo />
                        <nav className={`${styles.mobileList}`}>
                            <ul className={`${styles.navigationList} flex justify-between`}>
                                <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/'>Главная</a></li>
                                <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/catalog'>Каталог</a></li>
                                <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/delivery'>Доставка и оплата</a></li>
                                <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/aboutUs'>О нас</a></li>
                                <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/contacts'>Контакты</a></li>
                                <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/questions'>FAQ</a></li>
                            </ul>
                        </nav>

                        <div className={styles.mobileContacts}>
                            <a className='uppercase Oswald400 green' href="#!">zakaz@loverflower.by</a>
                            <h2 className={`${styles.delivery} Oswald300 gray`}>Доставка 24/7 по договоренности с оператором</h2>
                            <h2 className={`${styles.street} Oswald400 green`}>ул. Тимирязева 67</h2>
                            <h2 className={`${styles.time} Oswald300 gray`}>10:00 до 21:00<br/> без выходных</h2>
                            <a className={styles.policy} href="">Политика конфиденциальности</a>
                            <a className={`${styles.policy} Oswald400`} href="">Обработка персональных данных</a>
                            <a className={`${styles.number} Oswald400 green`} href="#!">+375 (29) 113-69-69</a>
                            <Medias />
                        </div>
                    </div>
            </div>
            }
            <img className={styles.text} src={text} alt="text" />
            <nav className={`${styles.nav}`}>
                <ul className={`${styles.navigationList} flex justify-between`}>
                    <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/catalog'>Каталог</a></li>
                    <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/delivery'>Доставка и оплата</a></li>
                    <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/aboutUs'>О нас</a></li>
                    <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/contacts'>Контакты</a></li>
                    <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/questions'>FAQ</a></li>
                </ul>
            </nav>

            {document.body.clientWidth > 800 && <Search />}

            <a className={`${styles.number} Oswald400 green`} href="#!">+375 (29) 113-69-69</a>
            <Busket />
        </div>
    );
};

export default TopHeader;