import { REQUEST, SUCCESS, FAILURE } from '../constants/actionTypes' 
export default function callAPIMiddleware ({dispatch, getState}) {
return function(next){
    return function(action) {
        console.log(action,1111)
        const {actionType, callAPI} = action
    //   if(!actionType){
    //       return next(action)
    //   }

      const requestType = actionType + REQUEST
      const successType = actionType + SUCCESS 
      const failureType = actionType + FAILURE
    //   dispatch({type : requestType})
    // fetch('http://localhost:8084/movie/hot/?city=bj').then(re=>{
    //     console.log(re)
    // })
      if(callAPI){
          console.log(callAPI)
          return callAPI.then(response => {
              console.log(response)
          })
      }
 }
}

}