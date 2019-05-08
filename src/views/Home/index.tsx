import React, { Component } from 'react';
import TrendingInstructors from './TrendingInstructors';
import TrendingSports from './TrendingSports';
import TrendingVideos from './TrendingVideos';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Segment>
                    <Header as="h2" textAlign="center" color="red">
                        Learn from the best in the industry
                    </Header>
                </Segment> */}
                <TrendingSports />
                <TrendingVideos />
                <TrendingInstructors />
            </React.Fragment>
        )
    }
}
