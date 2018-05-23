import * as type from '../constants/actionTypes'
import createReducer from './creator'

 const hot = createReducer({},{
        [type.HOT+type.REQUEST](state,action){
         return {...state,loading:true}
        },
        [type.HOT+type.SUCCESS](state,action){
         return {...state,loading:false}
        },
        [type.HOT+type.FAILURE](state,action){
        return {...state,loading:false}
        }
 })
export default hot