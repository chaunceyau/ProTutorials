import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image, Label } from 'semantic-ui-react';

interface SeriesCardProps {
    id: string,
    title: string,
    instructor: string,
    imageURL: string,
    price: number,
    rating: number,
    enrolled: number,
    description: string
}

const SeriesCard: React.FC<SeriesCardProps> = ({ id, title, instructor, imageURL, price, rating, enrolled, description }) => (
    <Card as={Link} to={`/series/${id}`}>
        <Image size="huge" src={imageURL} />
        <Label attached='top right' color="red" content={`$${price}`} />
        <Card.Content >
            <Card.Header content={title} />
            <Card.Meta content={instructor} />
            <Card.Description content={description} />
        </Card.Content>
        <Card.Content extra>
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star half full" />
            <span>{rating}</span>
        </Card.Content>
        <Card.Content extra>
            <Icon name="user circle" />
            <span>
                {enrolled.toLocaleString()} students
            </span>
        </Card.Content>
    </Card>
)

export default SeriesCard