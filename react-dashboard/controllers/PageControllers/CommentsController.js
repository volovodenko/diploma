import React, {Component} from 'react';


import CommentsContainer from '../../containers/PageContainers/CommentsContainer';
import {COMMENT_MAX_LENGTH} from '../../../react/config';


export default () => View => {

    @CommentsContainer()
    class CommentsController extends Component {

        constructor(props) {
            super(props);

            window.scrollTo(0, 0); //обнулить прокрутку

            this.props.commentsLoaded || this.props.getComments();

            this.state = {
                editCommentId: null,
                comment: null,
                symbolsLeft: COMMENT_MAX_LENGTH
            };

            this.commentRef = React.createRef();
        }


        shouldComponentUpdate(nextProps) {
            if (nextProps.commentSaved && this.props.commentIsSaving) {
                this.cancelEdit();
            }

            return true;
        }


        render() {

            return <View
                comments={this.props.comments}
                deleteComment={::this.deleteComment}
                editComment={::this.editComment}
                editCommentId={this.state.editCommentId}
                comment={this.state.comment}
                commentRef={this.commentRef}
                onChangeComment={::this.onChangeComment}
                symbolsLeft={this.state.symbolsLeft}
                cancelEdit={::this.cancelEdit}
                saveComment={::this.saveComment}
                keyDown={::this.keyDown}
            />

        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        deleteComment = (id) => () => {
            const c = confirm('Вы действительно хотите удалить комментарий?');

            c && this.props.deleteComment(id);
        };


        editComment = (id, comment) => () => {
            this.setState(() => ({
                editCommentId: id,
                comment,
                symbolsLeft: COMMENT_MAX_LENGTH - comment.length
            }))
        };


        onChangeComment() {
            const comment = this.commentRef.current.value;
            const textLength = comment.trim().length;

            this.setState(() => ({
                comment,
                symbolsLeft: COMMENT_MAX_LENGTH - textLength
            }))
        }


        cancelEdit() {
            this.setState(() => ({
                editCommentId: null,
                comment: null,
                symbolsLeft: COMMENT_MAX_LENGTH
            }))
        }


        saveComment() {
            if (this.state.symbolsLeft < COMMENT_MAX_LENGTH && this.state.symbolsLeft >= 0) {
                const data = {
                    id: this.state.editCommentId,
                    comment: this.state.comment.trim()
                };

                this.props.saveComment(data);
            }
        }


        keyDown(e) {
            if (e.keyCode === 13) {
                this.saveComment();
            }
        }

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CommentsController;

}