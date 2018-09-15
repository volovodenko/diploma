import React from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';


export default () => (
    <ul className={styles.social}>
        <h3>Advanced auto center<br/> в соцсетях</h3>
        <li>
            <a href='#'>
                <i
                    className={
                        classNames(
                            fontAwesome.fa,
                            fontAwesome['fa-facebook'],
                            fontAwesome['fa-lg'],
                            styles.facebook
                        )
                    }
                    aria-hidden='true'
                />
                <span>Facebook</span>
            </a>
        </li>
        <li>
            <a href='#'>
                <i
                    className={
                        classNames(
                            fontAwesome.fa,
                            fontAwesome['fa-twitter'],
                            fontAwesome['fa-lg'],
                            styles.twitter
                        )
                    }
                    aria-hidden='true'
                />
                <span>Twitter</span>
            </a>
        </li>
        <li>
            <a href='#'>
                <i
                    className={
                        classNames(
                            fontAwesome.fa,
                            fontAwesome['fa-youtube-play'],
                            fontAwesome['fa-lg'],
                            styles.youtube
                        )
                    }
                    aria-hidden='true'
                />
                <span>Youtube</span>
            </a>
        </li>
        <li>
            <a href='#'>
                <i
                    className={
                        classNames(
                            fontAwesome.fa,
                            fontAwesome['fa-google-plus-official'],
                            fontAwesome['fa-lg'],
                            styles.google
                        )
                    }
                    aria-hidden='true'
                />
                <span>Google+</span>
            </a>
        </li>
    </ul>
)