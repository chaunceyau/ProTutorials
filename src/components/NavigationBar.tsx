import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItemProps } from 'semantic-ui-react';

export default class NavigationBar extends Component {
    state = {
        activeItem: 'home'
    }

    handleItemClick = (event: React.MouseEvent, data: MenuItemProps ) => {
        event.preventDefault()
        // 
        console.log("DATA: ", data)
        // this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state
        return (
            <Menu inverted color="red">
                <Menu.Item header>
                    <Link to='/'>ProTutorials</Link>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item name='explore' active={activeItem === 'explore'} onClick={this.handleItemClick} />
                    <Menu.Item name='register' active={activeItem === 'register'} onClick={this.handleItemClick} icon="user circle" />
                </Menu.Menu>
            </Menu>
        )
    }
}
