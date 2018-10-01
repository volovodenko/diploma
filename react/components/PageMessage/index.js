import React from 'react';


import styles from './styles.scss';


const PageMessage = ({message}) => (
    <div className={styles.message}>
        {message}
    </div>
);

export default PageMessage;