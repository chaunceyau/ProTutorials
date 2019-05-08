import React, { Component } from 'react';
import { Card, Header, Icon, Image } from 'semantic-ui-react';

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

interface TrendingInstructorCardProps {
    id: string,
    name: string,
    imageURL: string,
    totalStudents: number,
    description: string,
    sport: string
}

const TrendingInstructorCard: React.FC<TrendingInstructorCardProps> = ({ id, name, imageURL, totalStudents, description, sport }) => {
    return (
        <Card onClick={() => { }}>
            <Image src={imageURL} />
            <Card.Content header={name} description={description} meta={sport} />
            <Card.Content
                extra
                children={
                    <React.Fragment>
                        <Icon name="user circle" /> <span>{totalStudents.toLocaleString()} students</span>
                    </React.Fragment>
                }
            />
        </Card>
    )
}

const trendingInstructors = [
    {
        id: '9kfads9kf',
        name: 'Kobe Bryant',
        sport: 'Basketball',
        description: 'Kobe Bean Bryant, often referred to mononymously as Kobe, is an American former professional basketball player.',
        imageURL: require('../../assets/1080p/kobe2.jpg'),
        totalStudents: 11493
    },
    {
        id: '231431',
        name: 'Jordan Burroughs',
        sport: 'Wrestling',
        description: 'Jordan Burroughs is an wrestler for Team USA and is both an Olympic champion and four-time world champion.',
        imageURL: require('../../assets/1080p/burroughs2.jpg'),
        totalStudents: 10392

    },
    {
        id: '145321d',
        name: 'Tiger Woods',
        sport: 'Golf',
        description: 'Eldrick Tont "Tiger" Woods is an American professional golfer who is considered one of the greatest golfers of all time. ',
        imageURL: require('../../assets/1080p/tiger2.jpg'),
        totalStudents: 9430
    },
    {
        id: 'f40kf4',
        name: 'Kevin Durant',
        sport: 'Basketball',
        description: 'Kevin Wayne Durant is an American professional basketball player for the Golden State Warriors.',
        imageURL: require('../../assets/1080p/durant2.jpg'),
        totalStudents: 8439
    },
    {
        id: 'f40433',
        name: 'Jayson Tatum',
        sport: 'Basketball',
        description: 'Jayson Christopher Tatum is an American professional basketball player for the Boston Celtics.',
        imageURL: require('../../assets/1080p/tatum2.jpg'),
        totalStudents: 3490
    }
]