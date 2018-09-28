import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getWarrantyContent
} from '../../store/reducers/pageContent/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            warrantyContent: state.pageContent.warrantyContent,
            warrantyContentLoaded: state.pageContent.warrantyContentLoaded,
            warrantyContentFetchFail: state.pageContent.warrantyContentFetchFail,
        };
    };

    @connect(
        mapStateToProps,
        {
            getWarrantyContent
        }
    )
    class WarrantyPageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            warrantyContent: PropTypes.object.isRequired,
            warrantyContentLoaded: PropTypes.bool.isRequired,
            warrantyContentFetchFail: PropTypes.bool.isRequired,


            getWarrantyContent: PropTypes.func.isRequired,
        };
    }


    return WarrantyPageContainer;
}