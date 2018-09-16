import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


import styles from './styles.scss';
import fontAwesome from 'font-awesome/css/font-awesome.css';
import LoginMenuController from '../../../../../controllers/ComponentCotrollers/LoginMenuController';
import Popup from './components/Popup/index';


@LoginMenuController()
export default class Login extends Component {

    render() {
        return (
            <div
                className={styles.login}
                onMouseEnter={this.props.popupSetVisible}
                onMouseLeave={this.props.popupSetInvisible}
            >
                {
                    !this.props.userLoggedIn
                        ?
                        <div onClick={this.props.loginModalShow}>
                            <span>Вход</span>
                            <i
                                className={
                                    classNames(
                                        fontAwesome.fa,
                                        fontAwesome['fa-sign-in'],
                                        styles.signIn
                                    )
                                }
                                aria-hidden='true'
                            />
                        </div>
                        :
                        <div className={styles.auth}>
                            <i
                                className={
                                    classNames(
                                        fontAwesome.fa,
                                        fontAwesome['fa-user'],
                                        styles.user
                                    )
                                }
                                aria-hidden='true'
                            />
                            <Link to='/profile'>Личный кабинет</Link>
                            <i
                                className={
                                    classNames(
                                        fontAwesome.fa,
                                        fontAwesome['fa-caret-down'],
                                        styles.caretDown
                                    )
                                }
                                aria-hidden='true'
                            />
                        </div>
                }

                {
                    this.props.popupVisible
                        ? <Popup
                            userName={this.props.userName}
                            logout={this.props.logout}
                        />
                        : null
                }
            </div>
        )
    }

}