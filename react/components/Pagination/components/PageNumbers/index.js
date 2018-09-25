import React from 'react';


import styles from '../../styles.scss';


const PageNumbers = ({arrayPages, activePage, setPage}) =>
    arrayPages.map(item => (
        <li className={activePage === item ? styles.active : null}
            key={item}
            onClick={setPage}
        >
            {item}
        </li>
    ));

export default PageNumbers;