import * as type from  '../constants/actionTypes'
// import {HOT} from '../constants/actionTypes'
export function hot (params) {
    return{
        actionType: type.HOT,
        callAPI:fetch('http://localhost:8084/movie/hot/?city=bj'),
        data:params || {}
    }
}