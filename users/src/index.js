import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './component/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={App}/>
            {/* <App /> */}
        </Switch>
    </BrowserRouter >
, document.getElementById('root'));
registerServiceWorker();
