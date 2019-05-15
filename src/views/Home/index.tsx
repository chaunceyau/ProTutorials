import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import Sport from './Sport';
import TrendingInstructors from './TrendingInstructors';
import TrendingSports from './TrendingSports';
import TrendingVideos from './TrendingVideos';

export interface IHomeViewState {
    activeSport: 'Basketball' | 'Wrestling' | 'Wrestling' | 'Golf' | 'Soccer' | 'Weightlifting' | null,
}
export default class HomeView extends Component<any, IHomeViewState> {

    constructor(props: any) {
        super(props)
        this.state = {
            activeSport: null
        }

        this.setHomeViewActiveSport = this.setHomeViewActiveSport.bind(this)
    }

    setHomeViewActiveSport(activeSport: IHomeViewState["activeSport"]) {
        this.setState(prevState => {
            if (activeSport === prevState.activeSport)
                return { activeSport: null }
            return { activeSport }
        })
    }

    render() {
        const { activeSport } = this.state
        return (
            <React.Fragment>
                <div style={{ width: '80%', marginLeft: '10%', marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Learn from the best athletes in the industry...</h2>
                    <Search
                        fluid
                        icon='search'
                        input={{ fluid: true, placeholder: 'Search for your favorite athletes or anything you wish to learn...' }}
                    />
                </div>
                <TrendingSports activeSport={activeSport} setHomeViewActiveSport={this.setHomeViewActiveSport} />
                {
                    activeSport === null ?
                        <React.Fragment>
                            <TrendingVideos />
                            <TrendingInstructors />
                        </React.Fragment>
                        :
                        <Sport activeSport={activeSport} />
                }

            </React.Fragment>
        )
    }
}
