import React, {Component} from 'react';


import ProfilePageContainer from '../../containers/PageContainers/ProfilePageContainer';
import NotFoundPage from '../../pages/NotFoundPage';
import PageMessage from '../../components/PageMessage';

export default () => View => {

    @ProfilePageContainer()
    class ProfilePageController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                activePage: 0
            };

            this.props.userLoggedIn || this.props.loginFormShow();

            window.scrollTo(0, 0); //обнулить прокрутку

        }


        static getDerivedStateFromProps(props, state) {
            const tab = props.location.match.params.tab;
            let activePage;

            switch (tab) {
                case undefined:
                case 'orders':
                    activePage = 1;
                    break;
                case 'detail':
                    activePage = 2;
                    break;
                case 'favorite':
                    activePage = 3;
                    break;

                default:
                    activePage = 0;
            }

            if (state.activePage !== activePage) {
                return {
                    activePage
                }
            }

            return null;

        }


        render() {
            if (!this.props.userLoggedIn) {
                return <PageMessage
                    message='Для доступа к личному кабинету пожалуйста авторизируйтесь.'
                />;
            }

            if (!this.state.activePage) {
                return <NotFoundPage/>
            }

            return <View
                activePage={this.state.activePage}
            />


        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return ProfilePageController;

}