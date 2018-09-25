import React, {Component} from 'react';


import PaymentTabContainer from '../../../containers/ComponentContainers/Checkout/PaymentTabContainer';


export default () => View => {

    @PaymentTabContainer()
    class PaymentTabController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.state = {
                paymentId: this.props.paymentId,
                payment: this.props.payment,
                paymentHeader: null,
                paymentInfo: null
            };
        }


        static getDerivedStateFromProps(props, state) {

            if (props.paymentsDataLoaded) {
                let payment = state.payment;
                let paymentId = state.paymentId;


                if (!state.payment.length) {
                    payment = props.paymentsData[0].type;
                    paymentId = props.paymentsData[0].id;
                }

                const selectedPayment = props.paymentsData.find(item => item.type === payment);

                if (!selectedPayment) {
                    return {
                        paymentId,
                        payment
                    }
                }


                let paymentHeader = state.paymentHeader;
                let paymentInfo = state.paymentInfo;

                if (!state.paymentHeader) {
                    paymentHeader = selectedPayment.header;
                }

                if (!state.paymentInfo) {
                    paymentInfo = selectedPayment.payment_info;
                }

                return {
                    paymentId,
                    payment,
                    paymentHeader,
                    paymentInfo,
                }
            }

            return null;
        }


        componentWillUnmount() {
            if (this.props.payment !== this.state.payment) {
                const data = {
                    paymentId: this.state.paymentId,
                    payment: this.state.payment
                };

                this.props.onSavePaymentTab(data);
            }

        }


        render() {
            return this.props.paymentsDataLoaded ?
                <View
                    //From PaymentTabController (Local)
                    paymentsData={this.props.paymentsData}
                    payment={this.state.payment}
                    paymentHeader={this.state.paymentHeader}
                    paymentInfo={this.state.paymentInfo}
                    setPayment={::this.setPayment}
                    sumTotal={this.props.sumTotal}


                    //From CheckoutPageController
                    prevPage={this.props.prevPage}
                    nextPage={this.props.nextPage}
                />
                : null

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        setPayment = (payment) => () => {
            if (payment.type !== this.state.payment) {
                this.setState(() => ({
                    paymentId: payment.id,
                    payment: payment.type,
                    paymentHeader: payment.header,
                    paymentInfo: payment.payment_info
                }));
            }
        };

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return PaymentTabController;

}