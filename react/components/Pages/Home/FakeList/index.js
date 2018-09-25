import React from 'react';

import styles from './styles.scss';

const fakeList = ({fakeList}) => (
    fakeList.map(item => (
        <li key={item} className={styles.fake}>
        </li>
    ))
);

export default fakeList;