import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Hot from '../components/movie/hot'
import Coming from '../components/movie/coming'
export default  class RouterMovie extends React.Component{
    render(){
        return (
             <Switch>
                <Route exact path='/movie/' render={()=> <Redirect to='/movie/hot/'/> }/>
                <Route path='/movie/hot/' component={Hot}/>
                <Route path='/movie/coming/' component={Coming}/>     
             </Switch>
            
              
        )
    }
}