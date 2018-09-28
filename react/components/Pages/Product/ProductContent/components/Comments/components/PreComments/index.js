import React from 'react';


import styles from './styles.scss';


const PreComments = ({message}) => (
    <p className={styles.preComment}>
        {message}
    </p>
);

export default PreComments;