import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
// 
import NavigationBar from './components/NavigationBar';
import Routes from './Routes';


class App extends Component {

    render() {
        return (
            <Container style={{ paddingTop: 15 }}>
                <Router>
                    <NavigationBar />
                    <Routes />
                </Router>
            </Container>
        )
    }
}


export default App