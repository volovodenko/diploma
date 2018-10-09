import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {
    getComments, deleteComment, saveComment
} from '../../store/reducers/comments/actions';


export default () => Controller => {

    const mapStateToProps = state => {
        return {
            comments: state.comments.comments,
            commentsLoaded: state.comments.commentsLoaded,
            commentSaved: state.comments.commentSaved,
            commentIsSaving: state.comments.commentIsSaving
        };
    };

    @connect(
        mapStateToProps,
        {
            getComments, deleteComment, saveComment
        }
    )
    class CommentsPageContainer extends Component {

        render() {
            return <Controller {...this.props}/>
        }


        static propTypes = {
            comments: PropTypes.array.isRequired,
            commentsLoaded: PropTypes.bool.isRequired,
            commentSaved: PropTypes.bool.isRequired,
            commentIsSaving: PropTypes.bool.isRequired,

            getComments: PropTypes.func.isRequired,
            deleteComment: PropTypes.func.isRequired,
            saveComment: PropTypes.func.isRequired,
        };
    }


    return CommentsPageContainer;
}