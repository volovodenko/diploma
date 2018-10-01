import React, {Component} from 'react';


import PageLoaderContainer from '../../../containers/ComponentContainers/Loaders/PageLoaderContainer';


export default () => View => {

    @PageLoaderContainer()
    class PageLoaderController extends Component {

        render() {

            return (this.props.carsIsLoading ||
                    this.props.carModelsCatalogIsLoading ||
                    this.props.carCategoriesCatalogIsLoading ||
                    this.props.productListIsLoading ||
                    this.props.productItemIsLoading ||
                    this.props.orderDataIsSending ||
                    this.props.aboutContentIsLoading ||
                    this.props.paymentContentIsLoading ||
                    this.props.ordersListIsLoading
                ) &&
                <View styles={this.props.styles}/>
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return PageLoaderController;
}