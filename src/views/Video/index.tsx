import * as React from 'react';
import ReactPlayer from 'react-player';
import { match as MatchProps } from 'react-router';
import { Card, Grid, Segment } from 'semantic-ui-react';
// 
import { series_video_data } from '../../util/api';
import SeriesContent from '../Series/SeriesContent';
import VideoFooter from './VideoFooter';

export interface IVideoProps {
    id: string,
    // TODO: Probably better interface 
    match: MatchProps<{ id: string }>
}

export default class Video extends React.Component<IVideoProps, any> {
    player: any;

    componentDidMount() {
        console.log('PLAYEr ', this.player)

    }

    render() {
        const { id } = this.props.match.params
        const video = series_video_data.categories[0].videos[0]

        if (this.player)
            this.player.seekTo(23)

        return (
            <React.Fragment>
                <Segment attached="top">
                    <h3>{series_video_data.title} {id}</h3>
                </Segment>
                <Segment attached="bottom">
                    <Grid padded={false}>
                        <Grid.Column width='ten'>
                            <Card fluid header={`Section 1, Video 1: ${video.title}`} />
                            <div>
                                <ReactPlayer
                                    controls
                                    width='100%'
                                    height='100%'
                                    url={video.video_url}
                                    ref={player => this.player = player}
                                    onSeek={(props) => { console.log('props', props) }}
                                />
                            </div>
                            <button onClick={() => this.player.setState({ played: 40 })}>lfdsa</button>
                        </Grid.Column>
                        <Grid.Column width='six'>
                            <Card fluid header="Series Videos" />
                            <SeriesContent categories={series_video_data.categories} />
                        </Grid.Column>
                    </Grid>
                    <br />
                    <VideoFooter />
                </Segment>
            </React.Fragment>
        );
    }
}
