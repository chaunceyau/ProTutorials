import React from 'react';
import { Step } from 'semantic-ui-react';

interface IStepsProps {
}

export default class Steps extends React.Component<IStepsProps, any> {
  public render() {
    return (
        <Step.Group size='small' fluid ordered>
            <Step>
                <Step.Content>
                    <Step.Title>Sweep Single</Step.Title>
                    <Step.Description>Setup with sweep single</Step.Description>
                </Step.Content>
            </Step>
        
            <Step active>
                <Step.Content>
                    <Step.Title>Fake High-Crotch</Step.Title>
                    <Step.Description>Highly effective setup</Step.Description>
                </Step.Content>
            </Step>
        
            <Step>
                <Step.Content>
                    <Step.Title>Ankle Pick</Step.Title>
                    <Step.Description>hmmm.. lets see</Step.Description>
                </Step.Content>
            </Step>
        </Step.Group>
    );
  }
}