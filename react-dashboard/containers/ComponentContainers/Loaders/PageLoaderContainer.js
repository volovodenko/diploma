import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            commentsIsLoading: state.comments.commentsIsLoading,
            commentIsDeleting: state.comments.commentIsDeleting,
            commentIsSaving: state.comments.commentIsSaving,

            ordersListIsLoading: state.orders.ordersListIsLoading,
            orderIsLoading: state.orders.orderIsLoading,
            orderIsAccepting: state.orders.orderIsAccepting
        };
    };

    @connect(
        mapStateToProps,
        null
    )
    class LoaderContainer extends Component {


        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            commentsIsLoading: PropTypes.bool.isRequired,
            commentIsDeleting: PropTypes.bool.isRequired,
            commentIsSaving: PropTypes.bool.isRequired,

            ordersListIsLoading: PropTypes.bool.isRequired,
            orderIsLoading: PropTypes.bool.isRequired,
            orderIsAccepting: PropTypes.bool.isRequired,
        };
    }


    return LoaderContainer;
}