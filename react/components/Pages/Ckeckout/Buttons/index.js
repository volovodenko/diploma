import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


const Buttons = props => (

    <div className={styles.buttons}>
        {
            props.activePage === 1
                ? null
                :
                <button
                    onClick={props.prevPage}
                    className={props.inActive ? styles.inactive : null}
                >
                    <i className={
                        classNames(
                            fontAwesome.fa,
                            fontAwesome['fa-angle-left'],
                            fontAwesome['fa-lg'],
                            styles.prev,
                        )
                    }
                       aria-hidden='true'
                    />
                    <span>Назад</span>
                </button>
        }


        <button
            onClick={props.nextPage}
            className={props.inActive ? styles.inactive : null}
        >
            {
                props.activePage === 4
                    ? <span>Отправить заказ</span>
                    : <span>Далее</span>
            }
            <i className={
                classNames(
                    fontAwesome.fa,
                    fontAwesome['fa-angle-right'],
                    fontAwesome['fa-lg'],
                    styles.next,
                )
            }
               aria-hidden='true'
            />
        </button>
    </div>
);

export default Buttons;