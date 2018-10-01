import {httpRequest, checkResponse} from '../../../helpers/network';
import * as t from './actionTypes';


/*************************************************************************
 * GET SEARCH LIST
 *************************************************************************/
const searchListFetchRequest = () => ({
    type: t.SEARCH_FETCH_REQUEST
});

const searchListFetchSuccess = (data) => ({
    type: t.SEARCH_FETCH_SUCCESS,
    payload: data
});

const searchListFetchFail = (error) => ({
    type: t.SEARCH_FETCH_FAIL,
    payload: error
});

export const onGetSearch = (data) => dispatch => {
    dispatch(searchListFetchRequest());

    httpRequest('getSearch', 'POST', data)
        .then(res => {
            if (checkResponse(res)) {
                dispatch(searchListFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(searchListFetchFail(err.response.data.error));
        });
};

/*************************************************************************
 * CLEAR SEARCH LIST
 *************************************************************************/
const clearSearchList = () => ({
    type: t.CLEAR_SEARCH_LIST
});

export const clearSearch = () => dispatch => {
    dispatch(clearSearchList());
};