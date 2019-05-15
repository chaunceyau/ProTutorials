import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react';
import TrendingInstructorCard from '../../components/InstructorCard';

export default class TrendingInstructors extends Component {
    render() {
        return (
            <React.Fragment>
                <Header as="h3" content="Trending Instructors" />
                <Card.Group
                    itemsPerRow={5}
                    stackable
                    children={
                        trendingInstructors.map(instructor => (
                            <TrendingInstructorCard key={instructor.id} {...instructor} />
                        ))
                    }
                />
            </React.Fragment>
        )
    }
}


const trendingInstructors = [
    {
        id: '9kfads9kf',
        name: 'Kobe Bryant',
        sport: 'Basketball',
        description: 'Kobe Bean Bryant, often referred to mononymously as Kobe, is an American former professional basketball player.',
        image_url: require('../../assets/1080p/kobe2.jpg'),
        total_students: 11493
    },
    {
        id: '231431',
        name: 'Jordan Burroughs',
        sport: 'Wrestling',
        description: 'Jordan Burroughs is an wrestler for Team USA and is both an Olympic champion and four-time world champion.',
        image_url: require('../../assets/1080p/burroughs2.jpg'),
        total_students: 10392

    },
    {
        id: '145321d',
        name: 'Tiger Woods',
        sport: 'Golf',
        description: 'Eldrick Tont "Tiger" Woods is an American professional golfer who is considered one of the greatest golfers of all time. ',
        image_url: require('../../assets/1080p/tiger2.jpg'),
        total_students: 9430
    },
    {
        id: 'f40kf4',
        name: 'Kevin Durant',
        sport: 'Basketball',
        description: 'Kevin Wayne Durant is an American professional basketball player for the Golden State Warriors.',
        image_url: require('../../assets/1080p/durant2.jpg'),
        total_students: 8439
    },
    {
        id: 'f40433',
        name: 'Jayson Tatum',
        sport: 'Basketball',
        description: 'Jayson Christopher Tatum is an American professional basketball player for the Boston Celtics.',
        image_url: require('../../assets/1080p/tatum2.jpg'),
        total_students: 3490
    }
]