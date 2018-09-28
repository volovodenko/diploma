import React from 'react';


import styles from  './styles.scss';


const NotFoundPage = () => {
    window.scrollTo(0, 0); //обнулить прокрутку

    return <p className={styles.notFound}>Упс...что то пошло не так. Страница не найдена</p>;
};

export default NotFoundPage;