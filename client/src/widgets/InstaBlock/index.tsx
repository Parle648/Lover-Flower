import React from 'react';
import styles from './styles/Insta.module.scss';
import background from '../../img/insta-background.png';
import backgroundMobile from '../../img/insta-background-mobile.png';
import inst1 from '../../img/inst1.png';
import inst2 from '../../img/inst2.png';
import inst3 from '../../img/inst3.png';
import inst4 from '../../img/inst4.png';
import Medias from '../Medias';

const index = () => {
    return (
        <div className={styles.block}>
            <img className={styles.background} src={background} alt="background" />
            <img className={styles.backgroundMobile} src={backgroundMobile} alt="backgroundMobile" />
            <div className={styles.wrapper}>
                <div className={styles.imgs}>
                    <img className={styles.img} src={inst1} alt="img" />
                    <img className={styles.img} src={inst2} alt="img" />
                    <img className={styles.img} src={inst3} alt="img" />
                    <img className={styles.img} src={inst4} alt="img" />
                </div>
                <Medias style={styles.media}/>
            </div>
        </div>
    );
};

export default index;