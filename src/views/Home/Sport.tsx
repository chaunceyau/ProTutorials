import * as React from 'react';
import { Card } from 'semantic-ui-react';
import InstructorCard from '../../components/InstructorCard';
import { series_video_data } from '../../util/api';
import { IHomeViewState } from './index';

interface IProps extends IHomeViewState {

}

export default class Sport extends React.Component<IProps, any> {

    render() {
        const { id, instructor, image_url, total_students, sport } = series_video_data
        return (
            <React.Fragment>
                <h3>{this.props.activeSport} Instructors</h3>
                <Card.Group itemsPerRow='five'>
                    <InstructorCard id={id} name={instructor.name} image_url={image_url} total_students={total_students} description={instructor.bio} sport={sport.title} />
                </Card.Group>
            </React.Fragment>
        );
    }
}
