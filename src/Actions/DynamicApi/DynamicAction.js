import * as types from './DynamicType';
import Axios from 'axios';

const LoadingApi = () => ({
    type: types.LOADING
})


const SuccessApi = (data) =>({
    type: types.SUCCESS,
    payload: data
})

const FailureApi = (error) =>({
    type: types.FAILURE,
    payload: error
})

export const getAPICall = (id) => dispatch => {
    dispatch(LoadingApi());
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

    Axios.get(URL)
    .then(result=> {
        dispatch(SuccessApi(result.data))
    }).catch(error => {
        dispatch(FailureApi(error))
    });
}