import React, {Component} from 'react';


import FinishTabContainer from '../../../containers/ComponentContainers/Checkout/FinishTabContainer';


export default () => View => {

    @FinishTabContainer()
    class FinishTabController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку
        }


        shouldComponentUpdate(nextProps) {
            if (nextProps.orderDataSent) {
                this.props.nextPage();
                return false;
            }

            return true;
        }


        render() {
            this.selfDelivery = this.props.deliveryMethod.toLowerCase().includes('самовывоз');

            return <View
                //From FinishTabController (Local)
                phone={this.props.phone}
                fio={this.props.fio}
                comment={this.props.comment}

                payment={this.props.payment}

                email={this.props.email}
                deliveryMethod={this.props.deliveryMethod}
                transporter={this.props.transporter}
                deliveryAddress={this.props.deliveryAddress}
                deliveryWarehouse={this.props.deliveryWarehouse}

                selfDelivery={this.selfDelivery}

                //From CheckoutPageController
                prevPage={this.props.prevPage}
                nextPage={::this.nextPage}
                activePage={this.props.activePage}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        nextPage() {
            const order = this.props.cart.map(item => ({
                id: item.id,
                price: item.price,
                buyQuantity: item.buyQuantity
            }));


            const data = {
                order,
                sumTotal: this.props.sumTotal,

                phone: this.props.phone,
                fio: this.props.fio,
                comment: this.props.comment,

                paymentId: this.props.paymentId,
                email: this.props.email,

                deliveryMethodId: this.props.deliveryMethodId,
                transporterId: this.selfDelivery ? '' : this.props.transporterId,

                deliveryCity: this.selfDelivery ? '' : this.props.deliveryAddress,
                deliveryCityRef: this.selfDelivery ? '' : this.props.deliveryAddressRef,
                deliveryWarehouse: this.selfDelivery ? '' : this.props.deliveryWarehouse,
                deliveryWarehouseRef: this.selfDelivery ? '' : this.props.deliveryWarehouseRef,
            };


            this.props.sendFinishTabData(data);
            this.props.onRefreshUserDetail();
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return FinishTabController;

}