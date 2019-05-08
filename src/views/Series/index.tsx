import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Grid, Segment } from 'semantic-ui-react';
import { series_video_data } from '../../util/api';
import SeriesMain from './SeriesMain';
import SeriesSidebar from './SeriesSidebar';

interface SeriesProps {
    id: string
}

const Series = ({ match }: RouteComponentProps<SeriesProps>) => (
    <Segment>
        <Grid stackable>
            <Grid.Row>
                <Grid.Column>
                    <Segment>
                        <Grid>
                            <Grid.Row columns='two'>
                                <Grid.Column width={10}>
                                    <h2>{series_video_data.instructor.name}: {series_video_data.title}</h2>
                                </Grid.Column>
                                <Grid.Column width={6} textAlign='right'>
                                    {/* <h3>
                                        <Icon name='star' />
                                        <Icon name='star' />
                                        <Icon name='star' />
                                        <Icon name='star' />
                                        <Icon name='star half' />
                                        <b>(10,000 ratings)</b>   
                                    </h3> */}
                                    <Button as='a' compact color='green' onClick={()=>{}}>
                                            Purchase: $19.99
                                        </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column width='eleven'>
                    <SeriesMain 
                        instructor={series_video_data.instructor}
                        title={series_video_data.title} 
                        categories={series_video_data.categories}
                        objectives={series_video_data.objectives}
                        description={series_video_data.description}
                    />
                </Grid.Column>
                <Grid.Column width='five'>
                    <SeriesSidebar 
                        title={series_video_data.title} 
                        instructor={series_video_data.instructor} 
                        description={series_video_data.description} 
                        image_url={series_video_data.image_url} 
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)

export default Series
