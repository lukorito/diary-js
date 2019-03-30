import React from 'react';
import Homepage from './Homepage';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Global = createGlobalStyle`
    body, html {
        height: 100%;
        font-family: "Open Sans",Arial,sans-serif;
    }
`;

class App extends React.Component<{}> {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Switch>
                        <Route exact path='/' component={Homepage}/>
                        <Route render={() => <h1>Page not found</h1>}/>
                    </Switch>
                    <Global/>
                </React.Fragment>
            </Router>
        )
    }
}


export default App;