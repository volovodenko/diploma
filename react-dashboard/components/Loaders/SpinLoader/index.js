import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';


const SpinLoader = (props) => <div
    className={
        classNames(
            styles.loader,
            props.styles ? props.styles.spin : styles.pos
        )
    }
/>;

export default SpinLoader;