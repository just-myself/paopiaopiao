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
    componentWillReceiveProps(nextProps){
          if(nextProps !== this.props){
              console.log(nextProps)
              this.setState({data:nextProps.hots})
          }
    }
render (){
    //  const {data={}} = this.props.hots.data
    //  console.log(data)
    const {data} = this.state.data
    return (<div style={{marginLeft:'100px'}}>

        {    data && (data.data && (data.data.data.returnValue
    .map(item => {
            console.log(item)
           return( <div key={item.id} style={{content:'',display:'block',clear:'both'}}>
               <video style={{float:'left'}}
               id='video'
               poster={`${item.poster}`}
               preload='auto'
               webkit-playsinline='true'
               x-webkit-airplay='allow'
               width='200'
               height='180'
               src={item.preview.length>0 ? `${item.preview[0].iphoneUrl}`:''}
               >

               </video>
               <div style={{float:'left'}}>
                <p>{item.showName}</p>
                <span>{item.highlight}</span> 
               </div>
  
            </div>
           )
        })))
        }
    </div>)
}
} 
export default connect((state)=>( {hots:state.hot}),{hot})(Hot)