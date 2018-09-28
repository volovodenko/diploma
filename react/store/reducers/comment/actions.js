import {httpRequest, checkResponse} from '../../../helpers/network';
import * as t from './actionTypes';

/*************************************************************************
 * SAVE COMMENT
 *************************************************************************/
const saveCommentRequest = () => ({
    type: t.SAVE_COMMENT_REQUEST
});

const saveCommentSuccess = (data) => ({
    type: t.SAVE_COMMENT_SUCCESS,
    payload: data
});

const saveCommentFail = () => ({
    type: t.SAVE_COMMENT_FAIL
});


export const onSaveComment = (data) => dispatch => {
    dispatch(saveCommentRequest());

    httpRequest('saveComment', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(saveCommentSuccess({
                    productId: data.product_id,
                    comments: res.data
                }));
            }
        })
        .catch(err => {
            dispatch(saveCommentFail(err.response.data.error));
        });
};

/*************************************************************************
 * GET COMMENTS
 *************************************************************************/
const commentsFetchRequest = () => ({
    type: t.COMMENTS_FETCH_REQUEST
});

const commentsFetchSuccess = (data) => ({
    type: t.COMMENTS_FETCH_SUCCESS,
    payload: data
});

const commentsFetchFail = () => ({
    type: t.COMMENTS_FETCH_FAIL
});


export const onGetComments = (productId) => dispatch => {
    dispatch(commentsFetchRequest());

    httpRequest(`getComments/${productId}`)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(commentsFetchSuccess({
                    productId,
                    comments: res.data
                }));
            }
        })
        .catch(err => {
            dispatch(commentsFetchFail(err.response.data.error));
        });
};


/*************************************************************************
 * SAVE VOTE
 *************************************************************************/
const saveVoteRequest = () => ({
    type: t.SAVE_VOTE_REQUEST
});

const saveVoteSuccess = (data) => ({
    type: t.SAVE_VOTE_SUCCESS,
    payload: data
});

const saveVoteFail = () => ({
    type: t.SAVE_VOTE_FAIL
});


export const onSaveVote = (data) => dispatch => {
    dispatch(saveVoteRequest());

    httpRequest('saveVote', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                if (res.data.message === 'success'){
                    dispatch(saveVoteSuccess(data));
                }
            }
        })
        .catch(err => {
            dispatch(saveVoteFail(err.response.data.error));
        });
};