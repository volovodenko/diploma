import React, {Component} from 'react';


import PageLoaderContainer from '../../../containers/ComponentContainers/Loaders/PageLoaderContainer';


export default () => View => {

    @PageLoaderContainer()
    class PageLoaderController extends Component {

        render() {

            return (this.props.commentsIsLoading ||
                    this.props.commentIsDeleting ||
                    this.props.commentIsSaving ||
                    this.props.ordersListIsLoading ||
                    this.props.orderIsAccepting
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