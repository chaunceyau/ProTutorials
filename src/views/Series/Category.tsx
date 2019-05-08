import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { IVideo } from './SeriesMain';
import VideoSegment from './VideoSegment';

interface IProps {
  id: string,
  title: string, 
  videos: IVideo[],
}

interface IState {
  expanded: boolean
}

export default class Category extends Component<IProps, IState> {

  state = {
    expanded: false
  }

  handleClick = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }))
  }

  render() {
    const { id, title, videos } = this.props
    return (
        <React.Fragment key={id}>
          <Accordion.Title active={this.state.expanded} index={id} onClick={this.handleClick}>
              <Icon name={this.state.expanded ? 'minus' : 'plus'} />
              <span>{title}</span>
          </Accordion.Title>
          <Accordion.Content active={this.state.expanded}>
              {
                videos.map((video, index) => 
                  <VideoSegment key={video.id} {...video} 
                    attached={index === 0 ? 'top' : index === videos.length - 1 ? 'bottom' : true}
                  />
                )
              }
          </Accordion.Content>    
        </React.Fragment>
    )
  }
}

