import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Card, Icon, Image } from 'semantic-ui-react';

interface InstructorCardProps extends RouteComponentProps {
    id: string,
    name: string,
    image_url: string,
    total_students: number,
    description: string,
    sport: string
}

const InstructorCard: React.FC<InstructorCardProps> =
    ({ id, name, image_url, total_students, description, sport, history }) => (
        <Card onClick={() => history.push(`/instructor/${id}`)}>
            <Image src={image_url} />
            <Card.Content header={name} description={description} meta={sport} />
            <Card.Content
                extra
                children={
                    <React.Fragment>
                        <Icon name="user circle" /> <span>{total_students.toLocaleString()} students</span>
                    </React.Fragment>
                }
            />
        </Card>
    )


export default withRouter(InstructorCard)