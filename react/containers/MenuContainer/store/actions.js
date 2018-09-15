import {httpRequest, checkResponse} from '../../../helpers/network';
import * as t from './actionTypes';

/*************************************************************************
 * GET MENU LIST
 *************************************************************************/
const menuFetchRequest = () => ({
    type: t.MENU_FETCH_REQUEST
});

const menuFetchSuccess = (data) => ({
    type: t.MENU_FETCH_SUCCESS,
    payload: data
});

const menuFetchFail = (error) => ({
    type: t.MENU_FETCH_FAIL,
    payload: error
});

export const getMenu = () => dispatch => {
    dispatch(menuFetchRequest());

    httpRequest('getMenu')
        .then(res => {
            if (checkResponse(res)) {
                dispatch(menuFetchSuccess(res.data));
            }
        })
        .catch(err => {
            dispatch(menuFetchFail(err.response.data.error));
        });
};