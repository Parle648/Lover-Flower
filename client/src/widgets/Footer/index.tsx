import Logo from '../../shared/Logo/Logo';
import styles from './styles/footer.module.scss';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <Logo />
                    <h2 className={styles.greenText}>реквизиты</h2>
                    <p className={styles.paragraph}>
                        ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул. Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р/с BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22 220007, г. Минск, улица Толстого
                    </p>
                </div>
                <div className={styles.item}>
                    <h2 className={styles.greenText}>каталог</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><Link to=''>популярное</Link></li>
                        <li className={styles.listItem}><Link to=''>сухоцветы</Link></li>
                        <li className={styles.listItem}><Link to=''>букеты роз</Link></li>
                        <li className={styles.listItem}><Link to=''>композиция из цветов</Link></li>
                        <li className={styles.listItem}><Link to=''>индивидуальный букет</Link></li>
                        <li className={styles.listItem}><Link to=''>букет на праздник</Link></li>
                        <li className={styles.listItem}><Link to=''>упаковка подарков</Link></li>
                        <li className={styles.listItem}><Link to=''>шары</Link></li>
                        <li className={styles.listItem}><Link to=''>открытки</Link></li>
                        <li className={styles.listItem}><Link to=''>ковнерты</Link></li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <h2 className={styles.greenText}>букет</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><Link to=''>для девушки</Link></li>
                        <li className={styles.listItem}><Link to=''>для мужчины</Link></li>
                        <li className={styles.listItem}><Link to=''>для жены</Link></li>
                        <li className={styles.listItem}><Link to=''>для мамы</Link></li>
                        <li className={styles.listItem}><Link to=''>для коллеги</Link></li>
                        <li className={styles.listItem}><Link to=''>для начальника</Link></li>
                        <li className={styles.listItem}><Link to=''>для дочки</Link></li>
                        <li className={styles.listItem}><Link to=''>для детей</Link></li>
                        <li className={styles.listItem}><Link to=''>для женщины</Link></li>
                    </ul>
                </div>
                <div className={styles.item}>
                   <Link className={styles.greenLink} to='/'>Доставка и оплата </Link>
                   <Link className={styles.greenLink} to='/'>О нас</Link>
                   <Link className={styles.greenLink} to='/'>FAQ</Link>
                   <Link className={styles.greenLink} to='/'>Контакты</Link>
                   <Link className={styles.greenLink} to='/'>для корпоративных клиентов</Link>
                </div>
                <div className={styles.item}>
                    <h2 className={styles.greenText}>каталог</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><Link to=''>l</Link></li>
                        <li className={styles.listItem}><Link to=''>l</Link></li>
                        <li className={styles.listItem}><Link to=''>l</Link></li>
                        <li className={styles.listItem}><Link to=''>l</Link></li>
                        <li className={styles.listItem}><Link to=''>l</Link></li>
                        <li className={styles.listItem}><Link to=''>l</Link></li>
                        <li className={styles.listItem}><Link to=''>l</Link></li>
                        <li className={styles.listItem}><Link to=''>l</Link></li>
                        <li className={styles.listItem}><Link to=''>l</Link></li>
                        <li className={styles.listItem}><Link to=''>l</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default index;