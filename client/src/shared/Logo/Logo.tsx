import React from 'react';
import logo from '../../img/logo.svg';
import styles from './logo.module.scss';

const Logo = () => {
    return (
        <img className={styles.logo} src={logo} alt="logo"/>
    );
};

export default Logo;