import * as types from './countriesType';
import Axios from 'axios';

const LoadCountries = () => ({
    type: types.LOADING
})

const SuccessCountries = (data) => ({
    type: types.SUCCESS,
    payload: data
})

const FailureCountries = (error) => ({
    type: types.FAILURE,
    payload: error
})

export const getCountriesList = () => dispatch => {
    dispatch(LoadCountries());
    const URL = `https://restcountries.eu/rest/v2/all`;
    
    Axios.get(URL)
    .then(res => {
        dispatch(SuccessCountries(res.data))
    })
    .catch(error => {
        dispatch(FailureCountries(error))
    })
}