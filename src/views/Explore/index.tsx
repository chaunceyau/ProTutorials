import React from 'react';
import { Search } from 'semantic-ui-react';

export interface IProps {
}

export default class ExploreView extends React.Component<IProps, any> {
    public render() {
        return (
            <React.Fragment>
                <div style={{ width: '80%', marginLeft: '10%', marginTop: '2rem', textAlign: 'center' }}>
                    <h3>Learn from the best athletes in the industry, find your favorites...</h3>
                    <Search
                        fluid
                        icon='search'
                        input={{ fluid: true }}
                    />
                </div>
                {
                    sports.map((sport, index) => {
                        return (
                            <React.Fragment key={index}>
                                <h4>{sport.title}</h4>
                                {
                                    sport.series && sport.series.map((series, index) => {
                                        return (
                                            <span key={index}>{series.title}</span>
                                        )
                                    })
                                }
                            </React.Fragment>
                        )
                    })
                }
            </React.Fragment>
        );
    }
}

const sports = [
    {
        title: 'Football',
        series: [
            {
                title: 'test'
            },
            {
                title: 'tlesmd'
            }
        ]
    },
    {
        title: 'Wrestling',
        series: [
            {
                title: 'Double legs'
            },
            {
                title: 'singles legs'
            }
        ]
    }
]