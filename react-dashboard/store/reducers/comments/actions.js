import {httpRequest, checkResponse} from '../../../helpers/network';
import * as t from './actionTypes';


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
    type: t.COMMENTS_FETCH_FAIL,
});

export const getComments = () => dispatch => {
    dispatch(commentsFetchRequest());

    httpRequest('getComments')
        .then(res => {
            if (checkResponse(res)) {
                dispatch(commentsFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(commentsFetchFail(err.response.data.error));
        });

};

/*************************************************************************
 * DELETE COMMENT
 *************************************************************************/
const deleteCommentFetchRequest = () => ({
    type: t.DELETE_COMMENT_FETCH_REQUEST
});

const deleteCommentFetchSuccess = (data) => ({
    type: t.DELETE_COMMENT_FETCH_SUCCESS,
    payload: data
});

const deleteCommentFetchFail = () => ({
    type: t.DELETE_COMMENT_FETCH_FAIL,
});

export const deleteComment = (id) => dispatch => {
    dispatch(deleteCommentFetchRequest());

    const data = {id};

    httpRequest('deleteComment', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(deleteCommentFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(deleteCommentFetchFail(err.response.data.error));
        });

};

/*************************************************************************
 * SAVE COMMENT
 *************************************************************************/
const saveCommentFetchRequest = () => ({
    type: t.SAVE_COMMENT_FETCH_REQUEST
});

const saveCommentFetchSuccess = (data) => ({
    type: t.SAVE_COMMENT_FETCH_SUCCESS,
    payload: data
});

const saveCommentFetchFail = () => ({
    type: t.SAVE_COMMENT_FETCH_FAIL,
});

export const saveComment = (data) => dispatch => {
    dispatch(saveCommentFetchRequest());

    httpRequest('saveEditedComment', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(saveCommentFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(saveCommentFetchFail(err.response.data.error));
        });

};