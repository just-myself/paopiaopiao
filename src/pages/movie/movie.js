import React from 'react'
import RouterMovie from './../../routers/movie'
import {Link} from 'react-router-dom'
import {Row, Col, Layout} from 'antd'
export default class Movie extends React.Component{
    render(){
        return (
            <div>
                <Row style={{backgroundColor:'#ccc', fontSize: '24px',height: '64px', lineHeight: '64px' }}>
                <Col span={2} offset={4}>
                <span>北京</span>
                </Col>
                    <Col span={4} offset={4}>
                 <Link to='/movie/hot'>正在上映</Link>
                 </Col>
                 <Col span={4} offset={2}>
                 <Link to='/movie/coming'>即将热映</Link>
                 </Col>
                 </Row>
                 <Row>
                   <Col>
                       <RouterMovie/>
                   </Col>
                 </Row>         
            </div>
        )
    }
}