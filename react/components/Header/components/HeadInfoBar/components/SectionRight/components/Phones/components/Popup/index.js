import React from 'react';
import classNames from 'classnames';


import styles from '../../styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


export default ({headInfoFixed}) => (
    <div
        className={
            classNames(
                styles.phonesPopup,
                headInfoFixed ? styles.fixed : null,
            )
        }
    >

        <div className={styles.schedule}>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-clock-o'],
                        fontAwesome['fa-lg'],
                    )
                }
            />
            <div className={styles.scheduleTime}>
                <span>Пн-Пт: 8:30-21:00</span>
                <span>Сб-Вс: 8:30-18:00</span>
            </div>
        </div>

        <div className={styles.phonesList}>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-phone'],
                        fontAwesome['fa-lg'],
                    )
                }
                aria-hidden='true'
            />
            <div className={styles.phonesAll}>
                <span>(0800) 77-77-77</span>
                <span>(067) 777-77-77</span>
                <span>(050) 777-77-77</span>
                <span>(093) 777-77-77</span>
            </div>
        </div>

        <div className={styles.addressList}>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-map-marker'],
                        fontAwesome['fa-lg'],
                    )
                }
                aria-hidden='true'
            />
            <div className={styles.address}>
                <span>Украина, Киев</span>
                <span>ул. М.Коцюбинского, 14</span>
                <span>
                            <a href='https://www.google.com/maps/@50.4455254,30.5022157,18.67z' target='_blank'>
                                показать на карте
                            </a>
                        </span>
            </div>
        </div>

        <div className={styles.iContactList}>
            <i
                className={
                    classNames(
                        fontAwesome.fa,
                        fontAwesome['fa-envelope-o'],
                        fontAwesome['fa-lg'],
                    )
                }
                aria-hidden='true'
            />
            <div className={styles.contact}>
                <span><a href='mailto:info@adautocenter.ua'>info@autocenter.ua</a></span>
            </div>
        </div>

    </div>
)