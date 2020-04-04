import {combineReducers} from 'redux';
import LoginReducer from '../Reducers/loginReducer';
import PostReducer from '../Reducers/postActionReducer';
import TodoReducer from '../Reducers/todoReducer';
import DynamicReducer from "../Reducers/DynamicReducer";

const rootReducer = combineReducers({
    LoginReducer,
    PostReducer,
    TodoReducer,
    DynamicReducer
})

export default rootReducer;