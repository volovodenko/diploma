import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    onClearErrorMessage
} from '../../../store/reducers/errorMessage/actions';


export default () => Controller => {

    const mapStateToProps = state => ({
        errorMessage: state.errorMessage.message,
    });

    @connect(
        mapStateToProps,
        {
            onClearErrorMessage
        }
    )
    class ErrorMessageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            errorMessage: PropTypes.string.isRequired,

            onClearErrorMessage: PropTypes.func.isRequired,
        };
    }


    return ErrorMessageContainer;
}