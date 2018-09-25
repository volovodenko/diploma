import React, {Component} from 'react';


import ConclusionTabContainer from '../../../containers/ComponentContainers/Checkout/ConclusionTabContainer';


export default () => View => {

    @ConclusionTabContainer()
    class ConclusionTabController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.state = {
                selfDelivery: this.props.deliveryMethod.toLowerCase().includes('самовывоз'),
                payment: this.props.payment,
                sumTotal: this.props.sumTotal,
                orderNumber: this.props.orderNumber
            };

            this.props.onClearCart();
        }


        render() {

            return <View
                //From ConclusionTabController (Local)
                payment={this.state.payment}
                selfDelivery={this.state.selfDelivery}
                sumTotal={this.state.sumTotal}
                orderNumber={this.state.orderNumber}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return ConclusionTabController;

}