import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Icon, Segment } from 'semantic-ui-react';
import { formatSecondsToVideoTime } from '../../util/func';

interface IProps {
  id: string,
  title: string,
  resume_time: number,
  video_length: number,
  attached: boolean | 'top' | 'bottom' | undefined
}

interface IState {
}

export default class VideoSegment extends React.Component<IProps, IState> {
   render() {
    const {  id, title, resume_time, video_length, attached } = this.props
    return (
      <Segment attached={attached} key={id} disabled>
        <Link to={`/video/${id}`}>
          <Grid>
              <Grid.Row columns={2}>
                  <Grid.Column>
                      {
                          resume_time > 0 ? 
                              <span><Icon name='play circle outline' />&nbsp; {title}</span>
                              :
                              <b><Icon name='play circle' />&nbsp; {title}</b>
                      }
                  </Grid.Column>     
                  <Grid.Column textAlign='right'>
                      {
                          resume_time > 0 ? 
                              <span>{(formatSecondsToVideoTime(resume_time))} of {(formatSecondsToVideoTime(video_length))}</span>
                              :
                              <b>Not Started</b>
                      }
                  </Grid.Column>
              </Grid.Row>
          </Grid>
        </Link>
    </Segment>
    );
  }
}
