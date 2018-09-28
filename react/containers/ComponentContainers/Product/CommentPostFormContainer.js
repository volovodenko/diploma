import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    onSaveComment
} from '../../../store/reducers/comment/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            userLoggedIn: state.user.userLoggedIn,
        };
    };

    @connect(
        mapStateToProps,
        {
            onSaveComment
        }
    )
    class CommentPostFormContainer extends Component {


        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            userLoggedIn: PropTypes.bool.isRequired,

            onSaveComment: PropTypes.func.isRequired,
        };
    }


    return CommentPostFormContainer;
}