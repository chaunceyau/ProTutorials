import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Icon, Segment } from 'semantic-ui-react';

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
        <Link to='/sdlfm'>
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
                              <span>{(formatMillisecondsToVideoTime(resume_time))} of {(formatMillisecondsToVideoTime(video_length))}</span>
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


function formatMillisecondsToVideoTime(second: number): string {
  const   seconds = Math.floor(second  % 60),
          minutes = Math.floor((second / (60) % 60)),
          hours   = Math.floor((second / (60*60) % 24))
  
  const modifiedSeconds = seconds === 0 ? '00' : seconds
  const modifiedMinutes = minutes < 10 ? `0${minutes}` : minutes
  // return `${hours > 0 && `${hours}:`} ${minutes > 0 && `${minutes}:`} ${seconds}`
  if (hours > 0)
      return `${hours}:${modifiedMinutes}:${modifiedSeconds}`
  return `${modifiedMinutes}:${modifiedSeconds}`
}