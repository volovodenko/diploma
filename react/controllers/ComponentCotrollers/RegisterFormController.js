import React, {Component} from 'react';


import RegisterFormContainer from '../../containers/ComponentContainers/RegisterFormContainer';


export default () => View => {

    @RegisterFormContainer()
    class RegisterFormController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                emailValid: false,
                nameValid: false,
                passwordValid: false,
                cPasswordValid: false
            };

            this.nameRegister = React.createRef();
            this.emailRegister = React.createRef();
            this.passwordRegister = React.createRef();
            this.cPasswordRegister = React.createRef();
        }


        render() {
            return <View
                nameRegister={this.nameRegister}
                validateName={::this.validateName}
                nameValid={this.state.nameValid}
                validateEmail={::this.validateEmail}
                emailRegister={this.emailRegister}
                emailValid={this.state.emailValid}
                emailExists={this.props.emailExists}
                validatePassword={::this.validatePassword}
                passwordRegister={this.passwordRegister}
                passwordValid={this.state.passwordValid}
                validateCPassword={::this.validateCPassword}
                cPasswordRegister={this.cPasswordRegister}
                cPasswordValid={this.state.cPasswordValid}
                register={::this.register}
                allowRegister={this.allowRegister()}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        validateEmail() {
            clearTimeout(this.timerId);

            const re = /^[-._a-z0-9]+@[a-z0-9]+\.[a-z]+$/;
            const email = this.emailRegister.current.value.toLowerCase();

            if (re.test(email)) {
                this.setState({
                    emailValid: true
                });

                const data = {email};

                this.timerId = setTimeout(() => {
                    this.props.validateEmailExist(data);
                }, 500);


                return;
            }

            this.setState({
                emailValid: false
            });

        }


        validateName() {
            const name = this.nameRegister.current.value.toLowerCase();

            name.length > 2
                ?
                this.setState({
                    nameValid: true
                })
                :
                this.setState({
                    nameValid: false
                });
        }


        validatePassword() {
            const password = this.passwordRegister.current.value;

            password.length > 4
                ?
                this.setState({
                    passwordValid: true
                })
                :
                this.setState({
                    passwordValid: false
                });
        }


        validateCPassword() {
            const password = this.passwordRegister.current.value;
            const cPassword = this.cPasswordRegister.current.value;

            cPassword.length > 4 && cPassword === password
                ?
                this.setState({
                    cPasswordValid: true
                })
                :
                this.setState({
                    cPasswordValid: false
                });
        }


        register() {
            if (!this.allowRegister()) {
                return;
            }

            const data = {
                name: this.nameRegister.current.value,
                email: this.emailRegister.current.value,
                password: this.passwordRegister.current.value,
                c_password: this.cPasswordRegister.current.value,
            };

            this.props.registerUser(data);
            this.props.closeRegisterForm();

            this.setState({
                registerFormVisible: false,
                emailValid: false,
                nameValid: false,
                passwordValid: false,
                cPasswordValid: false
            });

        }

        allowRegister() {
            return this.state.nameValid && this.state.emailValid && !this.props.emailExists
                && this.state.passwordValid && this.state.cPasswordValid;
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return RegisterFormController;

}