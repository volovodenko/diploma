import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getPaymentContent
} from '../../store/reducers/pageContent/actions';



export default () => Controller => {

    const mapStateToProps = state => {
        return {
            paymentContent: state.pageContent.paymentContent,
            paymentContentLoaded: state.pageContent.paymentContentLoaded,
            paymentContentFetchFail: state.pageContent.paymentContentFetchFail,
        };
    };

    @connect(
        mapStateToProps,
        {
            getPaymentContent
        }
    )
    class PaymentPageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            paymentContent: PropTypes.object.isRequired,
            paymentContentLoaded: PropTypes.bool.isRequired,
            paymentContentFetchFail: PropTypes.bool.isRequired,


            getPaymentContent: PropTypes.func.isRequired,
        };
    }


    return PaymentPageContainer;
}