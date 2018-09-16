import React, {Component} from 'react';


import LoginMenuContainer from '../../containers/ComponentContainers/LoginMenuContainer';


export default () => View => {

    @LoginMenuContainer()
    class LoginMenuController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                popupVisible: false
            };
        }


        render() {
            return <View
                popupSetVisible={::this.popupSetVisible}
                popupSetInvisible={::this.popupSetInvisible}
                loginModalShow={::this.loginModalShow}
                popupVisible={this.state.popupVisible}
                userName={this.props.userName}
                logout={::this.logout}
                userLoggedIn={this.props.userLoggedIn}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        loginModalShow() {
            this.props.loginFormShow();
        }

        popupSetVisible() {
            if (!this.state.popupVisible && this.props.userLoggedIn) {
                this.setState(() => ({
                    popupVisible: true
                }))
            }

        }

        popupSetInvisible() {
            this.setState(() => ({
                popupVisible: false
            }))
        }

        logout() {
            this.popupSetInvisible();
            this.props.logoutUser();
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return LoginMenuController;

}