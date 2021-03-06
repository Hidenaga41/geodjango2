import React from 'react'
import ReactDOM, { render } from 'react-dom'
import App from './world/js/app'
import './world/css/app.css';
import { Provider } from 'react-redux';
//import { Router } from 'react-router-redux';
//import { connectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './world/js/createStore';
import { ConnectedRouter } from 'connected-react-router';

console.log(createBrowserHistory)
const history = createBrowserHistory();

const store = createStore(history);
console.log("hoge")
console.log(<App />)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

    //idはHTTMLに紐付けるためのもの






