import React, {Component, Fragment} from 'react';
import classNames from 'classnames';


import styles from './styles.scss';
import RegisterFormController
    from '../../../../../../controllers/ComponentCotrollers/GlobalModals/RegisterFormController';
import Icons from './components/Icons';


@RegisterFormController()
export default class RegisterForm extends Component {

    render() {

        return (
            <Fragment>
                <h3>Регистрация</h3>

                <label>Имя пользователя (логин):
                    <input
                        type='text'
                        ref={this.props.nameRegister}
                        onChange={this.props.validateName}
                        title={
                            !this.props.nameValid
                                ? 'Имя должно быть больше 2-х знаков'
                                : this.props.nameExists
                                ? 'Пользователь с таким именем уже существует'
                                : ''
                        }
                    />
                    <Icons state={this.props.nameValid && !this.props.nameExists}/>

                </label>

                <label>E-mail:
                    <input
                        type='email'
                        onChange={this.props.validateEmail}
                        ref={this.props.emailRegister}
                        title={
                            !this.props.emailValid
                                ? 'Недопустимый e-mail'
                                : this.props.emailExists
                                ? 'Такой e-mail уже существует'
                                : ''
                        }
                    />
                    <Icons state={this.props.emailValid && !this.props.emailExists}/>
                </label>

                <label>Пароль:
                    <input
                        type='password'
                        onChange={this.props.validatePassword}
                        ref={this.props.passwordRegister}
                        title={
                            !this.props.passwordValid
                                ? 'Пароль должен быть больше 4-х знаков'
                                : ''
                        }
                    />
                    <Icons state={this.props.passwordValid}/>
                </label>

                <label>Подтвердите пароль:
                    <input
                        type='password'
                        onChange={this.props.validateCPassword}
                        ref={this.props.cPasswordRegister}
                        title={
                            !this.props.cPasswordValid
                                ? 'Должен быть больше 4-х знаков и совпадать с полем "Пароль"'
                                : ''
                        }
                    />
                    <Icons state={this.props.cPasswordValid}/>
                </label>

                <button
                    onClick={this.props.register}
                    className={
                        classNames(
                            styles.actionButton,
                            this.props.allowRegister ? styles.active : null,
                        )
                    }
                >
                    Зарегистрироваться
                </button>

            </Fragment>
        )
    }
}