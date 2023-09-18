import React from 'react';
import styles from './style/Search.module.scss';

import search from '../../img/search.svg';

const Search = () => {
    return (
        <div className={styles.block}>
            <img src={search} alt="search" />
            <span className={styles.text}>ПОИСК</span>
        </div>
    );
};

export default Search;