import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react';
import SeriesCard from '../../components/SeriesCard';

class TrendingVideos extends Component {
    render() {
        return (
            <React.Fragment>
                <Header content="Trending Series" />
                <Card.Group
                    itemsPerRow={5}
                    stackable
                    children={trendingVideos.map(props => <SeriesCard key={props.title} {...props} />)}
                />
            </React.Fragment>
        )
    }
}

export default (TrendingVideos)

const sizing = "1080p"

const trendingVideos = [
    {

        id: '43154321',
        title: "Chipping",
        imageURL: require(`../../assets/${sizing}/twoods.jpg`),
        instructor: "Tiger Woods",
        description: 'Learn how to make accurate chip shots with one of the greatest golfers of all time.',
        enrolled: 2523,
        price: 24.99,
        rating: 4.99
    },
    {
        id: 'fdjsa90fsda',
        title: "Takedown Series",
        imageURL: require(`../../assets/${sizing}/burroughs.jpg`),
        instructor: "Jordan Burroughs",
        description: 'Jordan teaches you his renowned double leg, singles and very effective setups.',
        enrolled: 7120,
        price: 14.99,
        rating: 5.00
    },
    {
        id: '4fkl3104f',
        title: "Shooting Series",
        imageURL: require(`../../assets/${sizing}/curry.jpg`),
        instructor: "Stephen Curry",
        description: 'Learn from the one of the best shooters in league history.',
        enrolled: 4934,
        price: 18.99,
        rating: 4.90
    },
    {
        id: 'a49kfwfsda',
        title: "Passing Fundamentals",
        imageURL: require(`../../assets/${sizing}/manning.jpg`),
        instructor: "Peyton Manning",
        description: 'Peyton teaches you the fundamentals of passing starting with the basics.',
        enrolled: 2923,
        price: 24.99,
        rating: 4.88
    },
    {
        id: '4931krmf3',
        title: "Driving Series",
        imageURL: require(`../../assets/${sizing}/harden.jpg`),
        instructor: "James Harden",
        description: 'One of the most unstoppable offensive players in league history teaching you his ways.',
        enrolled: 3430,
        price: 14.99,
        rating: 4.75
    }
]