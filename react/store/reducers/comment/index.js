import initialState from './initialState';
import * as t from './actionTypes';


export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.SAVE_COMMENT_REQUEST:
            return {
                ...stateStore,
                commentIsSaving: true
            };
        case t.SAVE_COMMENT_SUCCESS: {
            const productId = action.payload.productId;

            //если коментов для даного продукта нет в сторе
            if (!stateStore.comments.some(item => item.productId === productId)) {

                return {
                    ...stateStore,
                    comments: [...stateStore.comments, action.payload],
                    commentIsSaving: false,
                    commentSaved: true
                };
            }

            const comments = stateStore.comments.map(item => {
                if (item.productId === productId) {
                    item.comments = action.payload.comments;
                }

                return item;
            });


            return {
                ...stateStore,
                comments,
                commentIsSaving: false,
                commentSaved: true
            };
        }

        case t.SAVE_COMMENT_FAIL:
            return {
                ...stateStore,
                commentIsSaving: false
            };

        /****************************************************************************/
        case t.COMMENTS_FETCH_REQUEST:
            return {
                ...stateStore,
                commentsIsLoading: true,
                commentsLoaded: false,
                commentsLoadingFail: false
            };

        case t.COMMENTS_FETCH_SUCCESS: {
            const productComments = stateStore.comments.find(item => item.productId === action.payload.productId);

            if (!productComments) {
                return {
                    ...stateStore,
                    comments: [...stateStore.comments, action.payload],
                    commentsIsLoading: false,
                    commentsLoaded: true
                };
            }

            const comments = stateStore.comments.map(item => {
                if (item.productId === action.payload.productId) {
                    item.comments = [...action.payload.comments];
                }

                return item
            });


            return {
                ...stateStore,
                comments,
                commentsIsLoading: false,
                commentsLoaded: true
            };

        }

        case t.COMMENTS_FETCH_FAIL:
            return {
                ...stateStore,
                commentsIsLoading: false,
                commentsLoadingFail: true
            };


        /****************************************************************************/
        case t.SAVE_VOTE_REQUEST:
            return {
                ...stateStore,
                voteIsSaving: true,
            };
        case t.SAVE_VOTE_SUCCESS: {

            const productComments = stateStore.comments.find(item => item.productId === action.payload.productId);

            if (!productComments) {
                return {
                    ...stateStore,
                    voteIsSaving: false,
                };
            }

            const currentComment = productComments.comments.find(item => item.id === action.payload.comment_id);

            if (!currentComment) {
                return {
                    ...stateStore,
                    voteIsSaving: false,
                };
            }


            if (action.payload.vote === 'up') {
                //если голос есть - снимаем, если нет - устанавливаем
                currentComment.votes.votesUp = currentComment.votes.currentUserVoteUp
                    ? --currentComment.votes.votesUp
                    : ++currentComment.votes.votesUp;
                currentComment.votes.votesDown = currentComment.votes.currentUserVoteDown
                    ? --currentComment.votes.votesDown
                    : currentComment.votes.votesDown;

                currentComment.votes.currentUserVoteUp = !currentComment.votes.currentUserVoteUp;
                currentComment.votes.currentUserVoteDown = false;
            }

            if (action.payload.vote === 'down') {
                //если голос есть - снимаем, если нет - устанавливаем
                currentComment.votes.votesDown = currentComment.votes.currentUserVoteDown
                    ? --currentComment.votes.votesDown
                    : ++currentComment.votes.votesDown;
                currentComment.votes.votesUp = currentComment.votes.currentUserVoteUp
                    ? --currentComment.votes.votesUp
                    : currentComment.votes.votesUp;

                currentComment.votes.currentUserVoteUp = false;
                currentComment.votes.currentUserVoteDown = !currentComment.votes.currentUserVoteDown;
            }

            const comments = stateStore.comments.map(item => {
                if (item.id === action.payload.productId) {
                    item.comments = item.comments.map(item =>
                        item.id === action.payload.comment_id
                            ? currentComment
                            : item
                    );
                }

                return item;
            });


            return {
                ...stateStore,
                comments,
                voteIsSaving: false,
                voteSaved: true
            };
        }

        case t.SAVE_VOTE_FAIL:
            return {
                ...stateStore,
                voteIsSaving: false,
            };


        /****************************************************************************/

        default:
            return stateStore;
    }

}
