import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


export default ({state}) =>
    state
    ? <i
        className={
            classNames(
                fontAwesome.fa,
                fontAwesome['fa-check'],
                fontAwesome['fa-lg'],
                styles.ok
            )
        }
        aria-hidden='true'
    />
    : <i
        className={
            classNames(
                fontAwesome.fa,
                fontAwesome['fa-times'],
                fontAwesome['fa-lg'],
                styles.warning
            )
        }
        aria-hidden='true'
    />