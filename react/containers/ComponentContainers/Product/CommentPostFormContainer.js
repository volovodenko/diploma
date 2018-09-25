import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            userLoggedIn: state.user.userLoggedIn,
        };
    };

    @connect(
        mapStateToProps,
        null
    )
    class CommentPostFormContainer extends Component {


        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            userLoggedIn: PropTypes.bool.isRequired,
        };
    }


    return CommentPostFormContainer;
}