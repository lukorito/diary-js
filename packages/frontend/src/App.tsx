import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Homepage from './components/homepage/Homepage';
import EntriesContainer from "./containers/EntriesContainer";
import Entries from "./components/user/Entries";

require('dotenv').config({path: '../.env'});

const Global = createGlobalStyle`
    body, html {
        height: 100%;
        font-family: "Helvetica Neue","Open Sans",Arial,sans-serif;
        line-height: 1.4;
    }
`;

interface iProps {
    location: any;
}
class App extends React.Component<iProps> {
    public render() {
        return (
            <React.Fragment>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/user" component={EntriesContainer}/>
                        <Route path="/user/entries" component={Entries}/>
                        <Route render={() => <h1>Page not found</h1>}/>
                    </Switch>
                <Global/>
            </React.Fragment>
        );
    }
}

export default App;
