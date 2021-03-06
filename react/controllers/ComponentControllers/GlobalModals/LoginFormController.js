import React, {Component} from 'react';


import LoginFormContainer from '../../../containers/ComponentContainers/GlobalModals/LoginFormContainer';


export default () => View => {

    @LoginFormContainer()
    class LoginFormController extends Component {

        constructor(props) {
            super(props);

            this.setErrorHide = false;

            this.state = {
                errorVisible: false,
                error: '',
                errorHide: false
            };

            this.userName = React.createRef();
            this.passwordLogin = React.createRef();
        }


        static getDerivedStateFromProps(props) {
            if (props.errorLogin) {

                props.clearErrorLogin();
                const message = 'Пользователя с такими данными не существует!';

                return {
                    errorVisible: true,
                    error: message,
                    errorHide: false
                }
            }

            return null;
        }


        componentDidUpdate() {
            if (this.state.errorVisible && !this.setErrorHide) {
                this.setErrorHide = true;

                this.timerId1 = setTimeout(() => {
                    this.setState(() => ({
                        errorHide: true
                    }));

                    this.timerId2 = setTimeout(() => {
                        this.setErrorHide = false;
                        this.setState(() => ({
                            errorVisible: false,
                            error: '',
                            errorHide: false
                        }));
                    }, 2000)

                }, 4000);

            }
        }


        render() {
            return <View
                userName={this.userName}
                passwordLogin={this.passwordLogin}
                openRegisterForm={this.props.openRegisterForm}
                errorVisible={this.state.errorVisible}
                errorHide={this.state.errorHide}
                error={this.state.error}
                login={::this.login}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        login() {
            const userName = this.userName.current.value.toLowerCase().trim();
            const password = this.passwordLogin.current.value;


            clearTimeout(this.timerId1);
            clearTimeout(this.timerId2);
            this.setErrorHide = false;

            if (!userName.length) {
                const message = 'Поле "E-mail или логин" должно быть заполнено';

                this.setState(() => ({
                    errorVisible: true,
                    error: message,
                    errorHide: false

                }));

                return;
            }

            if (!password.length) {
                const message = 'Поле "Пароль" должно быть заполнено';

                this.setState(() => ({
                    errorVisible: true,
                    error: message,
                    errorHide: false
                }));

                return;
            }

            const data = {
                userName,
                password
            };


            this.props.loginUser(data);
        }


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return LoginFormController;

}