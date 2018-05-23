// import * as type from  '../constants/actionTypes'
import {HOT} from '../constants/actionTypes'
export function hot () {
    return{
        actionType: HOT,
        callAPI:fetch('http://localhost:8084/movie/hot/?city=bj')
    }
}