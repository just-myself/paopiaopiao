import * as type from '../constants/actionTypes'

export default  function hot (state={},action){
    switch(action.type){
        case type.HOT+type.REQUEST :
        return Object.assign({},...state,{loading:true})
        case type.HOT+type.SUCCESS:
        return Object.assign({},...state,{loading:false,data:action.response})
        case type.HOT+type.FAILURE:
        return Object.assign({},...state,{loading:false})
        default:
        return state
    }
}