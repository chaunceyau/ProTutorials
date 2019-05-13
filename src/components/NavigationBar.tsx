import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavigationBar = (props: any) => (
    <Menu inverted color="red">
        <Menu.Item header>
            <Link to='/'>ProTutorials</Link>
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item name='home' active={props.location.pathname === '/'} as={Link} to='/' />
            <Menu.Item name='explore' active={props.location.pathname === '/explore'} as={Link} to='/explore' />
            <Menu.Item name='register' icon="user circle" />
        </Menu.Menu>
    </Menu>
)

export default withRouter(NavigationBar)