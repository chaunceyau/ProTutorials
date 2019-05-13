import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Card, Icon, Image } from 'semantic-ui-react';

interface InstructorCardProps extends RouteComponentProps {
    id: string,
    name: string,
    imageURL: string,
    totalStudents: number,
    description: string,
    sport: string
}

const InstructorCard: React.FC<InstructorCardProps> =
    ({ id, name, imageURL, totalStudents, description, sport, history }) => (
        <Card onClick={() => history.push(`/instructor/${id}`)}>
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


export default withRouter(InstructorCard)