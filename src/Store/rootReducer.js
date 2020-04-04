import {combineReducers} from 'redux';
import LoginReducer from '../Reducers/loginReducer';
import PostReducer from '../Reducers/postActionReducer';
import TodoReducer from '../Reducers/todoReducer';
import DynamicReducer from "../Reducers/DynamicReducer";
import CountriesReducer from '../Reducers/CountriesReducer';
import SelectCountriesReducer from '../Reducers/SelectCountryReducer';

const rootReducer = combineReducers({
    LoginReducer,
    PostReducer,
    TodoReducer,
    DynamicReducer,
    CountriesReducer,
    SelectCountriesReducer
})

export default rootReducer;