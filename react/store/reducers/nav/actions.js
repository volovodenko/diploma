import * as t from './actionTypes';

/*************************************************************************
 * SAVE HISTORY SLUG
 *************************************************************************/
const saveSlug = (data) => ({
    type: t.SAVE_HISTORY_SLUG,
    payload: data
});

export const onSaveHistorySlug = (data) => dispatch => {
    dispatch(saveSlug(data));
};

/*************************************************************************
 * SAVE HISTORY TITLE
 *************************************************************************/
const saveTitle = (data) => ({
    type: t.SAVE_HISTORY_TITLE,
    payload: data
});

export const onSaveHistoryTitle = (data) => dispatch => {
    dispatch(saveTitle(data));
};