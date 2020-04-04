import * as types from '../Actions/DynamicApi/DynamicType';

const INITIAL_STATE = {
    post: [],
    loading: false,
    error: null
};

const DynamicApiReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case types.LOADING:
            return{
                post:[],
                loading:true,
                error:null
            }
        case types.SUCCESS:
            return{
                post:action.payload,
                loading:false,
                error:null
            }
        case types.FAILURE:
            return{
                post:[],
                loading:false,
                error:action.error
            }
        default: return state;
    }
}
export default DynamicApiReducer;