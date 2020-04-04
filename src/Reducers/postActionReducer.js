import * as types from '../Actions/postActions/postActionType'

const INITIALSTATE = {
    PostList: [],
    Loading: false,
    error: null
};

const PostReducer = (state = INITIALSTATE, action) => {

    switch (action.type) {
        case types.FETCH_POST_LOADING:
            return {
                ...state,
                Loading: true,
                PostList: [],
                error: null
            }
        case types.FETCH_POST_SUCCESS:
            return {
                ...state,
                Loading: false,
                PostList: action.payload,
                error:null
            }
        case types.FETCH_POST_FAILURE:
            return {
                ...state,
                Loading: false,
                error: action.payload
            }

        default:
            return state
    }




}

export default PostReducer