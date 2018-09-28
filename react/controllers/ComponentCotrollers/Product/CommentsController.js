import React, {Component} from 'react';


import FetchFail from '../../../components/FetchFail';
import CommentsContainer from '../../../containers/ComponentContainers/Product/CommentsContainer';


export default () => View => {

    @CommentsContainer()
    class CommentsController extends Component {

        constructor(props) {
            super(props);

            this.state = {
                comments: []
            };
        }

        static getDerivedStateFromProps(props) {
            if (props.commentsLoadingFail) {
                return null;
            }

            const comments = props.comments.find(item => item.productId === props.productId);

            if (!comments) {

                if (!props.commentsIsLoading) {
                    props.onGetComments(props.productId);
                }

                return null;
            }

            return {
                //сортируем по дате(id) вниз
                comments: comments.comments.sort((item1, item2) => item2.id - item1.id)
            }
        }

        shouldComponentUpdate(nextProps){
            //если на странице пользователь залогинился - обновить коменты
            if (nextProps.userLoggedIn && !this.props.userLoggedIn){
                this.props.onGetComments(this.props.productId);
                return false;
            }

            return true;
        }


        render() {
            if (this.props.commentsLoadingFail) {
                return <FetchFail/>
            }

            return <View
                comments={this.state.comments}
                userLoggedIn={this.props.userLoggedIn}
                saveVote={::this.saveVote}
                commentIsSaving={this.props.commentIsSaving}
                commentsIsLoading={this.props.commentsIsLoading}
            />


        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/

        saveVote = (commentId, vote) => () => {

            //если пользователь не залогинился - ничего не отправлять
            if (!this.props.userLoggedIn){
                return;
            }

            this.props.onSaveVote({
                productId: this.props.productId,
                vote,
                comment_id: commentId
            });
        };

        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/
    }

    return CommentsController;

}