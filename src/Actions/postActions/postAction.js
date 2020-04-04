import * as types from './postActionType'
import Axios from 'axios';

const fetchPostLoading = () => ({
    type: types.FETCH_POST_LOADING
})

const fetchPostSuccess = (data) => ({
    type:types.FETCH_POST_SUCCESS,
    payload:data
})

const fetchPostFailure = (error) => ({
    type: types.FETCH_POST_FAILURE,
    payload:error

})

export const fetchPostList = () => dispatch => {
    dispatch(fetchPostLoading());
    const url = 'https://jsonplaceholder.typicode.com/posts';
    Axios.get(url)
    .then(res => {
        dispatch(fetchPostSuccess(res.data))
    })
    .catch(error => {
        dispatch(fetchPostFailure(error))
    })
}

