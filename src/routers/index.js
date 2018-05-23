import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Movie from '../pages/movie/movie'
import Cinema from '../pages/cinema/cinema'
import Mine from '../pages/mine/mine'
import NotFound from '../pages/notfound'
export default  class RouterIndex extends React.Component{
    render(){
        return (
             <Switch>
                <Route path='/' exact render={()=>(<Redirect to='/movie' />)}/>
                <Route path='/movie' component={Movie}/>
                <Route path='/cinema' component={Cinema}/>
                 <Route path='/mine' component={Mine}/>
                 <Route path='*' component={NotFound}/>        
             </Switch>
            
              
        )
    }
}