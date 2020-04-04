import {LOGIN} from './loginActionType';

export const getLogin = (value) => {
    return {
        type: LOGIN,
        payload: value
    }
}

// export const getSubmit = (val) => {
//     return{
//         type: SUBMIT,
//         payload: val
//     }
// }
