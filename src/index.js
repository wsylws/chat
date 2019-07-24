import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { counter } from './index.redux'
const store = createStore(counter, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : ()=>{}
    ))

ReactDom.render(
    (<Provider store={store}>
        <App/>
    </Provider>),
    document.getElementById('root')
)