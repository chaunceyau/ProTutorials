import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Grid, Segment } from 'semantic-ui-react';
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

const series_video_data = {
    id: '023443',
    title: 'Takedown Clinic',
    image_url: 'https://i.pinimg.com/originals/15/33/98/153398ec3601a31fe8b61761d6a43f26.jpg',
    instructor: {
        id: '439kf34',
        name: 'Jordan Burroughs',
        quick_accolades_string: '2016 Olympic Champion',
        bio: 'Jordan Burroughs is an American freestyle wrestler and former folkstyle wrestler. In freestyle wrestling, Burroughs is an Olympic champion and four-time world champion.',
        sport: 'Wrestling'
    },
    objectives: [
        'The double-leg takedown is a wrestling move that offsets your opponents balance, so that you can lift or slam them onto the ground',
        'You want to bend your knees and stick your butt out, similar to doing a squat.',
        'Don’t let that rear leg drag behind and put all of the stress on the lead leg.',
        'The double leg merely offsets your opponents balance, allowing you to drive them to the ground.'
    ],
    description: 'The staff will host three team camps and three specialized individual camps. Wrestlers in attendance will have a chance to learn from and compete with the Husker wrestling staff and team members. Head Coach Mark Manning will provide instruction at each camp as well as numerous guest instructors.',
    categories: [
        {
            id: 'v032k',
            title: 'Single Leg Setups',
            videos: [
                {
                    id: 'k02f0kf403k',
                    title: 'Sweep Single',
                    resume_time: 400,
                    video_length: 800
                },
                {
                    id: 'fl3m4fm4l3',
                    title: 'Fake High-Crotch',
                    resume_time: 800,
                    video_length: 1800
                },
                {
                    id: 'fl034lf034l',
                    title: 'Ankle Pick',
                    resume_time: 0,
                    video_length: 900
                }
            ]
        },
        {
            id: 'kc030k43',
            title: 'Double Leg Setups',
            videos: [
                {
                    id: '23ok1dk',
                    title: 'Push/Pull and Pop',
                    resume_time: 400,
                    video_length: 1200
                },
                {
                    id: 'f4jk130',
                    title: 'Double Overhook Snaps',
                    resume_time: 1200,
                    video_length: 2100
                },
                {
                    id: 'dk023kd',
                    title: 'Monkey Double',
                    resume_time: 290,
                    video_length: 590
                }
            ]
        }
    ]
}