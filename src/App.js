import React from 'react'
import {Layout} from 'antd'
import Footer from './layout/footer'
import RouterIndex from './routers/index'
import './index.css'
export default class App extends React.Component{
    render(){
        return (<div className='whole'>
            {/* <Layout.Footer>
            </Layout.Footer> */}
                <main className='wrap'>
                <RouterIndex />
                </main>
            <Layout.Header >
            <Footer/>
            </Layout.Header>
        </div>
        )
    }
}