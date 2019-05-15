import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
// 
import NavigationBar from './components/NavigationBar';
import Routes from './Routes';


const App: React.FC<any> = () => (
    <Container style={{ paddingTop: 15 }}>
        <Router>
            <NavigationBar />
            <Routes />
        </Router>
    </Container>
)


export default App