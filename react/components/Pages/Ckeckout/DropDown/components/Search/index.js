import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


const Search = props => (
    <div className={styles.search}>
        <input
            type='text'
            onChange={props.onSearch}
            onKeyDown={props.onKeyDown}
            ref={props.inputSearchRef}
        />
        <i
            className={
                classNames(
                    fontAwesome.fa,
                    fontAwesome['fa-search'],
                    styles.searchIcon
                )
            }
        />
    </div>
);

export default Search;