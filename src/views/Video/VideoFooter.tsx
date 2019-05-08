import React from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import FooterContent, { video_menu_items } from './FooterContent';

export interface IAppProps {
}

export default class VideoFooter extends React.Component<IAppProps, any> {
    state = { activeItem: 'overview' }

    handleItemClick = (e: React.MouseEvent, { name }: MenuItemProps) => this.setState({ activeItem: name })
      
    render() {
        const { activeItem } = this.state
    
        return (
            <div>
                <Menu attached='top' tabular>
                    {
                        video_menu_items.map(item =>
                            <Menu.Item 
                                key={item}
                                name={item} 
                                active={activeItem === item} 
                                onClick={this.handleItemClick}
                            />
                        )
                    }
                </Menu>
        
                <FooterContent section={this.state.activeItem}/>
            </div>
        );
    }
}

