import React from 'react';
// import classNames from 'classnames';


import styles from './styles.scss';
// import fontAwesome from 'font-awesome/css/font-awesome.css';


const ErrorMessage = props => (
    <div className={styles.error}>
        {props.errorMessage}
    </div>
);

export default ErrorMessage;