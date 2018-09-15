import React from 'react';


import styles from  './styles.scss';


export default () => {
    window.scrollTo(0, 0); //обнулить прокрутку

    return <p className={styles.notFound}>Ошибка 404. Страница не найдена</p>;
};