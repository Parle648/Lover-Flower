import React from 'react';
import { Link } from 'react-router-dom';
import Medias from '../Medias/index.tsx';
import Logo from '../../shared/Logo/Logo.tsx';
import burgerTrigger from '../../img/burger.svg';
import background from '../../img/hero-section.png';
import cross from '../../img/cross.svg';
import backgroundMobile from '../../img/heromobile.png';
import text from '../../img/header-text.png';
import styles from './styles/hero.module.scss';
import '../../Scss/styles.scss';

const HeroSection = () => {
    const [disabled, setDisabled] = React.useState(false);
    const [scroll, setScroll] = React.useState(false);

    const toggleMenu = () => {
        setDisabled(!disabled)
    }

    document.addEventListener('scroll', () => {
        window.scrollY <=500 ? setScroll(false) : setScroll(true);
    })
    

    return (
        <div className={styles.heroSection}>
            <img className={styles.background} src={document.body.clientWidth > 800 ? background : backgroundMobile} alt="background" />
            <header className={`${styles.header} flex justify-between items-start ${scroll && styles.scrollHeader}`}>
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
                                <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><Link to='/'>Главная</Link></li>
                                <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><Link to='/catalog'>Каталог</Link></li>
                                <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><Link to='/delivery'>Доставка и оплата</Link></li>
                                <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><Link to='/aboutUs'>О нас</Link></li>
                                <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><Link to='/contacts'>Контакты</Link></li>
                                <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><Link to='/questions'>FAQ</Link></li>
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

                <img className={`${styles.headerText} ${scroll && styles.scrolledText}`} src={text} alt="text" />

                <nav className={`${styles.nav}`}>
                    <ul className={`${styles.navigationList} flex justify-between`}>
                        <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><Link to='/catalog'>Каталог</Link></li>
                        <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><Link to='/delivery'>Доставка и оплата</Link></li>
                        <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><Link to='/aboutUs'>О нас</Link></li>
                        <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><Link to='/contacts'>Контакты</Link></li>
                        <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><Link to='/questions'>FAQ</Link></li>
                        <li className={`${styles.link} text-sm Oswald400 gray uppercase cursor-pointer`}><Link to=''></Link> Каталоssг</li>
                    </ul>
                </nav>

                <a className={`${styles.number} Oswald400 green ${!scroll && styles.scrolledNumber}`} href="#!">+375 (29) 113-69-69</a>

                <div className={`${styles.contactBlock} ${scroll && styles.scrolledContactBlock}`}>
                    <a className='uppercase Oswald400 green' href="#!">zakaz@loverflower.by</a>
                    <h2 className={`${styles.delivery} Oswald300 gray`}>Доставка 24/7 по договоренности с оператором</h2>
                    <h2 className={`${styles.street} Oswald400 green`}>ул. Тимирязева 67</h2>
                    <h2 className={`${styles.time} Oswald300 gray`}>10:00 до 21:00<br/> без выходных</h2>
                    <Medias />
                    <a className={`${styles.number} Oswald400 green`} href="#!">+375 (29) 113-69-69</a>
                </div>
            </header>
            <h2 className={`${styles.btnTtl} Oswald400`}>Создаём для тех, кто ценит свежесть и изящество цветка</h2>
            <Link to='/catalog'><button className={`${styles.btn} greenBtn`}>смотреть каталог</button></Link>
        </div>
    );
};

export default HeroSection;