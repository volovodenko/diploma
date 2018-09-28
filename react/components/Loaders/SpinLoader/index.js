import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';


export default (props) => <div
    className={
        classNames(
            styles.loader,
            props.styles ? props.styles.spin : null
        )
    }
/>;