import React from 'react';


import styles from './styles.scss';


export default () => (
    <section className={styles.info}>
        <p>&copy;2018. Все права защищены.</p>
        <p>При копировании материалов ссылка обязательна.</p>
        <p>
            Если Вы заметили ошибку на сайте, пожалуйста,&nbsp;
            <a href='mailto:info@adautocenter.ua'>сообщите нам</a>
        </p>
    </section>
)