import React, {Component, Fragment} from 'react';

import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import GlobalModals from '../GlobalModals';
import ErrorMessage from '../ErrorMessage';

export default class App extends Component {

    render() {

        return (
            <Fragment>
                <Header/>
                <Main/>
                <Footer/>
                <GlobalModals/>
                <ErrorMessage/>
            </Fragment>
        );

    }

    /***************************************************************************
     *
     **************************************************************************/

}