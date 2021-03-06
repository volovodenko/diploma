import React, {Component, Fragment} from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import LoginFormController from '../../../../../../controllers/ComponentControllers/GlobalModals/LoginFormController';


@LoginFormController()
export default class LoginForm extends Component {


    render() {

        return (
            <Fragment>
                <h3>Вход</h3>
                <label>E-mail или логин:<input type='text' ref={this.props.userName}/></label>
                <label>Пароль:<input type='password' ref={this.props.passwordLogin}/></label>
                <button
                    onClick={this.props.login}
                    className={
                        classNames(
                            styles.actionButton,
                            styles.active,
                        )
                    }
                >
                    Вход
                </button>
                <span onClick={this.props.openRegisterForm}>Регистрация</span>
                {
                    this.props.errorVisible &&
                    <div
                        className={
                            classNames(
                                styles.error,
                                this.props.errorHide ? styles.hide : null
                            )
                        }
                    >
                        {this.props.error}
                    </div>
                }

            </Fragment>
        )
    }

}