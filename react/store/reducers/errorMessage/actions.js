import * as t from './actionTypes';

/*************************************************************************
 * SAVE ERROR MESSAGE
 *************************************************************************/
const saveErrorMessage = (error) => ({
    type: t.SAVE_ERROR_MESSAGE,
    payload: error
});

export const onSaveErrorMessage = (error) => dispatch => {
    dispatch(saveErrorMessage(error));
};

/*************************************************************************
 * CLEAR ERROR MESSAGE
 *************************************************************************/
const clearErrorMessage = () => ({
    type: t.CLEAR_ERROR_MESSAGE,
});

export const onClearErrorMessage = () => dispatch => {
    dispatch(clearErrorMessage());
};
