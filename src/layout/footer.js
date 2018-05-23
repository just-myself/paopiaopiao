import React from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends React.Component{
    render(){
        return (
            <div>
                 <Link to='/movie'>电影</Link>
                 <Link to='/cinema'>电影院</Link>
               <Link to='/mine'>个人中心</Link>                
            </div>
        )
    }
}