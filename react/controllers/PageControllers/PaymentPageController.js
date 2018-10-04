import React, {Component} from 'react';


import FetchFail from '../../components/FetchFail';
import PaymentPageContainer from '../../containers/PageContainers/PaymentPageContainer';


export default () => View => {

    @PaymentPageContainer()
    class PaymentPageController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.props.paymentContentLoaded || this.props.getPaymentContent();
        }


        render() {

            if (this.props.paymentContentFetchFail) {
                return <FetchFail/>;
            }

            return <View
                paymentContent={this.props.paymentContent}
                paymentContentLoaded={this.props.paymentContentLoaded}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return PaymentPageController;

}