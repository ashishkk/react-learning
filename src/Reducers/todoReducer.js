import * as types from '../Actions/todo/todoActionType';

const INITIAL_STATE = {
    TodoList: [],
    Loading: false,
    err: null
};

const TodoReducer = (state= INITIAL_STATE, action) => {
    switch (action.type){
        case types.TODO_LOADING:
            return{
                ...state,
                Loading: true,
                TodoList: [],
                err: null
            }
        
        case types.TODO_SUCCESS:
            return{
                ...state,
                Loading:false,
                TodoList: action.payload,
                err: null
            }

        case types.TODO_FAILURE:
            return{
                ...state,
                Loading: false,
                TodoList: [],
                err: action.payload
            }

        default: return state
    }
} 
export default TodoReducer