// modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import App from './App';

const routes = (
    <Router>
        <Switch>
            <Route path="/" component={App}/>
        </Switch>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
