import occassion1 from '../../img/occassion1.png';
import occassion2 from '../../img/occassion2.png';
import occassion3 from '../../img/occassion3.png';
import occassion4 from '../../img/occassion4.png';
import styles from './styles/Occassion.module.scss';

const index = () => {
    return (
        <div className={styles.block}>
            <div className={styles.grid}>
                <div className={styles.ttls}>
                    <h2 className={styles.ttl}>ОСОБЕННЫЙ</h2>
                    <h2 className={styles.ttl}><div className={styles.line}></div> ПОВОД?</h2>
                </div>
                <img className={styles.img} src={occassion1} alt="special occassion" />
                <div className={styles.list}>
                    <p className={styles.paragraph}>
                        Мы готовы прийти на помощь и собрать уникальный букет, на любой вкус, бюджет и для любого события по вашему индивидуальному заказу.
                    </p>

                    <h3 className={styles.listItem}>учтем даже самые изысканные пожелания</h3>
                    <h3 className={styles.listItem}>одберем свежайшие цветы и сделаем уникальный букет или композицию</h3>
                    <h3 className={styles.listItem}>оплатить можно при получении или онлайн на сайте</h3>

                    <button className='greenBtn' style={{width: '250px', marginTop: '20px'}}>собрать индивидуальный букет</button>
                </div>
                <img className={styles.img} src={occassion2} alt="special occassion" />
                <img className={`${styles.img} ${styles.littleImg}`} src={occassion3} alt="special occassion" />
                <img className={styles.img} src={occassion4} alt="special occassion" />
            </div>
        </div>
    );
};

export default index;