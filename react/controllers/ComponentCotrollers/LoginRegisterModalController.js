import React, {Component} from 'react';


import LoginRegisterModalContainer from '../../containers/ComponentContainers/LoginRegisterModalContainer';


export default () => View => {

    @LoginRegisterModalContainer()
    class LoginRegisterModalController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                registerFormVisible: false,
            };
        }


        render() {
            return <View
                loginFormVisible={this.props.loginFormVisible}
                registerFormVisible={this.state.registerFormVisible}
                closeLoginModal={::this.closeLoginModal}
                openRegisterForm={::this.openRegisterForm}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        openRegisterForm() {
            this.setState(() => ({
                registerFormVisible: true
            }));

        }

        closeLoginModal() {
            this.props.loginFormHide();

            setTimeout(() => {
                this.setState({
                    registerFormVisible: false
                });
            }, 500)

        }


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return LoginRegisterModalController;

}