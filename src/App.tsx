import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
// 
import NavigationBar from './components/NavigationBar';
import Home from './views/Home';
import Series from './views/Series';

export default class App extends Component {
    render() {
        return (
            <Container style={{ paddingTop: 15 }}>
                <Router>
                    <NavigationBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/series' component={Series} />
                        <Route exact path='/series/:id' component={Series} />
                    </Switch>
                </Router>
            </Container>
        )
    }
}
