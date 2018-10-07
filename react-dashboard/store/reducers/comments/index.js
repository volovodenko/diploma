import initialState from './initialState';
import * as t from './actionTypes';

export default function (stateStore = initialState, action) {

    switch (action.type) {

        case t.COMMENTS_FETCH_REQUEST:
            return {
                ...stateStore,
                commentsIsLoading: true,
            };

        case t.COMMENTS_FETCH_SUCCESS:
            return {
                ...stateStore,
                comments: action.payload,
                commentsIsLoading: false,
                commentsLoaded: true
            };

        case t.COMMENTS_FETCH_FAIL:
            return {
                ...stateStore,
                commentsIsLoading: false,
                commentsLoadingFail: true,
            };

        /****************************************************************************/
        case t.DELETE_COMMENT_FETCH_REQUEST:
            return {
                ...stateStore,
                commentIsDeleting: true,
            };

        case t.DELETE_COMMENT_FETCH_SUCCESS:
            return {
                ...stateStore,
                comments: action.payload,
                commentIsDeleting: false,
                commentDeleted: true
            };

        case t.DELETE_COMMENT_FETCH_FAIL:
            return {
                ...stateStore,
                commentIsDeleting: false,
                commentDeleteFail: true,
            };

        /****************************************************************************/
        case t.SAVE_COMMENT_FETCH_REQUEST:
            return {
                ...stateStore,
                commentIsSaving: true,
                commentSaved: false
            };

        case t.SAVE_COMMENT_FETCH_SUCCESS: {

            return {
                ...stateStore,
                comments: action.payload,
                commentIsSaving: false,
                commentSaved: true
            };
        }


        case t.SAVE_COMMENT_FETCH_FAIL:
            return {
                ...stateStore,
                commentIsSaving: false,
                commentSaveFail: true,
            };

        /****************************************************************************/
        default:
            return stateStore;
    }

}
