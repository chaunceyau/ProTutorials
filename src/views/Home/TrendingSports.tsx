import React, { Component } from 'react';
import { Card, Icon, Responsive, SemanticICONS } from 'semantic-ui-react';

export default class TrendingSports extends Component {
    render() {
        return (
            <Responsive {...Responsive.onlyLargeScreen}>
                <h3>Trending Sports</h3>

                <Card.Group itemsPerRow={6} stackable>
                    {
                        trending_sports.map(sport =>
                            <Card key={sport.title} onClick={() => { }}>
                                <Card.Content>
                                    <Card.Description>
                                        <Icon name={sport.icon} />
                                        <b style={{ marginLeft: '0.5rem' }}>{sport.title}</b>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    }
                </Card.Group>
            </Responsive>
        )
    }
}

const trending_sports: { title: string, icon: Readonly<SemanticICONS> }[] = [
    { title: 'Basketball', icon: 'basketball ball' },
    { title: 'Wrestling', icon: 'spy' },
    { title: 'Football', icon: 'football ball' },
    { title: 'Golf', icon: 'golf ball' },
    { title: 'Soccer', icon: 'futbol outline' },
    { title: 'Weightlifting', icon: 'weight' }
]