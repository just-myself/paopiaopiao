import React from 'react'
import {connect} from 'react-redux'
import { hot } from '../../action/hot'
class Hot extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            city:'',
            data:{},
            errno:0,
            msg:''
        }
    }
    componentDidMount () {  
            this.props.hot()
    }
    onLoading () {

        // fetch('http://localhost:8084/movie/hot/?city=bj')
        // .then(res=> res.json())
        // .then(res=>{
        //     this.setState({
        //          city:res.city,
        //          data:res.data,
        //          errno:res.errno,
        //          msg:res.msg
        //     })
        // }) 

    }
render (){
    return (<div>
        <h1>电影1</h1>
        {this.state.data && this.state.data.data && this.state.data.data.returnValue.map(item => {
           return( <div>
                <span>{item.showName}</span>
                <span>{item.highlight}</span>   
            </div>
           )
        })
        }
    </div>)
}
} 
export default connect((state)=> {return state},{hot})(Hot)