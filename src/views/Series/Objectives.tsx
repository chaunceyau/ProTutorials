import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';
import { chunk } from '../../util/func';

interface IProps {
    objectives: string[]
}

const Objectives: React.FC<IProps> = (props:IProps) => {
    return (
        <Segment>
            <Grid>
            {
                chunk(props.objectives, 2)
                    .map((obj, index) => {
                        const paddingBottom = index !== (props.objectives.length / 2 - 1) ? 0 : '1rem' 
                        return (
                            <Grid.Row key={index} columns='two' style={{ paddingBottom }}>
                                {obj.map(o => <Grid.Column key={o}><Icon name='check circle' />{o}</Grid.Column>)}
                            </Grid.Row>
                        )
                    })
            }
        </Grid>
    </Segment>
    );
}

export default Objectives