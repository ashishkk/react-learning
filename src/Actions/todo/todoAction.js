import * as types from './todoActionType'
import Axios from 'axios'

const TodoLoading = () => ({
    type: types.TODO_LOADING
});

const TodoSuccess = (data) => ({
    type: types.TODO_SUCCESS,
    payload: data
});

const TodoFailure = (err) => ({
    type: types.TODO_FAILURE,
    payload: err
});

export const TODO_LIST = () => dispatch => {
    dispatch(TodoLoading());
    const URL = 'https://jsonplaceholder.typicode.com/todos';
    Axios.get(URL)
    .then(res => {
        dispatch(TodoSuccess(res.data))
    })
    .catch(err => {
        dispatch(TodoFailure(err))
    })
}