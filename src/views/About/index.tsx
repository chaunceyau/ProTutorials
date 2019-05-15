import React from 'react';

export interface IProps {
}

export default class About extends React.Component<IProps, any> {
    render() {
        return (
            <span>
                about page
          </span>
        );
    }
}

const sports = [
    {
        title: 'Football',
        series: [
            {
                title: 'test'
            },
            {
                title: 'tlesmd'
            }
        ]
    },
    {
        title: 'Wrestling',
        series: [
            {
                title: 'Double legs'
            },
            {
                title: 'singles legs'
            }
        ]
    }
]