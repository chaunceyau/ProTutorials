import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import TrendingInstructors from './TrendingInstructors';
import TrendingSports from './TrendingSports';
import TrendingVideos from './TrendingVideos';

export default class HomeView extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{ width: '80%', marginLeft: '10%', marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
                    <h2>Learn from the best athletes in the industry...</h2>
                    <Search
                        fluid
                        icon='search'
                        input={{ fluid: true, placeholder: 'Search for your favorite athletes or anything you wish to learn...' }}
                    />
                </div>
                <TrendingSports />
                <TrendingVideos />
                <TrendingInstructors />
            </React.Fragment>
        )
    }
}
