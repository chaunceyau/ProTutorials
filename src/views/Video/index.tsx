import * as React from 'react';
import ReactPlayer from 'react-player';
import { match as MatchProps } from 'react-router';
import { Card, Grid, Segment } from 'semantic-ui-react';
import { series_video_data } from '../../util/api';
import SeriesContent from '../Series/SeriesContent';
import VideoFooter from './VideoFooter';

export interface IVideoProps {
    id: string,
    // TODO: Probably better interface 
    match: MatchProps<{ id: string }>
}

export default class Video extends React.Component<IVideoProps, any> {
 render() {
    const { id } = this.props.match.params
    const video = series_video_data.categories[0].videos[0]
    return (
        <React.Fragment>
            <Segment attached="top">
                <h3>{series_video_data.title}</h3>
            </Segment>
            <Segment attached="bottom">
                <Grid padded={false}>
                    <Grid.Column width='ten'>
                        <Card fluid header={`Section 1, Video 1: ${video.title}`} />
                        <ReactPlayer controls url={video.video_url} />
                    </Grid.Column>
                    <Grid.Column width='six'>
                        <Card fluid header="Series Videos" />
                        <SeriesContent categories={series_video_data.categories}/>
                    </Grid.Column>
                </Grid>
                <br />
                <VideoFooter />
            </Segment>
        </React.Fragment>
    );
  }
}
