import * as types from './selectCountryType';
import Axios from 'axios'

const selectCountyLoading = () => ({
    type: types.LOADING
})

const selectCountySuccess = (data) => ({
    type: types.SUCCESS,
    payload: data
})

const selectCountyFaliure = (error) => ({
    type: types.FAILURE,
    payload: error
})

export const getSelectCountryList = (val) => dispatch => { debugger
    dispatch(selectCountyLoading());
    const URL = `https://restcountries.eu/rest/v2/name/${val}?fulltext=true`;

    Axios.get(URL)
    .then(res => {
        dispatch(selectCountySuccess(res.data))
    })
    .catch(error => {
        dispatch(selectCountyFaliure(error))
    })
}