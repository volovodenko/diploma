import React from 'react';


import styles from './styles.scss';


const ArticlesPage = () => {
    window.scrollTo(0, 0); //обнулить прокрутку

    return (
        <div className={styles.articles}>
            <h1>Статьи</h1>

            <img src='/storage/img/icons/under-construction/uc.png'/>

        </div>
    );
}

export default ArticlesPage;