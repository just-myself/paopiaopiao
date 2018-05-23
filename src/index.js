import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import App from './App'
// import {LocaleProvider} from 'antd'
// import zhCN from 'antd/lib/locale-provider/zh_CN'
import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import callAPIMiddleware from './middle/api'
import reducers from './reducer/index'
const composeEnhancers = compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, callAPIMiddleware)))
ReactDOM.render(
<Provider store={store}>
 <BrowserRouter>
     <App />
 </BrowserRouter>     
</Provider>, document.getElementById('root'));
registerServiceWorker();
