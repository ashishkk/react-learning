import {LOGIN} from '../Actions/login/loginActionType'
import {userProfileData} from '../components/login/loginData'
const initialState = {
    loginData: userProfileData,
    userData:[]
}


const LoginReducer = (state=initialState, action) => {
    console.log("action", action)


    switch(action.type){
        case LOGIN:
            let userData = state.loginData.filter((item, i) => item.email === action.payload.email && item.password === action.payload.password)
            return {...state, userData}
        default:
            return state
    }

}

export default LoginReducer;