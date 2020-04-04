import * as types from '../Actions/countries/selectCountryType';

const INITIAL_STATE = {
    selectedlistCountries: [],
    loading: false,
    error: null
}

const SelectCountriesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.LOADING:
            return{
                selectedlistCountries: [],
                loading: true,
                error: null
            }
        case types.SUCCESS:
            return{
                selectedlistCountries: action.payload,
                loading: false,
                error: null
            }
        case types.FAILURE:
            return{
                selectedlistCountries: [],
                loading: false,
                error: action.payload
            }
        default: return state;  
    }
}

export default SelectCountriesReducer;