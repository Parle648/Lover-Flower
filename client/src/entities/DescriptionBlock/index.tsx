import React from 'react';
import styles from './styles/description.module.scss';
import { Link } from 'react-router-dom';

type DescriptionTypes = {
    list: string[],
    ttl: string,
    className: string | null
}

const index = ({list, ttl, className}: DescriptionTypes) => {
    return (
        <div className={`${styles.block} ${className}`}>
            <h2 className={styles.ttl}>{ttl}</h2>
            <ul className={styles.list}>
                {list.map((item) => {
                    return <li className={styles.listItem}>{item}</li>
                })}
            </ul>
            <Link className={styles.link} to='/catalog'>смотреть каталог</Link>
        </div>
    );
};

export default index;