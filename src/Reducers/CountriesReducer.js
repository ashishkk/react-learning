import * as types from '../Actions/countries/countriesType';

const INITIAL_STATE = {
    listCountries: [],
    loading: false,
    error: null
}

const CountriesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.LOADING:
            return{
                listCountries: [],
                loading: true,
                error: null
            }
        case types.SUCCESS:
            return{
                listCountries: action.payload,
                loading: false,
                error: null
            }
        case types.FAILURE:
            return{
                listCountries: [],
                loading: false,
                error: action.payload
            }
        default: return state;  
    }
}

export default CountriesReducer;