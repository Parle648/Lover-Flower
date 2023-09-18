import React from 'react';
import styles from './style/Header.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../../shared/Logo/Logo';
import Medias from '../../widgets/Medias/index.tsx';
import Busket from '../../features/Basket/index.tsx';

import burgerTrigger from '../../img/burger.svg';
import cross from '../../img/cross.svg';
import Search from '../../features/Search/Search';

const Index = () => {
    const [disabled, setDisabled] = React.useState(false);

    const toggleMenu = () => {
        setDisabled(!disabled)
    }
    return (
        <header className={`${styles.header} flex justify-between items-start `}>
            {document.body.clientWidth > 800 &&
                <Link to='/'><Logo /></Link>
            }

            <div className={styles.mobileNav}>
                <img className={styles.trigger} src={burgerTrigger} alt="burgerTrigger" onClick={toggleMenu}/>
                <div className={`${styles.mobileBlock} ${disabled && styles.mobileBlockActive}`}>
                    <img className={styles.cross} src={cross} alt="cross" onClick={toggleMenu}/>
                    
                    <Link to='/'><Logo /></Link>
                    <nav className={`${styles.mobileList}`}>
                        <ul className={`${styles.navigationList} flex justify-between`}>
                            <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/'>Главная</a></li>
                            <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='../../pages/Catalog/Catalog.tsx'>Каталог</a></li>
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

            <nav className={`${styles.nav}`}>
                <ul className={`${styles.navigationList} flex justify-between`}>
                    <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/catalog'>Каталог</a></li>
                    <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/delivery'>Доставка и оплата</a></li>
                    <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/aboutUs'>О нас</a></li>
                    <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/contacts'>Контакты</a></li>
                    <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href='/questions'>FAQ</a></li>
                    <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><a href=''></a> Каталоssг</li>
                </ul>
            </nav>

            <Search />

            <div className={`${styles.contactBlock} `}> 
                <a className='uppercase Oswald400 green' href="#!">zakaz@loverflower.by</a>
                <h2 className={`${styles.delivery} Oswald300 gray`}>Доставка 24/7 по договоренности с оператором</h2>
                <h2 className={`${styles.street} Oswald400 green`}>ул. Тимирязева 67</h2>
                <h2 className={`${styles.time} Oswald300 gray`}>10:00 до 21:00<br/> без выходных</h2>
                <Medias />
                <a className={`${styles.number} Oswald400 green`} href="#!">+375 (29) 113-69-69</a>
                <Busket />
            </div> 
        </header>
    );
};

export default Index;