import React, {Component} from 'react';


import LoaderContainer from '../../containers/ComponentContainers/LoaderContainer';


export default () => View => {

    @LoaderContainer()
    class LoginRegisterModalController extends Component {

        render() {
            return this.props.carModelsCatalogIsLoading ||
            this.props.carCategoriesCatalogIsLoading ||
            this.props.productListIsLoading ||
            this.props.productItemIsLoading
                ? <View/>
                : null
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return LoginRegisterModalController;
}