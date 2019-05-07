// modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';

// components
import App from './App';

const routes = (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
