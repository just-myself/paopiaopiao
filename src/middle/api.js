import * as type from '../constants/actionTypes' 
export default function callAPIMiddleware ({dispatch, getState}) {
return function(next){
    return function(action) {
        console.log(action)
        const {actionType, callAPI, data} = action
      if(!actionType){
      return next(action)
      }
      const requestType = actionType + type.REQUEST
      const successType = actionType + type.SUCCESS 
      const failureType = actionType + type.FAILURE
      console.log(requestType,successType)
    //   fetch('http://localhost:8084/movie/hot/?city=bj').then(res=>{return res.json()}).then(resposes=>{console.log(resposes)})
      dispatch({type: requestType})
      if(callAPI){
          return callAPI.then(response =>
           {return  response.json()}).then(res=>{
               console.log(res)
                 dispatch({response: res,type: successType})
                }
      
      )
 }
    }
    }
}