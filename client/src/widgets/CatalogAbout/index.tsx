import React from 'react';
import background from '../../img/catalogdescription.png';
import backgroundMobile from '../../img/descriptionmobile.png';
import styles from './styles/catalogAbout.module.scss';
import DescriptionModule from '../../entities/DescriptionBlock/index';

const index = () => {
    return (
        <div className={styles.container}>
            <img className={styles.background} src={document.body.clientWidth > 800 ? background : backgroundMobile} alt="background" />
            <div className='wrapper'>
                <h2 className={styles.ttl}>каталог</h2>
                <p className={styles.paragraph}>
                    У нас самый большой выбор цветов, букетов, открыток и подарков.
                    Мы всегда поможем вам подобрать букет для вашего события, наш менеджер вас проконсультирует и поможет определиться с выбором
                </p>
                <p className={styles.paragraph}>
                    Ознакомьтесь с нашими разделами каталога
                </p>

                <DescriptionModule className={null} list={['Сборные букеты', 'Монобукеты', 'Композиции из цветов', 'розы', 'свадебные']} ttl='Цветы'/>
                <DescriptionModule className={styles.second} list={['букеты', 'для интерьера', 'Композиции']} ttl='готовые букеты из сухоцветов'/>
                <DescriptionModule className={styles.third} list={['шары', 'игрушки', 'открытки', 'упаковка']} ttl='дополнительно'/>
            </div>
        </div>
    );
};

export default index;