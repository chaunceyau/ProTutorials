import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

interface SeriesSidebarProps {
    title: string,
    instructor: IInstructor,
    description: string,
    image_url: string
}

export interface IInstructor {
    id: string,
    bio: string,
    name: string,
    sport: string,
    quick_accolades_string?: string
}

const SeriesSidebar: React.FC<SeriesSidebarProps> = ({ title, instructor, description, image_url }) => (
    <Card fluid>
        <Image src={image_url} />
        <Card.Content 
            header={instructor.name} 
            meta={
                {
                    content: 
                        <React.Fragment>
                            <Icon name='user circle'/>
                            <span>140,430 students</span>
                        </React.Fragment>
                }
            }
            description={instructor.bio} 
        />
    </Card>
)

export default SeriesSidebar