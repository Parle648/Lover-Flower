import React from 'react';
import styles from './styles/medias.module.scss';
import inst from '../../img/inst.svg';
import viber from '../../img/viber.svg';
import whatsub from '../../img/whatsub.svg';

type Props = {
    style: string ,
}

const Medias = ({style}: Props) => {
    return (
        <div className={`${styles.group} ${style}`}>
            <img className={styles.media} src={inst} alt="inst" />
            <img className={styles.media} src={viber} alt="viber" />
            <img className={styles.media} src={whatsub} alt="whatsub" />
        </div>
    );
};

export default Medias;