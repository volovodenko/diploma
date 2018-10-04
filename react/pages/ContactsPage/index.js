import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


const ContactsPage = () => {
    window.scrollTo(0, 0); //обнулить прокрутку

    return (
    <div className={styles.contact}>
        <h1>Контакты</h1>

        <div
            className={styles.container}
        >

            <div className={styles.left}>
                <h3>Интернет-магазин</h3>

                <div className={styles.info}>
                    <div className={styles.leftInfo}>
                        <i
                            className={
                                classNames(
                                    styles.logo,
                                    styles.kyivstar,
                                )
                            }
                        />
                        <i
                            className={
                                classNames(
                                    styles.logo,
                                    styles.mts,
                                )
                            }
                        />
                        <i
                            className={
                                classNames(
                                    styles.logo,
                                    styles.life,
                                )
                            }
                        />
                        <i
                            className={styles.logo}
                        />
                        <i
                            className={
                                classNames(
                                    styles.logo,
                                    fontAwesome.fa,
                                    fontAwesome['fa-envelope-o'],
                                    styles.email
                                )
                            }
                            aria-hidden='true'
                        />
                    </div>

                    <ul className={styles.rightInfo}>
                        <li>(067) 777-77-77</li>
                        <li>(050) 777-77-77</li>
                        <li>(093) 777-77-77</li>
                        <li>(0800) 77-77-77</li>
                        <li><a href='mailto:info@autocenter.ua'>info@autocenter.ua</a></li>
                    </ul>

                </div>

            </div>

            <div className={styles.right}>
                <h3>Автомагазин</h3>

                <div className={styles.info}>
                    <div className={styles.leftInfo}>
                        <i
                            className={
                                classNames(
                                    styles.logo,
                                    styles.kyivstar,
                                )
                            }
                        />
                        <i
                            className={
                                classNames(
                                    styles.logo,
                                    styles.mts,
                                )
                            }
                        />
                        <i
                            className={
                                classNames(
                                    styles.logo,
                                    styles.life,
                                )
                            }
                        />
                    </div>
                    <ul className={styles.rightInfo}>
                        <li>(067) 888-88-88</li>
                        <li>(050) 888-88-88</li>
                        <li>(093) 888-88-88</li>
                    </ul>
                </div>

                <p>
                    Наш автомагазин расположен по адресу:
                    <span className={styles.address}>Киев, ул. М.Коцюбинского, 14 (Шевченковский район)</span>
                    <span className={styles.address}>
                        <a href='https://www.google.com/maps/@50.4455254,30.5022157,18.67z' target='_blank'>
                            показать на карте
                        </a>
                    </span>
                </p>

            </div>

        </div>

        <div className={styles.schedule}>
            <div className={styles.scheduleLeft}>
                <p>Время работы интернет-магазина:</p>
                <ul className={styles.scheduleList}>
                    <li>Пн — Пт: с 8<sup>30</sup> до 21<sup>00</sup></li>
                    <li>Сб — Вс: с 8<sup>30</sup> до 18<sup>00</sup></li>
                </ul>
            </div>
            <div className={styles.scheduleRight}>
                <p>Время работы автомагазина:</p>
                <ul className={styles.scheduleList}>
                    <li>Пн — Пт: с 8<sup>00</sup> до 18<sup>00</sup></li>
                    <li>Сб — Вс: с 8<sup>00</sup> до 18<sup>00</sup></li>
                </ul>

            </div>
        </div>

    </div>
)
};

export default ContactsPage;