import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    onGetComments, onSaveVote
} from '../../../store/reducers/comment/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            comments: state.comment.comments,
            commentsIsLoading: state.comment.commentsIsLoading,
            commentsLoadingFail: state.comment.commentsLoadingFail,

            commentIsSaving: state.comment.commentIsSaving,

            userLoggedIn: state.user.userLoggedIn
        };
    };

    @connect(
        mapStateToProps,
        {
            onGetComments, onSaveVote
        }
    )
    class CommentsContainer extends Component {


        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            comments: PropTypes.array.isRequired,
            commentsIsLoading: PropTypes.bool.isRequired,
            commentsLoadingFail: PropTypes.bool.isRequired,

            commentIsSaving: PropTypes.bool.isRequired,

            userLoggedIn: PropTypes.bool.isRequired,

            onGetComments: PropTypes.func.isRequired,
            onSaveVote: PropTypes.func.isRequired,
        };
    }


    return CommentsContainer;
}