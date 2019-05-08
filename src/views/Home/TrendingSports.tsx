import React, { Component } from 'react';
import { Card, Responsive } from 'semantic-ui-react';

export default class TrendingSports extends Component {
    render() {
        return (
            <Responsive {...Responsive.onlyLargeScreen}>
                <h3>Trending Sports</h3>
                <Card.Group itemsPerRow={6} stackable>
                    {
                        ['Basketball', 'Wrestling', 'Football', 'Golf', 'Baseball', 'Weightlifting'].map(sport =>
                            <Card key={sport} description={sport} onClick={() => { }} />
                        )
                    }
                </Card.Group>
            </Responsive>
        )
    }
}
