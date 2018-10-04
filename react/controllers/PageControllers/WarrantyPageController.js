import React, {Component} from 'react';


import FetchFail from '../../components/FetchFail';
import WarrantyPageContainer from '../../containers/PageContainers/WarrantyPageContainer';


export default () => View => {

    @WarrantyPageContainer()
    class WarrantyPageController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.props.warrantyContentLoaded || this.props.getWarrantyContent();
        }


        render() {

            if (this.props.warrantyContentFetchFail) {
                return <FetchFail/>;
            }

            return <View
                warrantyContent={this.props.warrantyContent}
                warrantyContentLoaded={this.props.warrantyContentLoaded}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return WarrantyPageController;

}