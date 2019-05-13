import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface IProps extends RouteComponentProps<{ id: string }> {

}

export default class InstructorView extends React.Component<IProps, any> {
  render() {
    return (
      <div>
        Instructor id: {this.props.match.params.id}
      </div>
    );
  }
}
