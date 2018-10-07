import React, {Component} from 'react';


import MobileContainer from '../../../containers/ComponentContainers/Header/MobileContainer';


export default () => View => {

    @MobileContainer()
    class MobileController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                phonesPopupVisible: false,
                userPopupVisible: false,
                navFilterPopupVisible: false,
                searchPopupVisible: false
            };

            this.handleClickOutside = ::this.handleClickOutside;
            this.phonesPopupRef = React.createRef();
            this.phonesIconRef = React.createRef();
            this.userPopupRef = React.createRef();
            this.userIconRef = React.createRef();
            this.navFilterPopupRef = React.createRef();
            this.navFilterIconRef = React.createRef();
            this.searchPopupRef = React.createRef();
            this.searchIconRef = React.createRef();
        }

        componentWillUnmount() {
            document.removeEventListener('click', this.handleClickOutside, false);
        }


        componentDidMount() {
            document.addEventListener('click', this.handleClickOutside, false);
        }

        render() {

            return <View
                setPhonesPopupVisible={::this.setPhonesPopupVisible}
                phonesPopupVisible={this.state.phonesPopupVisible}
                phonesPopupRef={this.phonesPopupRef}
                phonesIconRef={this.phonesIconRef}

                setUserPopupVisible={::this.setUserPopupVisible}
                userPopupVisible={this.state.userPopupVisible}
                userPopupRef={this.userPopupRef}
                userIconRef={this.userIconRef}

                setNavFilterPopupVisible={::this.setNavFilterPopupVisible}
                navFilterPopupVisible={this.state.navFilterPopupVisible}
                navFilterPopupRef={this.navFilterPopupRef}
                navFilterIconRef={this.navFilterIconRef}


                setSearchPopupVisible={::this.setSearchPopupVisible}
                searchPopupVisible={this.state.searchPopupVisible}
                searchPopupRef={this.searchPopupRef}
                searchIconRef={this.searchIconRef}
                setSearchPopupInvisible={::this.setSearchPopupInvisible}


                logout={::this.logout}
                userName={this.props.userName}

                headInfoFixed={this.props.headInfoFixed}
            />
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        handleClickOutside(e) {

            this.state.navFilterPopupVisible &&
            !e.composedPath().includes(this.navFilterPopupRef.current) &&
            !e.composedPath().includes(this.navFilterIconRef.current) &&
            this.closeAllPopup('navFilter');

            this.state.phonesPopupVisible &&
            !e.composedPath().includes(this.phonesPopupRef.current) &&
            !e.composedPath().includes(this.phonesIconRef.current) &&
            this.closeAllPopup('phones');

            this.state.userPopupVisible &&
            !e.composedPath().includes(this.userPopupRef.current) &&
            !e.composedPath().includes(this.userIconRef.current) &&
            this.closeAllPopup('user');

            this.state.searchPopupVisible &&
            !e.composedPath().includes(this.searchPopupRef.current) &&
            !e.composedPath().includes(this.searchIconRef.current) &&
            this.closeAllPopup('search');
        }


        closeAllPopup(exception) {
            exception === 'phones' && this.setPhonesPopupInvisible();
            exception === 'user' && this.setUserPopupInvisible();
            exception === 'navFilter' && this.setNavFilterPopupInvisible();
            exception === 'search' && this.setSearchPopupInvisible();
        }


        setPhonesPopupVisible() {
            this.state.phonesPopupVisible ||
            this.setState(() => ({
                phonesPopupVisible: true
            }))
        }

        setPhonesPopupInvisible() {
            !this.state.phonesPopupVisible ||
            this.setState(() => ({
                phonesPopupVisible: false
            }))
        }


        setUserPopupVisible() {
            this.props.userLoggedIn &&
            this.setState(() => ({
                userPopupVisible: true
            }));

            this.props.userLoggedIn || this.props.loginFormShow();
        }

        setUserPopupInvisible() {
            !this.state.userPopupVisible ||
            this.setState(() => ({
                userPopupVisible: false
            }))
        }


        setNavFilterPopupVisible() {
            this.state.navFilterPopupVisible ||
            this.setState(() => ({
                navFilterPopupVisible: true
            }))
        }

        setNavFilterPopupInvisible() {
            !this.state.navFilterPopupVisible ||
            this.setState(() => ({
                navFilterPopupVisible: false
            }))
        }


        setSearchPopupVisible(){
            this.state.searchPopupVisible ||
            this.setState(() => ({
                searchPopupVisible: true
            }))
        }

        setSearchPopupInvisible() {
            !this.state.searchPopupVisible ||
            this.setState(() => ({
                searchPopupVisible: false
            }))
        }



        logout() {
            this.setUserPopupInvisible();
            this.props.logoutUser();
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return MobileController;

}