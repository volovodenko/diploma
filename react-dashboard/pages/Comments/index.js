import React, {Component} from 'react';


import styles from './styles.scss';
import CommentsList from '../../components/Pages/Comments/CommentsList';
import CommentsPageController from '../../controllers/PageControllers/CommentsPageController';
import PageLoader from '../../components/Loaders/PageLoader';


@CommentsPageController()
export default class CommentsPage extends Component {

    render() {

        return (
            <div className={styles.comments}>
                <h1>Отзывы пользователей</h1>

                <CommentsList
                    comments={this.props.comments}
                    editCommentId={this.props.editCommentId}
                    commentRef={this.props.commentRef}
                    onChangeComment={this.props.onChangeComment}
                    comment={this.props.comment}
                    keyDown={this.props.keyDown}
                    symbolsLeft={this.props.symbolsLeft}
                    cancelEdit={this.props.cancelEdit}
                    saveComment={this.props.saveComment}
                    deleteComment={this.props.deleteComment}
                    editComment={this.props.editComment}
                />

                <PageLoader styles={styles}/>
            </div>

        );

    }

}